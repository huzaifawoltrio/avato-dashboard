"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Menu,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Brain,
} from "lucide-react";

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link href="/" className="flex items-center ml-2 lg:ml-0">
              <Brain className="h-8 w-8 text-orange-500 mr-2" />
              <span className="text-2xl font-raleway font-bold text-heading">
                AvatoAI
              </span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:block flex-1 max-w-lg mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Search tools and features..."
              />
            </div>
          </div>

          {/* Profile Menu */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 p-2 rounded-xl hover:bg-gray-100 transition-colors"
              aria-label="User menu"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <span className="hidden md:block text-sm font-medium text-gray-700">
                John Doe
              </span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Link
                    href="/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <User className="h-4 w-4 mr-3 text-gray-400" />
                    Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <Settings className="h-4 w-4 mr-3 text-gray-400" />
                    Settings
                  </Link>
                  <hr className="my-1" />
                  <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    <LogOut className="h-4 w-4 mr-3 text-gray-400" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
