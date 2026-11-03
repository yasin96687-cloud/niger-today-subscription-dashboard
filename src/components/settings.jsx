import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
  const navigate = useNavigate();
  const [name, setName] = useState('Alex Owner');
  const [email, setEmail] = useState('owner@email.com');
  const [remind7, setRemind7] = useState(true);
  const [remind3, setRemind3] = useState(true);
  const [remind1, setRemind1] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      <aside className="w-64 bg-white border-r border-gray-200 md:flex flex-col justify-between hidden">
        <div>
          <div className="p-6">
            <img src="/logo.png" alt="NigerToday TV" className="w-12 h-12 object-contain" />
          </div>
          <nav className="px-4 space-y-1">
            <button onClick={() => navigate('/dashboard')} className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium text-sm transition-colors text-left cursor-pointer">
              <span>📊</span> Dashboard
            </button>
            <button onClick={() => navigate('/customers')} className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium text-sm transition-colors text-left cursor-pointer">
              <span>👥</span> Customers
            </button>
            <button onClick={() => navigate('/expiring')} className="w-full flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium text-sm transition-colors cursor-pointer">
              <div className="flex items-center gap-3"><span>⏰</span> Expiring</div>
              <span className="bg-amber-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">4</span>
            </button>
            <button onClick={() => navigate('/expired')} className="w-full flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium text-sm transition-colors cursor-pointer">
              <div className="flex items-center gap-3"><span>⚠️</span> Expired</div>
              <span className="bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">2</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-indigo-600 text-white rounded-xl font-medium text-sm shadow-md shadow-indigo-600/20 text-left">
              <span>⚙️</span> Settings
            </button>
          </nav>
        </div>
        <div className="p-4 border-t border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">AO</div>
            <div>
              <h4 className="text-xs font-bold text-gray-800">Alex Owner</h4>
              <p className="text-[10px] text-gray-400">Business owner</p>
            </div>
          </div>
          <button onClick={() => navigate('/')} className="text-gray-400 hover:text-gray-600 cursor-pointer">🚪</button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 px-8 py-5">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Settings</h1>
          <p className="text-xs text-gray-500 mt-0.5">Manage your account and password.</p>
        </header>

        <div className="p-8 max-w-4xl space-y-6">
          {/* Account Box */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-gray-900">Account</h3>
            
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">Name</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">Email</label>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button 
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>

          {/* Password Box */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Password</h3>
              <p className="text-xs text-gray-400 mt-0.5">Use a strong password that only you know.</p>
            </div>
            <button className="border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5">
              <span>🔒</span> Change password
            </button>
          </div>

          {/* Reminder Settings Box */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Reminder settings</h3>
                <p className="text-xs text-gray-400 mt-0.5">Choose when a customer shows up as "Expiring soon".</p>
              </div>
              <span className="text-[10px] font-semibold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full uppercase">Optional</span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Remind me 7 days before expiry</span>
                <button 
                  type="button" 
                  onClick={() => setRemind7(!remind7)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${remind7 ? 'bg-indigo-600' : 'bg-gray-300'}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${remind7 ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Remind me 3 days before expiry</span>
                <button 
                  type="button" 
                  onClick={() => setRemind3(!remind3)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${remind3 ? 'bg-indigo-600' : 'bg-gray-300'}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${remind3 ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Remind me 1 day before expiry</span>
                <button 
                  type="button" 
                  onClick={() => setRemind1(!remind1)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${remind1 ? 'bg-indigo-600' : 'bg-gray-300'}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${remind1 ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}