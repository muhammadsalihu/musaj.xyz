import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, FileText, Bot, ExternalLink, LogOut } from 'lucide-react';
import { useAdmin } from './AdminContext';

const NAV = [
  { to: '/my-admin', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/my-admin/projects', label: 'Projects', icon: FolderKanban },
  { to: '/my-admin/blog', label: 'Blog', icon: FileText },
  { to: '/my-admin/agents', label: 'Agents', icon: Bot },
];

const AdminLayout = () => {
  const { logout } = useAdmin();
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-56 bg-gray-900 flex flex-col fixed h-full z-10">
        <div className="px-5 py-5 border-b border-gray-800">
          <p className="text-white font-bold">musaj.space</p>
          <p className="text-gray-500 text-xs mt-0.5">Admin</p>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {NAV.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? 'bg-brand text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="px-3 py-4 border-t border-gray-800 space-y-0.5">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition"
          >
            <ExternalLink className="w-4 h-4" />
            View Site
          </a>
          <button
            onClick={() => { logout(); navigate('/my-admin'); }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-red-400 hover:bg-gray-800 transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      <main className="ml-56 flex-1 p-8 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
