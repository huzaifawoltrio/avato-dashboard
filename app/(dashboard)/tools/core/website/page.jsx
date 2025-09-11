'use client';

import { useState } from 'react';
import { Globe, Plus, Edit, Eye, Settings } from 'lucide-react';

export default function WebsiteTool() {
  const [selectedTemplate, setSelectedTemplate] = useState('business');

  const templates = [
    { id: 'business', name: 'Business', preview: '/api/placeholder/400/300' },
    { id: 'ecommerce', name: 'E-commerce', preview: '/api/placeholder/400/300' },
    { id: 'portfolio', name: 'Portfolio', preview: '/api/placeholder/400/300' },
    { id: 'blog', name: 'Blog', preview: '/api/placeholder/400/300' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
            <Globe className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-raleway font-bold text-heading">Website Builder</h1>
            <p className="text-body mt-1">Create and manage your website with AI-powered design tools</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Template Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-raleway font-semibold text-heading mb-4">Choose Template</h3>
              <div className="space-y-3">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                      selectedTemplate === template.id
                        ? 'border-primary bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium text-heading">{template.name}</div>
                    <div className="text-sm text-gray-600 mt-1">Professional {template.name.toLowerCase()} template</div>
                  </button>
                ))}
              </div>
              
              <div className="mt-6 space-y-3">
                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <input
                  type="text"
                  placeholder="Tagline"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary">
                  <option>Select Industry</option>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Retail</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Panel - Preview and Actions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-raleway font-semibold text-heading">Website Preview</h3>
                <div className="flex space-x-2">
                  <button className="flex items-center px-3 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </button>
                  <button className="flex items-center px-3 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </button>
                  <button className="flex items-center px-3 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </button>
                </div>
              </div>

              {/* Website Preview Area */}
              <div className="border-2 border-gray-200 rounded-lg p-8 bg-gray-50 min-h-96">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
                  <div className="text-center">
                    <h2 className="text-2xl font-raleway font-bold text-heading mb-2">Your Business Name</h2>
                    <p className="text-body mb-4">Professional tagline that describes your business</p>
                    <div className="flex justify-center space-x-4">
                      <div className="w-4 h-4 bg-primary rounded-full"></div>
                      <div className="w-4 h-4 bg-secondary rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-2"></div>
                    <h4 className="font-medium text-heading">Service 1</h4>
                    <p className="text-sm text-gray-600">Description of your service</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-secondary rounded-full mx-auto mb-2"></div>
                    <h4 className="font-medium text-heading">Service 2</h4>
                    <p className="text-sm text-gray-600">Description of your service</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2"></div>
                    <h4 className="font-medium text-heading">Service 3</h4>
                    <p className="text-sm text-gray-600">Description of your service</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  Save Draft
                </button>
                <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Publish Website
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}