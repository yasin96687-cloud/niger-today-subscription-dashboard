import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Customers() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    { id: 1, name: 'John Smith', email: 'john@email.com', phone: '+1 555 012 3456', startDate: 'Jul 8, 2026', duration: '3 mo', expires: 'Oct 8', status: 'Expiring', daysLeft: '3 days left' },
    { id: 2, name: 'Michael Brown', email: 'michael@email.com', phone: '+1 555 013 7788', startDate: 'Jul 12, 2026', duration: '3 mo', expires: 'Oct 12', status: 'Expiring', daysLeft: '7 days left' },
    { id: 3, name: 'Sarah Khan', email: 'sarah@email.com', phone: '+1 555 019 2210', startDate: 'Oct 5, 2026', duration: '3 mo', expires: 'Jan 5, 2027', status: 'Active', daysLeft: 'Active' },
    { id: 4, name: 'David Lee', email: 'david@email.com', phone: '+1 555 014 6621', startDate: 'Apr 15, 2026', duration: '6 mo', expires: 'Oct 15', status: 'Expiring', daysLeft: '10 days left' },
    { id: 5, name: 'Emma Wilson', email: 'emma@email.com', phone: '+1 555 011 9034', startDate: 'Jun 1, 2026', duration: '12 mo', expires: 'Jun 1, 2027', status: 'Active', daysLeft: 'Active' },
    { id: 6, name: 'Robert Hall', email: 'robert@email.com', phone: '+1 555 017 4410', startDate: 'Apr 3, 2026', duration: '6 mo', expires: 'Oct 3', status: 'Expired', daysLeft: '2 days ago' },
    { id: 7, name: 'James Cole', email: 'james@email.com', phone: '+1 555 018 2965', startDate: 'Jan 30, 2026', duration: '6 mo', expires: 'Sep 30', status: 'Expired', daysLeft: '5 days ago' },
  ];

  const filteredCustomers = customers.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.phone.includes(searchTerm);
    if (activeTab === 'Active') return matchesSearch && c.status === 'Active';
    if (activeTab === 'Expiring soon') return matchesSearch && c.status === 'Expiring';
    if (activeTab === 'Expired') return matchesSearch && c.status === 'Expired';
    return matchesSearch;
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
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-indigo-600 text-white rounded-xl font-medium text-sm shadow-md shadow-indigo-600/20 text-left">
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
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Customers</h1>
            <p className="text-xs text-gray-500 mt-0.5">30 customers · Manage subscriptions and renewals</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-full md:w-72">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 text-sm">🔍</span>
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
          <div className="flex items-center gap-2">
            {['All', 'Active', 'Expiring soon', 'Expired'].map((tab) => {
              const count = tab === 'All' ? 30 : tab === 'Active' ? 24 : tab === 'Expiring soon' ? 4 : 2;
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
                  <th className="py-3 px-5">Start Date</th>
                  <th className="py-3 px-5">Duration</th>
                  <th className="py-3 px-5">Expires</th>
                  <th className="py-3 px-5">Status</th>
                  <th className="py-3 px-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs text-gray-700">
                {filteredCustomers.map((c) => {
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
                      <td className="py-3.5 px-5 text-gray-500">{c.startDate}</td>
                      <td className="py-3.5 px-5 text-gray-500">{c.duration}</td>
                      <td className="py-3.5 px-5 text-gray-900 font-medium">{c.expires}</td>
                      <td className="py-3.5 px-5">
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold inline-flex items-center gap-1 ${
                          c.status === 'Active' ? 'bg-emerald-50 text-emerald-700' :
                          c.status === 'Expiring' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 
                          'bg-rose-50 text-rose-700 border border-rose-200'
                        }`}>
                          {c.status === 'Active' ? '• Active' : c.daysLeft}
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-right space-x-2">
                        {c.status === 'Expired' ? (
                          <>
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-xl font-medium text-xs transition-colors cursor-pointer">
                              Renew
                            </button>
                            <button className="border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-1 rounded-xl font-medium text-xs transition-colors cursor-pointer">
                              Message
                            </button>
                          </>
                        ) : (
                          <>
                            <button className="border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-1 rounded-xl font-medium text-xs transition-colors cursor-pointer">
                              Message
                            </button>
                            <button className="border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-1 rounded-xl font-medium text-xs transition-colors cursor-pointer">
                              Renew
                            </button>
                          </>
                        )}
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