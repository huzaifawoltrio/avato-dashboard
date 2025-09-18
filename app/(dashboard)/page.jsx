import Link from "next/link";
import {
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
  ArrowRight,
} from "lucide-react";

// Minimalistic Stats Card
function StatsCard({ icon: Icon, value, label, change }) {
  const isPositive = change && change.startsWith("+");
  const isNegative = change && !change.startsWith("+") && change.includes("%");

  return (
    <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500 shadow-sm">
      <div className="text-sm text-gray-500 mb-1">{label}</div>
      <div className="flex items-end justify-between">
        <div className="text-3xl font-bold text-gray-900">{value}</div>
        {change && (
          <div
            className={`text-sm font-medium ${
              isPositive
                ? "text-green-600"
                : isNegative
                ? "text-red-500"
                : "text-green-600"
            }`}
          >
            {change}
          </div>
        )}
      </div>
    </div>
  );
}

// Minimalistic Tool Card
function ToolCard({ title, description, href, icon: Icon }) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-lg p-8 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200 h-64 w-full">
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <Icon className="h-10 w-10 text-orange-600 mb-6" />
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>
          <div className="mt-6">
            <button className="bg-orange-400 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors duration-200 flex items-center gap-2">
              Launch
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

const allTools = [
  // Core Platform & Infrastructure
  {
    title: "Website Builder",
    description: "Create professional websites with AI-powered design tools.",
    href: "/tools/core/website",
    icon: Globe,
  },
  {
    title: "CRM Suite",
    description: "Manage customer relationships with automation and insights.",
    href: "/tools/core/crm",
    icon: Users,
  },
  {
    title: "Analytics Hub",
    description: "Get detailed metrics and comprehensive reporting.",
    href: "/tools/core/analytics",
    icon: BarChart,
  },
  {
    title: "Media Vault",
    description: "Secure cloud storage and intelligent organization.",
    href: "/tools/core/media",
    icon: Database,
  },
  // Smart Content & Branding
  {
    title: "Content Shield",
    description:
      "Protect your content against plagiarism and unauthorized usage.",
    href: "/tools/content/shield",
    icon: Shield,
  },
  {
    title: "Brand Assistant",
    description: "Ensure brand consistency across all your marketing channels.",
    href: "/tools/content/branding",
    icon: Palette,
  },
  {
    title: "Smart Rewriter",
    description: "Optimize and enhance existing content with advanced AI.",
    href: "/tools/content/rewrite",
    icon: RefreshCw,
  },
  {
    title: "Compliance Engine",
    description: "Automated compliance checking and style guide enforcement.",
    href: "/tools/content/compliance",
    icon: FileCheck,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-6 py-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-semibold text-gray-900">
              Mission Control Center
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl">
            Welcome to AvatoAI's comprehensive marketing platform. Access all
            your tools and manage your campaigns from this central command
            center.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatsCard value="24" label="Total Campaigns" change="+12%" />
          <StatsCard value="1,234" label="Leads Generated" change="+18%" />
          <StatsCard value="18.5%" label="Conversion Rate" change="+2.5%" />
          <StatsCard value="567" label="Active Users" change="+4%" />
        </div>

        {/* Tools Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Your Tools</h2>
            <Link
              href="/tools"
              className="text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center gap-1"
            >
              View All Tools
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allTools.map((tool) => (
              <ToolCard
                key={tool.title}
                title={tool.title}
                description={tool.description}
                href={tool.href}
                icon={tool.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
