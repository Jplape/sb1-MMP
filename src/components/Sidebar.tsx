import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, PenTool as Tool, Wrench, Users, FileText, Settings, LogOut } from 'lucide-react';
import { useAuthStore } from '../store';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'Interventions', icon: Tool, href: '/interventions' },
  { name: 'Equipment', icon: Wrench, href: '/equipment' },
  { name: 'Technicians', icon: Users, href: '/technicians' },
  { name: 'Reports', icon: FileText, href: '/reports' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

export default function Sidebar() {
  const logout = useAuthStore((state) => state.logout);

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-gray-900">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 px-4">
          <h1 className="text-xl font-bold text-white">MMP</h1>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`
              }
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="p-4">
          <button
            onClick={logout}
            className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}