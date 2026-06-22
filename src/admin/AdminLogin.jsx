import React, { useState } from 'react';
import { useAdmin } from './AdminContext';
import { Lock, LogIn, ArrowRight } from 'lucide-react';

const AdminLogin = () => {
  const { login, skipLogin } = useAdmin();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!login(password)) setError('Incorrect password.');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 w-full max-w-md">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-brand p-2 rounded-xl">
            <Lock className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">musaj.space</h1>
            <p className="text-xs text-gray-400">Admin Dashboard</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              placeholder="Enter admin password"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
            />
            {error && <p className="text-red-500 text-xs mt-1.5">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-brand text-white py-2.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition"
          >
            <LogIn className="w-4 h-4" />
            Sign In
          </button>
        </form>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-xs text-gray-400">or</span>
          </div>
        </div>

        <button
          onClick={skipLogin}
          className="w-full border border-gray-200 text-gray-600 py-2.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition"
        >
          Continue without login
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
