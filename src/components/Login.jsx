import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'me@email.com' && password === 'password123') {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password.Please try again');
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row overflow-hidden font-sans">
      {/* Left Side: Background & Stats */}
      <div 
        className="relative w-full md:w-1/2 h-full flex flex-col justify-between p-8 md:p-14 text-white bg-cover bg-center" 
        style={{ backgroundImage: `url('bg-image.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <img src="/logo.png" alt="NigerToday TV" className="w-41 h-41 object-contain" />
          </div>

          <div className="space-y-6 my-auto">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
                Know who to call today.
              </h1>
              <p className="text-gray-200 text-sm md:text-base max-w-md">
                Track every customer subscription, see who is expiring, and send renewal reminders in one place.
              </p>
            </div>

            <div className="space-y-3">
              <div className="inline-flex items-center gap-3 bg-white text-gray-800 px-5 py-3 rounded-xl shadow-md text-sm font-semibold">
                <span className="text-emerald-600 font-bold text-lg">24</span>
                <span className="text-gray-600 font-medium">customers active</span>
              </div>

              <div className="flex items-center gap-3 bg-white text-gray-800 px-5 py-3 rounded-xl shadow-md text-sm font-semibold w-fit">
                <span className="text-amber-500 font-bold text-lg">4</span>
                <span className="text-gray-600 font-medium">expiring this month</span>
              </div>

              <div className="flex items-center gap-3 bg-white text-gray-800 px-5 py-3 rounded-xl shadow-md text-sm font-semibold w-fit">
                <span className="text-rose-500 font-bold text-lg">2</span>
                <span className="text-gray-600 font-medium">expired — follow up</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 text-xs text-gray-300">
            Private owner dashboard · Works on phone and computer
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-20 bg-white">
        <div className="max-w-md w-full mx-auto space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="text-sm text-gray-500 mt-1">Log in to manage your customers.</p>
          </div>

          {error && (
            <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded-xl text-xs">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                EMAIL OR USERNAME
              </label>
              <input 
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="owner@email.com" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 text-sm text-gray-800 placeholder-gray-400"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  PASSWORD
                </label>
                <a href="#" className="text-xs text-indigo-600 hover:underline font-medium">
                  Forgot password?
                </a>
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 text-sm text-gray-800 placeholder-gray-400"
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-200 text-sm cursor-pointer"
            >
              Log in
            </button>
          </form>
          
          <p className="text-[11px] text-gray-400 text-center">
            Demo credentials: <span className="font-semibold text-gray-600">me@email.com</span> / <span className="font-semibold text-gray-600">password123</span>
          </p>
        </div>
      </div>
    </div>
  );
}