import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      <aside className="w-64 bg-white border-r border-gray-200 md:flex flex-col justify-between hidden">
        <div>
          <div className="p-6">
            <img src="/logo.png" alt="NigerToday TV" className="w-12 h-12 object-contain" />
          </div>

          <nav className="px-4 space-y-1">
            <button onClick={() => navigate('/dashboard')} className="w-full flex items-center gap-3 px-4 py-3 bg-indigo-600 text-white rounded-xl font-medium text-sm shadow-md shadow-indigo-600/20 text-left cursor-pointer">
              <span>📊</span> Dashboard
            </button>
            <button onClick={() => navigate('/customers')} className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium text-sm transition-colors text-left cursor-pointer">
              <span>👥</span> Customers
            </button>
            <button onClick={() => navigate('/expiring')} className="w-full flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium text-sm transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <span>⏰</span> Expiring
              </div>
              <span className="bg-amber-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">4</span>
            </button>
            <button onClick={() => navigate('/expired')} className="w-full flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium text-sm transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <span>⚠️</span> Expired
              </div>
              <span className="bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">2</span>
            </button>
            <button onClick={() => navigate('/settings')} className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium text-sm transition-colors text-left cursor-pointer">
              <span>⚙️</span> Settings
            </button>
          </nav>
        </div>

        <div className="p-4 border-t border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">
              AO
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-800">Alex Owner</h4>
              <p className="text-[10px] text-gray-400">Business owner</p>
            </div>
          </div>
          <button onClick={handleLogout} className="text-gray-400 hover:text-gray-600 cursor-pointer" title="Log out">
            🚪
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 px-8 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard</h1>
            <p className="text-xs text-gray-500 mt-0.5">Monday, October 5, 2026 - Here is who needs your attention today</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-full md:w-72">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 text-sm">🔍</span>
              <input 
                type="text" 
                placeholder="Search name, phone or email" 
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:bg-white"
              />
            </div>

            <button 
              onClick={() => navigate('/add-customer')}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all whitespace-nowrap cursor-pointer"
            >
              <span>+</span> Add Customer
            </button>
          </div>
        </header>

        <div className="p-8 space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-amber-600 text-lg">⚠️</span>
              <p className="text-xs md:text-sm font-medium text-amber-900">
                6 customers need your attention — <span className="font-bold">4 expire within 10 days</span> and <span className="font-bold">2 have already expired</span>.
              </p>
            </div>
            <button className="bg-white hover:bg-amber-100 text-amber-800 border border-amber-300 px-4 py-1.5 rounded-xl text-xs font-semibold shadow-sm transition-all cursor-pointer">
              Review now
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-gray-500 text-xs font-medium"><span>👥</span> Total customers</div>
              <div className="text-3xl font-extrabold text-gray-900">30</div>
              <p className="text-[11px] text-gray-400">All saved customers</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 text-xs font-medium"><span>✔️</span> Active</div>
              <div className="text-3xl font-extrabold text-gray-900">24</div>
              <p className="text-[11px] text-gray-400">More than 10 days left</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-amber-500 text-xs font-medium"><span>⏰</span> Expiring soon</div>
              <div className="text-3xl font-extrabold text-gray-900">4</div>
              <p className="text-[11px] text-gray-400">Within the next 10 days</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-rose-500 text-xs font-medium"><span>⚠️</span> Expired</div>
              <div className="text-3xl font-extrabold text-gray-900">2</div>
              <p className="text-[11px] text-gray-400">Follow up to renew</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}