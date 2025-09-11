import Link from 'next/link';

export default function ToolCard({ title, description, href, icon: Icon }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all duration-200 group">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-raleway font-semibold text-heading mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-body text-sm leading-relaxed mb-4">
            {description}
          </p>
          <Link
            href={href}
            className="inline-flex items-center px-4 py-2 bg-primary hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Open Tool
          </Link>
        </div>
      </div>
    </div>
  );
}