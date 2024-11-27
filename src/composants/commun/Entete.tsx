import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, LogOut } from 'lucide-react';

export function Entete() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">Menuiserie Connect</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/clients" className="text-gray-700 hover:text-gray-900 inline-flex items-center px-1 pt-1">
              Clients
            </Link>
            <Link to="/menuiseries" className="text-gray-700 hover:text-gray-900 inline-flex items-center px-1 pt-1">
              Menuiseries
            </Link>
            <Link to="/devis" className="text-gray-700 hover:text-gray-900 inline-flex items-center px-1 pt-1">
              Devis
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md text-gray-600 hover:text-gray-900">
              <Menu className="h-6 w-6 md:hidden" />
            </button>
            <button className="p-2 rounded-md text-gray-600 hover:text-gray-900">
              <LogOut className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}