import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Wrench, Settings, Users, AlertCircle } from 'lucide-react';

export default function Sidebar() {
  return (
    <nav className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="space-y-2">
        <Link 
          to="/dashboard" 
          className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
        >
          <Home className="w-5 h-5" />
          <span>Tableau de bord</span>
        </Link>
        <Link 
          to="/equipment" 
          className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
        >
          <Wrench className="w-5 h-5" />
          <span>Équipements</span>
        </Link>
        <Link 
          to="/interventions" 
          className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
        >
          <AlertCircle className="w-5 h-5" />
          <span>Interventions</span>
        </Link>
        <Link 
          to="/technicians" 
          className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
        >
          <Users className="w-5 h-5" />
          <span>Techniciens</span>
        </Link>
        <Link 
          to="/settings" 
          className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
        >
          <Settings className="w-5 h-5" />
          <span>Paramètres</span>
        </Link>
      </div>
    </nav>
  );
}