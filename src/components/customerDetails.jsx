import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CustomerDetails() {
  const navigate = useNavigate();

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
        <header className="bg-white border-b border-gray-200 px-8 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <button onClick={() => navigate('/customers')} className="text-xs text-indigo-600 font-semibold mb-1 hover:underline cursor-pointer flex items-center gap-1">
              ← Customers
            </button>
            <div className="flex items-center gap-3 mt-1">
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">JS</div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-xl font-bold text-gray-900 tracking-tight">John Smith</h1>
                  <span className="bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                    • Expiring · 3 days left
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5">Customer since Apr 8, 2026</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5">
              <span>✏️</span> Edit
            </button>
            <button className="border border-indigo-100 bg-indigo-50/50 hover:bg-indigo-100 text-indigo-700 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5">
              <span>💬</span> Send Reminder
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all cursor-pointer flex items-center gap-1.5">
              <span>🔄</span> Renew Subscription
            </button>
          </div>
        </header>

        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase">Subscription</div>
                <div className="text-xs text-gray-500 mt-0.5">Current plan details</div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-2xl font-extrabold text-amber-600">3 days left</span>
                  <span className="text-xs font-semibold text-gray-500">Expires Oct 8, 2026</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[90%] rounded-full"></div>
                </div>
                <div className="flex justify-between text-[11px] text-gray-400 font-medium">
                  <span>Jul 8, 2026</span>
                  <span>Oct 8, 2026</span>
                </div>
              </div>

              <div className="divide-y divide-gray-100 text-xs">
                <div className="py-3 flex justify-between">
                  <span className="text-gray-500">Start date</span>
                  <span className="font-semibold text-gray-900">Jul 8, 2026</span>
                </div>
                <div className="py-3 flex justify-between">
                  <span className="text-gray-500">Duration</span>
                  <span className="font-semibold text-gray-900">3 months</span>
                </div>
                <div className="py-3 flex justify-between">
                  <span className="text-gray-500">Expiration date</span>
                  <span className="font-semibold text-gray-900">Oct 8, 2026</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Renewal history</h3>
                <p className="text-xs text-gray-400 mt-0.5">Every time this subscription was renewed</p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                    <div>
                      <div className="text-xs font-bold text-gray-900">Renewed for 3 months</div>
                      <div className="text-[11px] text-gray-400">Jul 8, 2026 → Oct 8, 2026</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                    <div>
                      <div className="text-xs font-bold text-gray-900">First subscription · 3 months</div>
                      <div className="text-[11px] text-gray-400">Apr 8, 2026 → Jul 8, 2026</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-3">Contact</h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50/60 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400">📞</span>
                    <div>
                      <div className="text-[10px] text-gray-400 font-medium">Phone</div>
                      <div className="font-semibold text-gray-800">+1 555 012 3456</div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 cursor-pointer">📋</button>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50/60 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400">✉️</span>
                    <div>
                      <div className="text-[10px] text-gray-400 font-medium">Email</div>
                      <div className="font-semibold text-gray-800">john@email.com</div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 cursor-pointer">📋</button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Delete customer</h3>
                <p className="text-[11px] text-gray-400 mt-0.5">Removes this customer and their subscription records. This cannot be undone.</p>
              </div>
              <button className="w-full border border-rose-200 hover:bg-rose-50 text-rose-600 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-2">
                <span>🗑️</span> Delete customer
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}