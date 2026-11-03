import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExpiringSoon() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  const customers = [
    { id: 1, name: 'John Smith', email: 'john@email.com', phone: '+1 555 012 3456', expires: 'Oct 8', days: '3 days left', group: '1-3 days' },
    { id: 2, name: 'Michael Brown', email: 'michael@email.com', phone: '+1 555 013 7788', expires: 'Oct 12', days: '7 days left', group: '4-7 days' },
    { id: 3, name: 'David Lee', email: 'david@email.com', phone: '+1 555 014 6621', expires: 'Oct 15', days: '10 days left', group: '8-10 days' },
    { id: 4, name: 'Priya Das', email: 'priya@email.com', phone: '+1 555 018 8802', expires: 'Oct 15', days: '10 days left', group: '8-10 days' },
  ];

  const filtered = customers.filter(c => {
    if (activeTab === '1-3 days') return c.group === '1-3 days';
    if (activeTab === '4-7 days') return c.group === '4-7 days';
    if (activeTab === '8-10 days') return c.group === '8-10 days';
    return true;
  });

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
            <button className="w-full flex items-center justify-between px-4 py-3 bg-indigo-600 text-white rounded-xl font-medium text-sm shadow-md shadow-indigo-600/20 cursor-pointer">
              <div className="flex items-center gap-3"><span>⏰</span> Expiring</div>
              <span className="bg-amber-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">4</span>
            </button>
            <button onClick={() => navigate('/expired')} className="w-full flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium text-sm transition-colors cursor-pointer">
              <div className="flex items-center gap-3"><span>⚠️</span> Expired</div>
              <span className="bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">2</span>
            </button>
            <button onClick={() => navigate('/settings')} className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium text-sm transition-colors text-left cursor-pointer">
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
        <header className="bg-white border-b border-gray-200 px-8 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Expiring Soon</h1>
            <p className="text-xs text-gray-500 mt-0.5">4 subscriptions expire within the next 10 days</p>
          </div>
          <div className="relative w-full md:w-72">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 text-sm">🔍</span>
            <input 
              type="text" 
              placeholder="Search name, phone or email" 
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:bg-white"
            />
          </div>
        </header>

        <div className="p-8 space-y-6">
          <div className="flex items-center gap-2">
            {['All', '1-3 days', '4-7 days', '8-10 days'].map((tab) => {
              const count = tab === 'All' ? 4 : tab === '1-3 days' ? 1 : tab === '4-7 days' ? 1 : 2;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                    activeTab === tab 
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' 
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span>{tab}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${activeTab === tab ? 'bg-indigo-700 text-white' : 'bg-gray-100 text-gray-600'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-[10px] uppercase font-bold text-gray-400 bg-gray-50/50">
                  <th className="py-3 px-5">Customer</th>
                  <th className="py-3 px-5">Phone</th>
                  <th className="py-3 px-5">Expires</th>
                  <th className="py-3 px-5">Remaining</th>
                  <th className="py-3 px-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs text-gray-700">
                {filtered.map((c) => {
                  const initials = c.name.split(' ').map(n => n[0]).join('');
                  return (
                    <tr key={c.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-3.5 px-5 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                          {initials}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{c.name}</h4>
                          <p className="text-[11px] text-gray-400">{c.email}</p>
                        </div>
                      </td>
                      <td className="py-3.5 px-5 text-gray-500">{c.phone}</td>
                      <td className="py-3.5 px-5 text-gray-900 font-medium">{c.expires}</td>
                      <td className="py-3.5 px-5">
                        <span className="bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full text-[11px] font-semibold inline-flex items-center gap-1">
                          • {c.days}
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-right space-x-2">
                        <button className="border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-1.5 rounded-xl font-medium text-xs transition-colors cursor-pointer">
                          💬 Send Reminder
                        </button>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl font-medium text-xs transition-colors cursor-pointer">
                          Renew
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

