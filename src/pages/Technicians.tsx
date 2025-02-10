import React from 'react';

export default function Technicians() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Technicians</h1>
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">Technician Management</h3>
          <p className="mt-1 text-sm text-gray-500">
            View and manage technician profiles, assignments, and schedules.
          </p>
        </div>
      </div>
    </div>
  );
}