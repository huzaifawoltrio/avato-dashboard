import Section from "@/components/Section";
import ToolCard from "@/components/ToolCard";
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
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

// Enhanced Stats Card
function StatsCard({ icon: Icon, value, label, change, color }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200/50 hover:shadow-xl hover:shadow-gray-900/5 transition-all duration-300 hover:-translate-y-0.5 group">
      <div className="flex items-start justify-between">
        <div>
          <div
            className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>
          <p className="text-3xl font-bold text-heading mb-1">{value}</p>
          <p className="text-sm text-gray-600">{label}</p>
        </div>
        {change && (
          <div className="flex items-center text-green-600 text-sm font-medium">
            <TrendingUp className="h-4 w-4 mr-1" />
            {change}
          </div>
        )}
      </div>
    </div>
  );
}

const toolGroups = [
  {
    title: "Core Platform & Infrastructure",
    subtitle: "Essential tools for building and managing your digital presence",
    tools: [
      {
        title: "Website Builder",
        description:
          "Create stunning websites with AI-powered design tools and responsive templates.",
        href: "/tools/core/website",
        icon: Globe,
        category: "Core Platform",
      },
      {
        title: "CRM Suite",
        description:
          "Advanced customer relationship management with automation and intelligent insights.",
        href: "/tools/core/crm",
        icon: Users,
        category: "Core Platform",
      },
      {
        title: "Analytics Hub",
        description:
          "Real-time analytics and comprehensive reporting for data-driven decisions.",
        href: "/tools/core/analytics",
        icon: BarChart,
        category: "Core Platform",
      },
      {
        title: "Media Vault",
        description:
          "Secure cloud storage and intelligent organization for all your digital assets.",
        href: "/tools/core/media",
        icon: Database,
        category: "Core Platform",
      },
    ],
  },
  {
    title: "Smart Content & Branding",
    subtitle: "AI-powered tools for creating and protecting your brand content",
    tools: [
      {
        title: "Content Shield",
        description:
          "Advanced AI protection against plagiarism and unauthorized content usage.",
        href: "/tools/content/shield",
        icon: Shield,
        category: "Content AI",
        isNew: true,
      },
      {
        title: "Brand Assistant",
        description:
          "Maintain perfect brand consistency across all your marketing channels.",
        href: "/tools/content/branding",
        icon: Palette,
        category: "Content AI",
      },
      {
        title: "Smart Rewriter",
        description:
          "Transform and optimize existing content with advanced AI rewriting.",
        href: "/tools/content/rewrite",
        icon: RefreshCw,
        category: "Content AI",
      },
      {
        title: "Compliance Engine",
        description:
          "Automated compliance checking and style guide enforcement.",
        href: "/tools/content/compliance",
        icon: FileCheck,
        category: "Content AI",
      },
    ],
  },
  {
    title: "AI Video & Avatar Studio",
    subtitle: "Next-generation video creation and avatar technology",
    tools: [
      {
        title: "Avatar Creator",
        description:
          "Generate lifelike AI avatars from photos for personalized marketing.",
        href: "/tools/video/avatar",
        icon: Camera,
        category: "Video AI",
        isNew: true,
      },
      {
        title: "Video Studio",
        description:
          "Professional video production with AI-powered editing and effects.",
        href: "/tools/video/creator",
        icon: Video,
        category: "Video AI",
      },
      {
        title: "Podcast Studio",
        description:
          "Create engaging podcasts with AI voice synthesis and auto-editing.",
        href: "/tools/video/podcast",
        icon: Mic,
        category: "Video AI",
      },
    ],
  },
  {
    title: "Communication Automator",
    subtitle: "Automated multi-channel communication and campaign management",
    tools: [
      {
        title: "Email & SMS Hub",
        description:
          "Sophisticated email and SMS campaigns with deep personalization.",
        href: "/tools/comm/email-sms",
        icon: Mail,
        category: "Communication",
      },
      {
        title: "Campaign Engine",
        description:
          "AI-driven targeted campaigns based on behavioral analytics.",
        href: "/tools/comm/personalized",
        icon: Target,
        category: "Communication",
      },
      {
        title: "Voice Campaigns",
        description:
          "Automated phone outreach with natural AI voice and smart scheduling.",
        href: "/tools/comm/phone",
        icon: Phone,
        category: "Communication",
      },
    ],
  },
  {
    title: "AI Marketing Assistant",
    subtitle: "Intelligent recommendations and strategic marketing insights",
    tools: [
      {
        title: "Persona Builder",
        description:
          "Create detailed customer personas using advanced AI analysis.",
        href: "/tools/assistant/persona",
        icon: Bot,
        category: "AI Assistant",
      },
      {
        title: "Smart Recommendations",
        description:
          "Get AI-powered optimization suggestions for maximum campaign performance.",
        href: "/tools/assistant/recommendations",
        icon: Lightbulb,
        category: "AI Assistant",
      },
      {
        title: "Analytics Insights",
        description:
          "Transform complex data into clear, actionable business insights.",
        href: "/tools/assistant/analytics",
        icon: TrendingUp,
        category: "AI Assistant",
      },
      {
        title: "Strategy Advisor",
        description:
          "Receive personalized strategic guidance tailored to your business goals.",
        href: "/tools/assistant/strategy",
        icon: MessageSquare,
        category: "AI Assistant",
      },
    ],
  },
  {
    title: "Premium Add-Ons",
    subtitle: "Specialized tools for advanced marketing operations",
    tools: [
      {
        title: "Reputation Manager",
        description:
          "Monitor, manage, and improve your online reputation across all platforms.",
        href: "/tools/addons/reputation",
        icon: Star,
        category: "Premium",
      },
      {
        title: "Lead Radar",
        description:
          "Discover high-quality local leads with precision targeting technology.",
        href: "/tools/addons/lead-radar",
        icon: Radar,
        category: "Premium",
      },
      {
        title: "Compliance Copilot",
        description:
          "Ensure regulatory compliance across all your marketing activities.",
        href: "/tools/addons/compliance",
        icon: AlertTriangle,
        category: "Premium",
      },
      {
        title: "Rights Manager",
        description:
          "Streamline user-generated content rights and permission management.",
        href: "/tools/addons/ugc-rights",
        icon: Copyright,
        category: "Premium",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4" />
            Mission Control Active
          </div>

          <h1 className="text-5xl md:text-6xl font-raleway font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Mission Control Center
          </h1>

          <p className="text-xl text-body max-w-4xl mx-auto leading-relaxed">
            Welcome to AvatoAI's comprehensive marketing platform. Access all
            your tools and manage your campaigns from this central command
            center. Harness the power of AI-driven marketing solutions to
            accelerate your business growth.
          </p>
        </div>

        {/* Enhanced Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <StatsCard
            icon={BarChart}
            value="24"
            label="Active Campaigns"
            change="+12%"
            color="bg-gradient-to-br from-primary to-primary/80"
          />
          <StatsCard
            icon={Users}
            value="1,234"
            label="Total Contacts"
            change="+8%"
            color="bg-gradient-to-br from-secondary to-secondary/80"
          />
          <StatsCard
            icon={TrendingUp}
            value="18.5%"
            label="Conversion Rate"
            change="+2.3%"
            color="bg-gradient-to-br from-green-500 to-green-600"
          />
          <StatsCard
            icon={Database}
            value="567"
            label="Media Files"
            change="+45"
            color="bg-gradient-to-br from-blue-500 to-blue-600"
          />
        </div>

        {/* Recent Activity Banner */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20 rounded-2xl p-6 mb-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-raleway font-bold text-heading">
                  Recent Activity
                </h3>
                <p className="text-body text-sm">
                  Your latest campaign "Summer Sale 2025" is performing 23%
                  above average
                </p>
              </div>
            </div>
            <Link
              href="/analytics"
              className="bg-white text-primary px-4 py-2 rounded-xl font-medium text-sm hover:shadow-lg transition-all duration-200"
            >
              View Details
            </Link>
          </div>
        </div>

        {/* Tool Groups */}
        {toolGroups.map((group) => (
          <Section
            key={group.title}
            title={group.title}
            subtitle={group.subtitle}
          >
            {group.tools.map((tool) => (
              <ToolCard
                key={tool.title}
                title={tool.title}
                description={tool.description}
                href={tool.href}
                icon={tool.icon}
                category={tool.category}
                isNew={tool.isNew}
              />
            ))}
          </Section>
        ))}
      </div>
    </div>
  );
}
