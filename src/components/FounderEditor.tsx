import type { Founder, FounderStat, StoryBlock, Quote, SpeakingTopic } from '@/lib/supabase';

interface FounderEditorProps {
  founder: Partial<Founder>;
  onChange: (f: Partial<Founder>) => void;
  onSave: () => void;
  onCancel: () => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  saving: boolean;
}

const inputClass = "bg-white/[0.07] border border-white/[0.13] text-white px-4 py-[13px] text-[15px] outline-none focus:border-red transition-colors font-serif";
const labelClass = "font-oswald text-white/45 text-[10px] tracking-[2px] uppercase";
const sectionTitle = "font-bebas text-white text-[18px] tracking-[1px] mt-6 mb-3 border-t border-white/10 pt-4";

const InputField = ({ label, value, onChange, type = 'input' }: { label: string; value: string; onChange: (v: string) => void; type?: 'input' | 'textarea' }) => (
  <div className="flex flex-col gap-[5px] mb-4">
    <label className={labelClass}>{label}</label>
    {type === 'textarea' ? (
      <textarea value={value} onChange={e => onChange(e.target.value)} className={`${inputClass} min-h-[100px] resize-y`} />
    ) : (
      <input value={value} onChange={e => onChange(e.target.value)} className={inputClass} />
    )}
  </div>
);

