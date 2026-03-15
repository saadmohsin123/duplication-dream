import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await signIn(email, password);
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-navy-dark flex items-center justify-center px-6">
      <div className="w-full max-w-[400px]">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-red rounded-full flex items-center justify-center font-bebas text-white text-[22px] tracking-[1px] mx-auto mb-4">FTF</div>
          <h1 className="font-bebas text-white text-[36px] tracking-[2px]">Admin Login</h1>
          <p className="font-oswald text-white/40 text-[12px] tracking-[2px] uppercase mt-1">Fuel Their Future CMS</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <div className="bg-red/20 border border-red/40 text-red text-[14px] p-3 font-oswald">{error}</div>
          )}
          <div className="flex flex-col gap-[5px]">
            <label className="font-oswald text-white/45 text-[10px] tracking-[2px] uppercase">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
              className="bg-white/[0.07] border border-white/[0.13] text-white px-4 py-[13px] text-[15px] outline-none focus:border-red transition-colors font-serif" />
          </div>
          <div className="flex flex-col gap-[5px]">
            <label className="font-oswald text-white/45 text-[10px] tracking-[2px] uppercase">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
              className="bg-white/[0.07] border border-white/[0.13] text-white px-4 py-[13px] text-[15px] outline-none focus:border-red transition-colors font-serif" />
          </div>
          <button type="submit" disabled={loading}
            className="bg-red text-white py-[15px] font-oswald text-[14px] tracking-[2px] uppercase font-semibold border-none cursor-pointer hover:bg-red-dark transition-colors disabled:opacity-50">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
