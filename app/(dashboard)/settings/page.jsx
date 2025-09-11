'use client';

import { useState } from 'react';
import { Settings, Moon, Sun, Bell, Shield, CreditCard, Trash2, Save } from 'lucide-react';

export default function SettingsPage() {
  const [preferences, setPreferences] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    marketingEmails: false,
    twoFactorAuth: false,
    autoSave: true,
  });

  const [accountSettings, setAccountSettings] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handlePreferenceChange = (key) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleAccountChange = (e) => {
    setAccountSettings(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSavePreferences = () => {
    console.log('Preferences saved:', preferences);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    console.log('Password change request:', accountSettings);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
            <Settings className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-raleway font-bold text-heading">Settings</h1>
            <p className="text-body mt-1">Manage your account preferences and security settings</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* General Preferences */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-raleway font-semibold text-heading">General Preferences</h2>
              <button
                onClick={handleSavePreferences}
                className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Theme */}
              <div>
                <h3 className="text-lg font-medium text-heading mb-4">Appearance</h3>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    {preferences.darkMode ? (
                      <Moon className="h-5 w-5 text-gray-600 mr-3" />
                    ) : (
                      <Sun className="h-5 w-5 text-gray-600 mr-3" />
                    )}
                    <div>
                      <p className="font-medium text-heading">Dark Mode</p>
                      <p className="text-sm text-gray-600">Use dark theme across the application</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('darkMode')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      preferences.darkMode ? 'bg-primary' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        preferences.darkMode ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Notifications */}
              <div>
                <h3 className="text-lg font-medium text-heading mb-4">Notifications</h3>
                <div className="space-y-3">
                  {[
                    { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive notifications via email' },
                    { key: 'pushNotifications', label: 'Push Notifications', desc: 'Receive browser push notifications' },
                    { key: 'weeklyReports', label: 'Weekly Reports', desc: 'Get weekly summary reports' },
                    { key: 'marketingEmails', label: 'Marketing Emails', desc: 'Receive product updates and tips' },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <Bell className="h-5 w-5 text-gray-600 mr-3" />
                        <div>
                          <p className="font-medium text-heading">{item.label}</p>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handlePreferenceChange(item.key)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                          preferences[item.key] ? 'bg-primary' : 'bg-gray-200'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            preferences[item.key] ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-xl font-raleway font-semibold text-heading mb-6">Security & Privacy</h2>
            
            <div className="space-y-6">
              {/* Two-Factor Authentication */}
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-gray-600 mr-3" />
                  <div>
                    <p className="font-medium text-heading">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                  </div>
                </div>
                <button
                  onClick={() => handlePreferenceChange('twoFactorAuth')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    preferences.twoFactorAuth ? 'bg-primary' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      preferences.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Change Password */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-heading mb-4">Change Password</h3>
                <form onSubmit={handleChangePassword} className="space-y-4">
                  <div>
                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="currentPassword"
                      name="currentPassword"
                      value={accountSettings.currentPassword}
                      onChange={handleAccountChange}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={accountSettings.newPassword}
                        onChange={handleAccountChange}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={accountSettings.confirmPassword}
                        onChange={handleAccountChange}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Update Password
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Billing & Subscription */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-xl font-raleway font-semibold text-heading mb-6">Billing & Subscription</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <p className="font-medium text-heading">Pro Plan</p>
                    <p className="text-sm text-gray-600">$49.99/month • Next billing: March 15, 2024</p>
                  </div>
                </div>
                <button className="px-4 py-2 border border-green-300 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                  Manage Subscription
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <h4 className="font-medium text-heading">Payment Method</h4>
                  <p className="text-sm text-gray-600 mt-1">•••• •••• •••• 4242</p>
                </button>
                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <h4 className="font-medium text-heading">Billing History</h4>
                  <p className="text-sm text-gray-600 mt-1">View past invoices</p>
                </button>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-white rounded-xl p-6 border border-red-200">
            <h2 className="text-xl font-raleway font-semibold text-red-600 mb-6">Danger Zone</h2>
            
            <div className="space-y-4">
              <div className="p-4 border border-red-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-heading">Delete Account</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                  </div>
                  <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}