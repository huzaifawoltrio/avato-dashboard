'use client';

import { useState } from 'react';
import { Database, Upload, Search, Filter, Grid, List, Image, Video, FileText, Download } from 'lucide-react';

export default function MediaTool() {
  const [viewMode, setViewMode] = useState('grid');
  const [filterType, setFilterType] = useState('all');

  const mediaItems = [
    { id: 1, name: 'hero-banner.jpg', type: 'image', size: '2.3 MB', uploaded: '2 days ago', url: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, name: 'product-video.mp4', type: 'video', size: '45.7 MB', uploaded: '5 days ago', url: null },
    { id: 3, name: 'brand-guidelines.pdf', type: 'document', size: '1.8 MB', uploaded: '1 week ago', url: null },
    { id: 4, name: 'logo-variations.svg', type: 'image', size: '0.5 MB', uploaded: '3 days ago', url: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 5, name: 'testimonial-video.mp4', type: 'video', size: '23.1 MB', uploaded: '1 week ago', url: null },
    { id: 6, name: 'social-media-pack.zip', type: 'document', size: '12.4 MB', uploaded: '4 days ago', url: null },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'image': return Image;
      case 'video': return Video;
      case 'document': return FileText;
      default: return FileText;
    }
  };

  const filteredItems = filterType === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.type === filterType);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
              <Database className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-raleway font-bold text-heading">Media Vault</h1>
              <p className="text-body mt-1">Centralized storage and management for all your digital assets</p>
            </div>
          </div>
          <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors">
            <Upload className="h-5 w-5 mr-2" />
            Upload Media
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Total Files</h3>
            <p className="text-3xl font-bold text-heading">1,247</p>
            <p className="text-sm text-gray-500">567 images, 89 videos, 591 documents</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Storage Used</h3>
            <p className="text-3xl font-bold text-heading">2.8 GB</p>
            <p className="text-sm text-gray-500">of 10 GB available</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Recent Uploads</h3>
            <p className="text-3xl font-bold text-heading">23</p>
            <p className="text-sm text-gray-500">in the last 7 days</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Most Used</h3>
            <p className="text-xl font-bold text-heading">Images</p>
            <p className="text-sm text-gray-500">65% of total usage</p>
          </div>
        </div>

        {/* Controls and Filters */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search media files..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <select 
                  value={filterType} 
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="all">All Files</option>
                  <option value="image">Images</option>
                  <option value="video">Videos</option>
                  <option value="document">Documents</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-primary text-white' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-primary text-white' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Media Grid/List */}
          <div className="p-6">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredItems.map((item) => {
                  const Icon = getIcon(item.type);
                  return (
                    <div key={item.id} className="group relative bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all">
                      <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                        {item.url ? (
                          <img src={item.url} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                          <Icon className="h-12 w-12 text-gray-400" />
                        )}
                      </div>
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1 bg-white rounded-full shadow-md hover:bg-gray-50">
                          <Download className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                      <h4 className="font-medium text-heading text-sm truncate">{item.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">{item.size} • {item.uploaded}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-2">
                {filteredItems.map((item) => {
                  const Icon = getIcon(item.type);
                  return (
                    <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-gray-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-heading">{item.name}</h4>
                          <p className="text-sm text-gray-500">{item.type} • {item.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">{item.uploaded}</span>
                        <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}