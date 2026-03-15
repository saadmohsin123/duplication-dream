import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useSiteContent } from '@/hooks/useSiteContent';
import { useFounders } from '@/hooks/useFounders';
import { supabase } from '@/lib/supabase';
import type { SiteContent, Founder, Lead } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const { content, loading: contentLoading, refetch: refetchContent } = useSiteContent();
  const { founders, loading: foundersLoading, refetch: refetchFounders } = useFounders();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [activeSection, setActiveSection] = useState('content');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Form state for site content
  const [siteForm, setSiteForm] = useState<Partial<SiteContent>>({});
  // Form state for founder editing
  const [editingFounder, setEditingFounder] = useState<Partial<Founder> | null>(null);

  useEffect(() => {
    if (!authLoading && !user) navigate('/login');
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (content) setSiteForm(content);
  }, [content]);

  useEffect(() => {
    if (activeSection === 'leads') fetchLeads();
  }, [activeSection]);

  const fetchLeads = async () => {
    const { data } = await supabase.from('leads').select('*').order('created_at', { ascending: false });
    if (data) setLeads(data);
  };

  const saveSiteContent = async () => {
    setSaving(true);
    const { error } = await supabase.from('site_content').update({
      hero_title: siteForm.hero_title,
      hero_subtitle: siteForm.hero_subtitle,
      framework_text: siteForm.framework_text,
      speaking_section_text: siteForm.speaking_section_text,
      contact_email: siteForm.contact_email,
      phone_number: siteForm.phone_number,
      calendly_link: siteForm.calendly_link,
      updated_at: new Date().toISOString(),
    }).eq('id', siteForm.id!);
    setSaving(false);
    setMessage(error ? 'Error saving!' : 'Saved successfully!');
    if (!error) refetchContent();
    setTimeout(() => setMessage(''), 3000);
  };

  const saveFounder = async () => {
    if (!editingFounder) return;
    setSaving(true);
    const isNew = !editingFounder.id;
    let error;
    if (isNew) {
      ({ error } = await supabase.from('founders').insert([editingFounder]));
    } else {
      ({ error } = await supabase.from('founders').update(editingFounder).eq('id', editingFounder.id!));
    }
    setSaving(false);
    setMessage(error ? 'Error saving!' : 'Founder saved!');
    if (!error) { refetchFounders(); setEditingFounder(null); }
    setTimeout(() => setMessage(''), 3000);
  };

  const uploadImage = async (file: File, founderId: string) => {
    const ext = file.name.split('.').pop();
    const path = `founders/${founderId}.${ext}`;
    const { error } = await supabase.storage.from('site-images').upload(path, file, { upsert: true });
    if (error) { setMessage('Upload error: ' + error.message); return; }
    const { data: { publicUrl } } = supabase.storage.from('site-images').getPublicUrl(path);
    return publicUrl;
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingFounder) return;
    const id = editingFounder.id || 'new-' + Date.now();
    const url = await uploadImage(file, id);
    if (url) setEditingFounder({ ...editingFounder, image_url: url });
  };

  if (authLoading || contentLoading) {
    return <div className="min-h-screen bg-navy-dark flex items-center justify-center"><div className="font-bebas text-white text-[24px]">Loading...</div></div>;
  }

  if (!user) return null;

  const navItem = (label: string, key: string) => (
    <button key={key} onClick={() => setActiveSection(key)}
      className={`font-oswald text-[13px] tracking-[2px] uppercase px-5 py-3 border-none cursor-pointer transition-colors ${
        activeSection === key ? 'bg-red text-white' : 'bg-white/[0.05] text-white/60 hover:text-white'
      }`}>{label}</button>
  );

  const inputField = (label: string, value: string, onChange: (v: string) => void, type: 'input' | 'textarea' = 'input') => (
    <div className="flex flex-col gap-[5px] mb-4">
      <label className="font-oswald text-white/45 text-[10px] tracking-[2px] uppercase">{label}</label>
      {type === 'textarea' ? (
        <textarea value={value} onChange={e => onChange(e.target.value)}
          className="bg-white/[0.07] border border-white/[0.13] text-white px-4 py-[13px] text-[15px] outline-none focus:border-red transition-colors font-serif min-h-[100px] resize-y" />
      ) : (
        <input value={value} onChange={e => onChange(e.target.value)}
          className="bg-white/[0.07] border border-white/[0.13] text-white px-4 py-[13px] text-[15px] outline-none focus:border-red transition-colors font-serif" />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-navy-dark">
      {/* Header */}
      <div className="bg-navy border-b-[3px] border-red px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red rounded-full flex items-center justify-center font-bebas text-white text-[14px]">FTF</div>
          <div>
            <div className="font-bebas text-white text-[18px] tracking-[2px]">Admin Dashboard</div>
            <div className="font-oswald text-gold text-[9px] tracking-[3px] uppercase font-light">Fuel Their Future CMS</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="/" className="font-oswald text-white/50 text-[12px] tracking-[1px] hover:text-gold transition-colors">← Back to Site</a>
          <button onClick={signOut} className="font-oswald text-[12px] tracking-[2px] uppercase bg-white/10 text-white/70 px-4 py-2 border-none cursor-pointer hover:bg-red hover:text-white transition-colors">
            Sign Out
          </button>
        </div>
      </div>

      {/* Nav */}
      <div className="px-10 py-4 flex gap-2 flex-wrap">
        {navItem('Site Content', 'content')}
        {navItem('Founders', 'founders')}
        {navItem('Leads', 'leads')}
      </div>

      {/* Message */}
      {message && (
        <div className="px-10"><div className="bg-green-600/20 border border-green-500/40 text-green-400 text-[14px] p-3 font-oswald">{message}</div></div>
      )}

      <div className="px-10 py-6 max-w-[900px]">
        {/* SITE CONTENT */}
        {activeSection === 'content' && (
          <div>
            <h2 className="font-bebas text-white text-[28px] tracking-[1px] mb-6">Edit Site Content</h2>
            {inputField('Hero Title', siteForm.hero_title || '', v => setSiteForm({ ...siteForm, hero_title: v }), 'textarea')}
            {inputField('Hero Subtitle', siteForm.hero_subtitle || '', v => setSiteForm({ ...siteForm, hero_subtitle: v }), 'textarea')}
            {inputField('Framework Text', siteForm.framework_text || '', v => setSiteForm({ ...siteForm, framework_text: v }), 'textarea')}
            {inputField('Speaking Section Text', siteForm.speaking_section_text || '', v => setSiteForm({ ...siteForm, speaking_section_text: v }), 'textarea')}
            {inputField('Contact Email', siteForm.contact_email || '', v => setSiteForm({ ...siteForm, contact_email: v }))}
            {inputField('Phone Number', siteForm.phone_number || '', v => setSiteForm({ ...siteForm, phone_number: v }))}
            {inputField('Calendly Link', siteForm.calendly_link || '', v => setSiteForm({ ...siteForm, calendly_link: v }))}
            <button onClick={saveSiteContent} disabled={saving}
              className="bg-red text-white px-9 py-4 font-oswald text-[14px] tracking-[2px] uppercase font-semibold border-none cursor-pointer hover:bg-red-dark transition-colors disabled:opacity-50 mt-2">
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        )}

        {/* FOUNDERS */}
        {activeSection === 'founders' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bebas text-white text-[28px] tracking-[1px]">Manage Founders</h2>
              <button onClick={() => setEditingFounder({ name: '', role: '', bio: '', image_url: '', career_highlights: '', display_order: founders.length + 1 })}
                className="bg-red text-white px-5 py-2 font-oswald text-[12px] tracking-[2px] uppercase font-semibold border-none cursor-pointer hover:bg-red-dark transition-colors">
                + Add Founder
              </button>
            </div>

            {editingFounder ? (
              <div className="bg-white/[0.03] border border-white/10 p-6 mb-6">
                <h3 className="font-bebas text-white text-[22px] mb-4">{editingFounder.id ? 'Edit' : 'New'} Founder</h3>
                {inputField('Name', editingFounder.name || '', v => setEditingFounder({ ...editingFounder, name: v }))}
                {inputField('Role', editingFounder.role || '', v => setEditingFounder({ ...editingFounder, role: v }))}
                {inputField('Bio', editingFounder.bio || '', v => setEditingFounder({ ...editingFounder, bio: v }), 'textarea')}
                {inputField('Career Highlights', editingFounder.career_highlights || '', v => setEditingFounder({ ...editingFounder, career_highlights: v }), 'textarea')}
                {inputField('Image URL', editingFounder.image_url || '', v => setEditingFounder({ ...editingFounder, image_url: v }))}
                {inputField('Display Order', String(editingFounder.display_order || 1), v => setEditingFounder({ ...editingFounder, display_order: parseInt(v) || 1 }))}
                <div className="mb-4">
                  <label className="font-oswald text-white/45 text-[10px] tracking-[2px] uppercase block mb-2">Upload Image</label>
                  <input type="file" accept="image/*" onChange={handleImageUpload}
                    className="text-white/60 text-[13px] font-oswald" />
                </div>
                {editingFounder.image_url && (
                  <div className="mb-4"><img src={editingFounder.image_url} alt="Preview" className="w-[120px] h-[120px] object-cover" /></div>
                )}
                <div className="flex gap-3">
                  <button onClick={saveFounder} disabled={saving}
                    className="bg-red text-white px-7 py-3 font-oswald text-[13px] tracking-[2px] uppercase font-semibold border-none cursor-pointer hover:bg-red-dark transition-colors disabled:opacity-50">
                    {saving ? 'Saving...' : 'Save'}
                  </button>
                  <button onClick={() => setEditingFounder(null)}
                    className="bg-white/10 text-white/60 px-7 py-3 font-oswald text-[13px] tracking-[2px] uppercase border-none cursor-pointer hover:text-white transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            ) : null}

            <div className="flex flex-col gap-3">
              {founders.map(f => (
                <div key={f.id} className="bg-white/[0.03] border border-white/10 p-5 flex items-center gap-5">
                  {f.image_url && <img src={f.image_url} alt={f.name} className="w-[60px] h-[60px] object-cover flex-shrink-0" />}
                  <div className="flex-1">
                    <div className="font-bebas text-white text-[20px]">{f.name}</div>
                    <div className="font-oswald text-red text-[11px] tracking-[2px] uppercase">{f.role}</div>
                  </div>
                  <div className="font-oswald text-white/30 text-[11px]">Order: {f.display_order}</div>
                  <button onClick={() => setEditingFounder(f)}
                    className="font-oswald text-[11px] tracking-[2px] uppercase bg-white/10 text-white/60 px-4 py-2 border-none cursor-pointer hover:bg-red hover:text-white transition-colors">
                    Edit
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LEADS */}
        {activeSection === 'leads' && (
          <div>
            <h2 className="font-bebas text-white text-[28px] tracking-[1px] mb-6">Contact Submissions</h2>
            {leads.length === 0 ? (
              <p className="text-white/40 font-oswald text-[14px]">No submissions yet.</p>
            ) : (
              <div className="flex flex-col gap-3">
                {leads.map(lead => (
                  <div key={lead.id} className="bg-white/[0.03] border border-white/10 p-5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bebas text-white text-[18px]">{lead.name}</div>
                      <div className="font-oswald text-white/30 text-[10px]">{new Date(lead.created_at).toLocaleDateString()}</div>
                    </div>
                    <div className="font-oswald text-gold text-[11px] tracking-[1px] mb-1">{lead.email}</div>
                    {lead.event_type && <div className="font-oswald text-red text-[10px] tracking-[2px] uppercase mb-2">{lead.event_type}</div>}
                    <p className="text-white/50 text-[14px] font-light leading-[1.6]">{lead.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
