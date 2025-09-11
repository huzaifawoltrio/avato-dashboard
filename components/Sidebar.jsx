"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Globe,
  Users,
  BarChart,
  Database,
  Shield,
  Palette,
  RefreshCw,
  FileCheck,
  Camera,
  Video,
  Mic,
  Mail,
  Target,
  Phone,
  Bot,
  Lightbulb,
  TrendingUp,
  MessageSquare,
  Star,
  Radar,
  AlertTriangle,
  Copyright,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const navigationGroups = [
  {
    title: "Main",
    items: [
      { name: "Mission Control Center", href: "/", icon: LayoutDashboard },
    ],
  },
  {
    title: "Core Platform & Infrastructure",
    items: [
      { name: "Website", href: "/tools/core/website", icon: Globe },
      { name: "CRM", href: "/tools/core/crm", icon: Users },
      {
        name: "Dashboard & Analytics",
        href: "/tools/core/analytics",
        icon: BarChart,
      },
      { name: "Media Vault", href: "/tools/core/media", icon: Database },
    ],
  },
  {
    title: "Smart Content & Branding",
    items: [
      {
        name: "Smart Content Shield",
        href: "/tools/content/shield",
        icon: Shield,
      },
      {
        name: "Branding Assistant",
        href: "/tools/content/branding",
        icon: Palette,
      },
      {
        name: "Content Rewriter",
        href: "/tools/content/rewrite",
        icon: RefreshCw,
      },
      {
        name: "Compliance & Style Export",
        href: "/tools/content/compliance",
        icon: FileCheck,
      },
    ],
  },
  {
    title: "AI Video & Avatar Studio",
    items: [
      { name: "Photo-to-Avatar", href: "/tools/video/avatar", icon: Camera },
      { name: "AI Video Creator", href: "/tools/video/creator", icon: Video },
      { name: "Podcast Creator", href: "/tools/video/podcast", icon: Mic },
    ],
  },
  {
    title: "Communication Automator",
    items: [
      { name: "Email & SMS", href: "/tools/comm/email-sms", icon: Mail },
      {
        name: "Personalized Campaigns",
        href: "/tools/comm/personalized",
        icon: Target,
      },
      { name: "Phone Campaigns", href: "/tools/comm/phone", icon: Phone },
    ],
  },
  {
    title: "AI Marketing Assistant",
    items: [
      { name: "AI Persona", href: "/tools/assistant/persona", icon: Bot },
      {
        name: "Campaign Recommendations",
        href: "/tools/assistant/recommendations",
        icon: Lightbulb,
      },
      {
        name: "Analytics Explained",
        href: "/tools/assistant/analytics",
        icon: TrendingUp,
      },
      {
        name: "Strategy Advice",
        href: "/tools/assistant/strategy",
        icon: MessageSquare,
      },
    ],
  },
  {
    title: "Add-On Tools",
    items: [
      {
        name: "Review & Reputation Genie",
        href: "/tools/addons/reputation",
        icon: Star,
      },
      {
        name: "Local Lead Radar",
        href: "/tools/addons/lead-radar",
        icon: Radar,
      },
      {
        name: "Marketing-Compliance Copilot",
        href: "/tools/addons/compliance",
        icon: AlertTriangle,
      },
      {
        name: "UGC Rights Manager",
        href: "/tools/addons/ugc-rights",
        icon: Copyright,
      },
    ],
  },
  {
    title: "Account",
    items: [
      { name: "Profile", href: "/profile", icon: User },
      { name: "Settings", href: "/settings", icon: Settings },
    ],
  },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const pathname = usePathname();

  const handleMouseEnter = (e, itemName) => {
    if (isCollapsed) {
      const rect = e.currentTarget.getBoundingClientRect();
      setTooltipPosition({
        x: rect.right + 12,
        y: rect.top + rect.height / 2,
      });
      setHoveredItem(itemName);
    }
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      <style jsx global>{`
        /* Hide scrollbar but keep functionality */
        .custom-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        .custom-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>

      {/* Tooltip Portal - Rendered outside sidebar */}
      {hoveredItem && (
        <div
          className="fixed bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium shadow-lg border border-gray-600 pointer-events-none transition-opacity duration-200 z-50"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            transform: "translateY(-50%)",
          }}
        >
          {hoveredItem}
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800" />
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:block fixed left-0 top-16 h-full bg-gray-800 text-white transition-all duration-300 z-40 ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Collapse Toggle */}
          <div className="p-4 border-b border-gray-700">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? (
                <ChevronRight className="h-5 w-5" />
              ) : (
                <ChevronLeft className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Navigation - Hidden scrollbar with custom scroll */}
          <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-6 custom-scrollbar">
            {navigationGroups.map((group) => (
              <div key={group.title}>
                {!isCollapsed && (
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide px-3 mb-3">
                    {group.title}
                  </h3>
                )}
                <ul className="space-y-1">
                  {group.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`flex items-center ${
                            isCollapsed ? "justify-center p-4" : "px-3 py-2"
                          } text-sm font-medium rounded-lg transition-colors ${
                            isActive
                              ? "bg-orange-500 text-white"
                              : "text-gray-200 hover:bg-gray-700 hover:text-white"
                          }`}
                          onMouseEnter={(e) => handleMouseEnter(e, item.name)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <item.icon
                            className={`h-6 w-6 ${
                              isCollapsed
                                ? isActive
                                  ? "text-white"
                                  : "text-gray-200"
                                : isActive
                                ? "text-white"
                                : "text-gray-200"
                            } transition-colors`}
                          />
                          {!isCollapsed && (
                            <span className="ml-3 truncate">{item.name}</span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      <div
        className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 hidden"
        id="sidebar-overlay"
      >
        <aside className="fixed left-0 top-16 h-full w-64 bg-gray-800 text-white overflow-y-auto custom-scrollbar">
          <nav className="px-4 py-4 space-y-6">
            {navigationGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  {group.title}
                </h3>
                <ul className="space-y-1">
                  {group.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                            isActive
                              ? "bg-orange-500 text-white"
                              : "text-gray-200 hover:bg-gray-700 hover:text-white"
                          }`}
                        >
                          <item.icon className="h-5 w-5 text-gray-200" />
                          <span className="ml-3">{item.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