const FounderEditor = ({ founder, onChange, onSave, onCancel, onImageUpload, saving }: FounderEditorProps) => {
  const stats: FounderStat[] = founder.stats || [];
  const storyBlocks: StoryBlock[] = founder.story_blocks || [];
  const quotes: Quote[] = founder.quotes || [];
  const teams: string[] = founder.teams || [];
  const speakingTopics: SpeakingTopic[] = founder.speaking_topics || [];

  const updateField = (key: keyof Founder, value: any) => onChange({ ...founder, [key]: value });

  // Stats helpers
  const addStat = () => updateField('stats', [...stats, { num: '', label: '' }]);
  const updateStat = (i: number, field: 'num' | 'label', val: string) => {
    const updated = [...stats];
    updated[i] = { ...updated[i], [field]: val };
    updateField('stats', updated);
  };
  const removeStat = (i: number) => updateField('stats', stats.filter((_, idx) => idx !== i));

  // Story block helpers
  const addStoryBlock = () => updateField('story_blocks', [...storyBlocks, { label: '', title: '', paragraphs: [''] }]);
  const updateStoryBlock = (i: number, field: 'label' | 'title', val: string) => {
    const updated = [...storyBlocks];
    updated[i] = { ...updated[i], [field]: val };
    updateField('story_blocks', updated);
  };
  const updateStoryParagraph = (blockIdx: number, paraIdx: number, val: string) => {
    const updated = [...storyBlocks];
    const paras = [...updated[blockIdx].paragraphs];
    paras[paraIdx] = val;
    updated[blockIdx] = { ...updated[blockIdx], paragraphs: paras };
    updateField('story_blocks', updated);
  };
  const addParagraph = (blockIdx: number) => {
    const updated = [...storyBlocks];
    updated[blockIdx] = { ...updated[blockIdx], paragraphs: [...updated[blockIdx].paragraphs, ''] };
    updateField('story_blocks', updated);
  };
  const removeParagraph = (blockIdx: number, paraIdx: number) => {
    const updated = [...storyBlocks];
    updated[blockIdx] = { ...updated[blockIdx], paragraphs: updated[blockIdx].paragraphs.filter((_, i) => i !== paraIdx) };
    updateField('story_blocks', updated);
  };
  const removeStoryBlock = (i: number) => updateField('story_blocks', storyBlocks.filter((_, idx) => idx !== i));

  // Quote helpers
  const addQuote = () => updateField('quotes', [...quotes, { text: '' }]);
  const updateQuote = (i: number, val: string) => {
    const updated = [...quotes];
    updated[i] = { text: val };
    updateField('quotes', updated);
  };
  const removeQuote = (i: number) => updateField('quotes', quotes.filter((_, idx) => idx !== i));

  // Team helpers
  const addTeam = () => updateField('teams', [...teams, '']);
  const updateTeam = (i: number, val: string) => {
    const updated = [...teams];
    updated[i] = val;
    updateField('teams', updated);
  };
  const removeTeam = (i: number) => updateField('teams', teams.filter((_, idx) => idx !== i));

  // Speaking topic helpers
  const addTopic = () => updateField('speaking_topics', [...speakingTopics, { title: '', body: '' }]);
  const updateTopic = (i: number, field: 'title' | 'body', val: string) => {
    const updated = [...speakingTopics];
    updated[i] = { ...updated[i], [field]: val };
    updateField('speaking_topics', updated);
  };
  const removeTopic = (i: number) => updateField('speaking_topics', speakingTopics.filter((_, idx) => idx !== i));

  const smallBtn = "font-oswald text-[10px] tracking-[1px] uppercase px-3 py-1 border-none cursor-pointer transition-colors";

  return (
    <div className="bg-white/[0.03] border border-white/10 p-6 mb-6 max-h-[80vh] overflow-y-auto">
      <h3 className="font-bebas text-white text-[22px] mb-4">{founder.id ? 'Edit' : 'New'} Founder</h3>

      {/* BASIC INFO */}
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Name" value={founder.name || ''} onChange={v => updateField('name', v)} />
        <InputField label="Slug (lennon/daniel)" value={founder.slug || ''} onChange={v => updateField('slug', v)} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Role" value={founder.role || ''} onChange={v => updateField('role', v)} />
        <InputField label="Display Order" value={String(founder.display_order || 1)} onChange={v => updateField('display_order', parseInt(v) || 1)} />
      </div>
      <InputField label="Bio" value={founder.bio || ''} onChange={v => updateField('bio', v)} type="textarea" />

      {/* PAGE SETTINGS */}
      <h4 className={sectionTitle}>Page & Homepage Settings</h4>
      <InputField label="Homepage Role Label (e.g. Founder & Visionary)" value={founder.homepage_role_label || ''} onChange={v => updateField('homepage_role_label', v)} />
      <InputField label="Subtitle (homepage card text)" value={founder.subtitle || ''} onChange={v => updateField('subtitle', v)} type="textarea" />
      <InputField label="Homepage Quote" value={founder.homepage_quote || ''} onChange={v => updateField('homepage_quote', v)} type="textarea" />
      <InputField label="Homepage Description (paragraphs separated by \\n\\n)" value={founder.homepage_description || ''} onChange={v => updateField('homepage_description', v)} type="textarea" />
      <InputField label="CTA Text (e.g. Read His Story)" value={founder.cta_text || ''} onChange={v => updateField('cta_text', v)} />
      <InputField label="Page Tagline (e.g. Fuel Their Future — Our Founder)" value={founder.page_tagline || ''} onChange={v => updateField('page_tagline', v)} />
      <InputField label="Page Hero Text" value={founder.page_hero_text || ''} onChange={v => updateField('page_hero_text', v)} type="textarea" />

      {/* BADGE */}
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Badge Number (e.g. 10)" value={founder.badge_number || ''} onChange={v => updateField('badge_number', v)} />
        <InputField label="Badge Text (e.g. NFL Seasons)" value={founder.badge_text || ''} onChange={v => updateField('badge_text', v)} />
      </div>

      {/* IMAGE */}
      <h4 className={sectionTitle}>Image</h4>
      <InputField label="Image URL" value={founder.image_url || ''} onChange={v => updateField('image_url', v)} />
      <div className="mb-4">
        <label className={`${labelClass} block mb-2`}>Upload Image</label>
        <input type="file" accept="image/*" onChange={onImageUpload} className="text-white/60 text-[13px] font-oswald" />
      </div>
      {founder.image_url && <img src={founder.image_url} alt="Preview" className="w-[120px] h-[120px] object-cover mb-4" />}

      {/* STATS */}
      <h4 className={sectionTitle}>Stats</h4>
      {stats.map((stat, i) => (
        <div key={i} className="flex gap-3 items-end mb-2">
          <div className="flex-1">
            <input placeholder="Number (e.g. 10)" value={stat.num} onChange={e => updateStat(i, 'num', e.target.value)} className={`${inputClass} w-full`} />
          </div>
          <div className="flex-1">
            <input placeholder="Label (e.g. NFL Seasons)" value={stat.label} onChange={e => updateStat(i, 'label', e.target.value)} className={`${inputClass} w-full`} />
          </div>
          <button onClick={() => removeStat(i)} className={`${smallBtn} bg-red/30 text-red hover:bg-red hover:text-white`}>✕</button>
        </div>
      ))}
      <button onClick={addStat} className={`${smallBtn} bg-white/10 text-white/60 hover:text-white mt-1`}>+ Add Stat</button>

      {/* STORY BLOCKS */}
      <h4 className={sectionTitle}>Story Blocks</h4>
      {storyBlocks.map((block, i) => (
        <div key={i} className="bg-white/[0.03] border border-white/[0.08] p-4 mb-3">
          <div className="flex justify-between items-center mb-2">
            <span className="font-oswald text-white/50 text-[10px] tracking-[2px] uppercase">Block {i + 1}</span>
            <button onClick={() => removeStoryBlock(i)} className={`${smallBtn} bg-red/30 text-red hover:bg-red hover:text-white`}>Remove</button>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-2">
            <input placeholder="Label (e.g. Origin Story)" value={block.label} onChange={e => updateStoryBlock(i, 'label', e.target.value)} className={`${inputClass} w-full`} />
            <input placeholder="Title" value={block.title} onChange={e => updateStoryBlock(i, 'title', e.target.value)} className={`${inputClass} w-full`} />
          </div>
          {block.paragraphs.map((p, j) => (
            <div key={j} className="flex gap-2 mb-2">
              <textarea value={p} onChange={e => updateStoryParagraph(i, j, e.target.value)} className={`${inputClass} flex-1 min-h-[70px] resize-y`} placeholder={`Paragraph ${j + 1}`} />
              <button onClick={() => removeParagraph(i, j)} className={`${smallBtn} bg-red/30 text-red hover:bg-red hover:text-white self-start mt-3`}>✕</button>
            </div>
          ))}
          <button onClick={() => addParagraph(i)} className={`${smallBtn} bg-white/10 text-white/60 hover:text-white`}>+ Add Paragraph</button>
        </div>
      ))}
      <button onClick={addStoryBlock} className={`${smallBtn} bg-white/10 text-white/60 hover:text-white mt-1`}>+ Add Story Block</button>

      {/* QUOTES */}
      <h4 className={sectionTitle}>Quotes</h4>
      {quotes.map((q, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <textarea value={q.text} onChange={e => updateQuote(i, e.target.value)} className={`${inputClass} flex-1 min-h-[60px] resize-y`} placeholder="Quote text" />
          <button onClick={() => removeQuote(i)} className={`${smallBtn} bg-red/30 text-red hover:bg-red hover:text-white self-start mt-3`}>✕</button>
        </div>
      ))}
      <button onClick={addQuote} className={`${smallBtn} bg-white/10 text-white/60 hover:text-white mt-1`}>+ Add Quote</button>

      {/* TEAMS */}
      <h4 className={sectionTitle}>Teams (for NFL players)</h4>
      {teams.map((team, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input value={team} onChange={e => updateTeam(i, e.target.value)} className={`${inputClass} flex-1`} placeholder="e.g. New York Giants '14–15" />
          <button onClick={() => removeTeam(i)} className={`${smallBtn} bg-red/30 text-red hover:bg-red hover:text-white`}>✕</button>
        </div>
      ))}
      <button onClick={addTeam} className={`${smallBtn} bg-white/10 text-white/60 hover:text-white mt-1`}>+ Add Team</button>

      {/* SPEAKING TOPICS */}
      <h4 className={sectionTitle}>Speaking Topics</h4>
      {speakingTopics.map((topic, i) => (
        <div key={i} className="bg-white/[0.03] border border-white/[0.08] p-4 mb-3">
          <div className="flex justify-between items-center mb-2">
            <span className="font-oswald text-white/50 text-[10px] tracking-[2px] uppercase">Topic {i + 1}</span>
            <button onClick={() => removeTopic(i)} className={`${smallBtn} bg-red/30 text-red hover:bg-red hover:text-white`}>Remove</button>
          </div>
          <input placeholder="Title" value={topic.title} onChange={e => updateTopic(i, 'title', e.target.value)} className={`${inputClass} w-full mb-2`} />
          <textarea placeholder="Description" value={topic.body} onChange={e => updateTopic(i, 'body', e.target.value)} className={`${inputClass} w-full min-h-[70px] resize-y`} />
        </div>
      ))}
      <button onClick={addTopic} className={`${smallBtn} bg-white/10 text-white/60 hover:text-white mt-1`}>+ Add Topic</button>

      {/* SAVE / CANCEL */}
      <div className="flex gap-3 mt-8 pt-4 border-t border-white/10">
        <button onClick={onSave} disabled={saving}
          className="bg-red text-white px-7 py-3 font-oswald text-[13px] tracking-[2px] uppercase font-semibold border-none cursor-pointer hover:bg-red-dark transition-colors disabled:opacity-50">
          {saving ? 'Saving...' : 'Save Founder'}
        </button>
        <button onClick={onCancel}
          className="bg-white/10 text-white/60 px-7 py-3 font-oswald text-[13px] tracking-[2px] uppercase border-none cursor-pointer hover:text-white transition-colors">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default FounderEditor;
