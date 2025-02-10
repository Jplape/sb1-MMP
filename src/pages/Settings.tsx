import React from 'react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">System Settings</h3>
          <p className="mt-1 text-sm text-gray-500">
            Configure application settings and preferences.
          </p>
        </div>
      </div>
    </div>
  );
}