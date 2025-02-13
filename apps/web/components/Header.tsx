import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { useAuthStore } from '../store';

export default function Header() {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold text-gray-800">
          Maintenance Manager Pro
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">{user?.name}</span>
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <User className="w-5 h-5 text-gray-600" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}