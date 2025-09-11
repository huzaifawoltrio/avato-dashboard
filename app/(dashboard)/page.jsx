import Section from '@/components/Section';
import ToolCard from '@/components/ToolCard';
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
  Copyright
} from 'lucide-react';

const toolGroups = [
  {
    title: 'Core Platform & Infrastructure',
    tools: [
      {
        title: 'Website',
        description: 'Build and manage your website with AI-powered design tools and templates.',
        href: '/tools/core/website',
        icon: Globe
      },
      {
        title: 'CRM',
        description: 'Customer relationship management with automated workflows and insights.',
        href: '/tools/core/crm',
        icon: Users
      },
      {
        title: 'Dashboard & Analytics',
        description: 'Comprehensive analytics and reporting for all your marketing activities.',
        href: '/tools/core/analytics',
        icon: BarChart
      },
      {
        title: 'Media Vault',
        description: 'Centralized storage and management for all your digital assets.',
        href: '/tools/core/media',
        icon: Database
      }
    ]
  },
  {
    title: 'Smart Content & Branding',
    tools: [
      {
        title: 'Smart Content Shield',
        description: 'Protect your content with AI-powered plagiarism detection and monitoring.',
        href: '/tools/content/shield',
        icon: Shield
      },
      {
        title: 'Branding Assistant',
        description: 'Maintain brand consistency across all your marketing materials.',
        href: '/tools/content/branding',
        icon: Palette
      },
      {
        title: 'Content Rewriter',
        description: 'Transform existing content into fresh, engaging variations.',
        href: '/tools/content/rewrite',
        icon: RefreshCw
      },
      {
        title: 'Compliance & Style Export',
        description: 'Ensure all content meets industry standards and style guidelines.',
        href: '/tools/content/compliance',
        icon: FileCheck
      }
    ]
  },
  {
    title: 'AI Video & Avatar Studio',
    tools: [
      {
        title: 'Photo-to-Avatar',
        description: 'Create personalized AI avatars from photos for your marketing campaigns.',
        href: '/tools/video/avatar',
        icon: Camera
      },
      {
        title: 'AI Video Creator',
        description: 'Generate professional marketing videos with AI-powered editing.',
        href: '/tools/video/creator',
        icon: Video
      },
      {
        title: 'Podcast Creator',
        description: 'Create engaging podcasts with AI voice synthesis and editing.',
        href: '/tools/video/podcast',
        icon: Mic
      }
    ]
  },
  {
    title: 'Communication Automator',
    tools: [
      {
        title: 'Email & SMS',
        description: 'Automated email and SMS campaigns with personalization.',
        href: '/tools/comm/email-sms',
        icon: Mail
      },
      {
        title: 'Personalized Campaigns',
        description: 'Create targeted campaigns based on customer behavior and preferences.',
        href: '/tools/comm/personalized',
        icon: Target
      },
      {
        title: 'Phone Campaigns',
        description: 'Automated phone campaigns with AI voice and call scheduling.',
        href: '/tools/comm/phone',
        icon: Phone
      }
    ]
  },
  {
    title: 'AI Marketing Assistant',
    tools: [
      {
        title: 'AI Persona',
        description: 'Create detailed customer personas using AI analysis of your data.',
        href: '/tools/assistant/persona',
        icon: Bot
      },
      {
        title: 'Campaign Recommendations',
        description: 'Get AI-powered suggestions for optimizing your marketing campaigns.',
        href: '/tools/assistant/recommendations',
        icon: Lightbulb
      },
      {
        title: 'Analytics Explained',
        description: 'Understand your analytics with AI-generated insights and explanations.',
        href: '/tools/assistant/analytics',
        icon: TrendingUp
      },
      {
        title: 'Strategy Advice',
        description: 'Receive strategic marketing advice tailored to your business goals.',
        href: '/tools/assistant/strategy',
        icon: MessageSquare
      }
    ]
  },
  {
    title: 'Add-On Tools',
    tools: [
      {
        title: 'Review & Reputation Genie',
        description: 'Monitor and manage your online reputation across all platforms.',
        href: '/tools/addons/reputation',
        icon: Star
      },
      {
        title: 'Local Lead Radar',
        description: 'Discover and capture local leads with location-based targeting.',
        href: '/tools/addons/lead-radar',
        icon: Radar
      },
      {
        title: 'Marketing-Compliance Copilot',
        description: 'Ensure your marketing campaigns comply with regulations.',
        href: '/tools/addons/compliance',
        icon: AlertTriangle
      },
      {
        title: 'UGC Rights Manager',
        description: 'Manage user-generated content rights and permissions.',
        href: '/tools/addons/ugc-rights',
        icon: Copyright
      }
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-raleway font-bold text-heading mb-4">
            Mission Control Center
          </h1>
          <p className="text-lg text-body max-w-3xl">
            Welcome to AvatoAI's comprehensive marketing platform. Access all your tools and 
            manage your campaigns from this central dashboard. Choose from our powerful suite 
            of AI-driven marketing solutions to grow your business.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <BarChart className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-heading">24</p>
                <p className="text-sm text-gray-600">Active Campaigns</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-heading">1,234</p>
                <p className="text-sm text-gray-600">Total Contacts</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-heading">18.5%</p>
                <p className="text-sm text-gray-600">Conversion Rate</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <Database className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-heading">567</p>
                <p className="text-sm text-gray-600">Media Files</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tool Groups */}
        {toolGroups.map((group) => (
          <Section key={group.title} title={group.title}>
            {group.tools.map((tool) => (
              <ToolCard
                key={tool.title}
                title={tool.title}
                description={tool.description}
                href={tool.href}
                icon={tool.icon}
              />
            ))}
          </Section>
        ))}
      </div>
    </div>
  );
}