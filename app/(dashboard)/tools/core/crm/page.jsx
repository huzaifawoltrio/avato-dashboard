'use client';

import { useState } from 'react';
import { Users, Plus, Search, Filter, Mail, Phone, Calendar } from 'lucide-react';

export default function CRMTool() {
  const [activeTab, setActiveTab] = useState('contacts');

  const contacts = [
    { id: 1, name: 'John Smith', email: 'john@example.com', phone: '+1 (555) 123-4567', status: 'Lead', lastContact: '2 days ago' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', phone: '+1 (555) 234-5678', status: 'Customer', lastContact: '1 week ago' },
    { id: 3, name: 'Mike Brown', email: 'mike@example.com', phone: '+1 (555) 345-6789', status: 'Prospect', lastContact: '3 days ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-raleway font-bold text-heading">CRM Dashboard</h1>
              <p className="text-body mt-1">Manage your customer relationships and sales pipeline</p>
            </div>
          </div>
          <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors">
            <Plus className="h-5 w-5 mr-2" />
            Add Contact
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Total Contacts</h3>
            <p className="text-3xl font-bold text-heading">1,234</p>
            <p className="text-green-600 text-sm mt-1">+12% from last month</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Active Leads</h3>
            <p className="text-3xl font-bold text-heading">167</p>
            <p className="text-green-600 text-sm mt-1">+8% from last month</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Conversion Rate</h3>
            <p className="text-3xl font-bold text-heading">18.5%</p>
            <p className="text-red-600 text-sm mt-1">-2% from last month</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Revenue This Month</h3>
            <p className="text-3xl font-bold text-heading">$24,567</p>
            <p className="text-green-600 text-sm mt-1">+15% from last month</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl border border-gray-200">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {['contacts', 'deals', 'activities'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 text-sm font-medium capitalize border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Search and Filter Bar */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="h-5 w-5 mr-2" />
                Filter
              </button>
            </div>
          </div>

          {/* Contact List */}
          <div className="p-6">
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div key={contact.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">
                        {contact.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-heading">{contact.name}</h4>
                      <p className="text-sm text-gray-600">{contact.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-heading">{contact.status}</p>
                      <p className="text-xs text-gray-500">Last contact: {contact.lastContact}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                        <Phone className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                        <Calendar className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}