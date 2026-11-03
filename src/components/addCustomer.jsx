import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddCustomer() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('Sarah Khan');
  const [phone, setPhone] = useState('+1 555 019 2210');
  const [email, setEmail] = useState('sarah@email.com');
  const [startDate, setStartDate] = useState('October 5, 2026');
  const [duration, setDuration] = useState('3 months');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Customer successfully added!');
    navigate('/customers');
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
            <button onClick={() => navigate('/customers')} className="w-full flex items-center gap-3 px-4 py-3 bg-indigo-600 text-white rounded-xl font-medium text-sm shadow-md shadow-indigo-600/20 text-left">
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
        <header className="bg-white border-b border-gray-200 px-8 py-5">
          <button onClick={() => navigate('/customers')} className="text-xs text-indigo-600 font-semibold mb-1 hover:underline cursor-pointer flex items-center gap-1">
            ← Customers
          </button>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Add Customer</h1>
          <p className="text-xs text-gray-500 mt-0.5">Save a customer and their subscription. The expiry date is worked out for you.</p>
        </header>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-3">Customer information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">Full name</label>
                  <input 
                    type="text" 
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">Phone number</label>
                  <input 
                    type="text" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">Email</label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  required
                />
              </div>

              <h3 className="text-sm font-bold text-gray-900 border-b border-gray-100 pt-4 pb-3">Subscription</h3>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">Subscription start date</label>
                <input 
                  type="text" 
                  value={startDate} 
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">Subscription duration</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: '3 months', ends: 'Ends Jan 5, 2027' },
                    { label: '6 months', ends: 'Ends Apr 5, 2027' },
                    { label: '12 months', ends: 'Ends Oct 5, 2027' }
                  ].map((d) => (
                    <button
                      type="button"
                      key={d.label}
                      onClick={() => setDuration(d.label)}
                      className={`p-3 rounded-xl border text-left text-xs font-medium cursor-pointer transition-all ${
                        duration === d.label ? 'border-indigo-600 bg-indigo-50/50 text-indigo-900 ring-1 ring-indigo-600' : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-bold flex items-center gap-1.5">
                        <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${duration === d.label ? 'border-indigo-600 bg-indigo-600 text-white text-[8px]' : 'border-gray-300'}`}>
                          {duration === d.label && '✓'}
                        </span>
                        {d.label}
                      </div>
                      <div className="text-[10px] text-gray-400 mt-1 pl-5">{d.ends}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                <button 
                  type="button" 
                  onClick={() => navigate('/customers')}
                  className="px-5 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 cursor-pointer"
                >
                  ✓ Add Customer
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm h-fit space-y-4">
              <h3 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-3">Subscription summary</h3>
              <div className="flex justify-between text-xs text-gray-600">
                <span>Start date</span>
                <span className="font-semibold text-gray-900">Oct 5, 2026</span>
              </div>
              <div className="flex justify-between text-xs text-gray-600">
                <span>Duration</span>
                <span className="font-semibold text-gray-900">{duration}</span>
              </div>

              <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-100 space-y-1">
                <div className="text-[11px] text-indigo-700 font-medium">Expiration date</div>
                <div className="text-base font-bold text-indigo-950">Jan 5, 2027</div>
                <div className="text-[10px] text-indigo-500">Calculated automatically</div>
              </div>

              <div className="flex items-center justify-between text-xs pt-2">
                <span className="text-gray-500">Status after saving</span>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full text-[11px] font-semibold">
                  • Active · 92 days left
                </span>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}