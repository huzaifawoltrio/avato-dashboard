'use client';

import { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Camera, Save, Edit2 } from 'lucide-react';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Digital marketing professional with over 5 years of experience helping businesses grow their online presence.',
    joinDate: 'January 2023',
    avatar: null
  });

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profileData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-raleway font-bold text-heading">Profile</h1>
              <p className="text-body mt-1">Manage your account information and preferences</p>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            <Edit2 className="h-5 w-5 mr-2" />
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <User className="h-16 w-16 text-white" />
                </div>
                {isEditing && (
                  <button className="absolute bottom-0 right-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-md hover:bg-yellow-500 transition-colors">
                    <Camera className="h-5 w-5 text-white" />
                  </button>
                )}
              </div>
              <h2 className="text-2xl font-raleway font-bold text-heading mb-2">{profileData.name}</h2>
              <p className="text-gray-600 mb-4">{profileData.email}</p>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Active
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Joined {profileData.joinDate}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 mt-6">
              <h3 className="text-lg font-raleway font-semibold text-heading mb-4">Account Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Campaigns</span>
                  <span className="font-medium text-heading">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Contacts</span>
                  <span className="font-medium text-heading">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Media Files</span>
                  <span className="font-medium text-heading">567</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Storage Used</span>
                  <span className="font-medium text-heading">2.8 GB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-raleway font-semibold text-heading mb-6">Personal Information</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-heading mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={profileData.name}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-heading mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-heading mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={profileData.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-heading mb-2">
                      Location
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        value={profileData.location}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-heading mb-2">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    value={profileData.bio}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="block w-full px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors disabled:bg-gray-50 disabled:text-gray-500 resize-none"
                    placeholder="Tell us about yourself..."
                  />
                </div>

                {isEditing && (
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex items-center px-6 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      <Save className="h-5 w-5 mr-2" />
                      Save Changes
                    </button>
                  </div>
                )}
              </form>
            </div>

            {/* Activity Log */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 mt-6">
              <h3 className="text-lg font-raleway font-semibold text-heading mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { action: 'Updated profile information', time: '2 hours ago', type: 'profile' },
                  { action: 'Created new campaign "Summer Sale"', time: '1 day ago', type: 'campaign' },
                  { action: 'Uploaded 5 new media files', time: '3 days ago', type: 'media' },
                  { action: 'Generated analytics report', time: '5 days ago', type: 'report' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-heading">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}