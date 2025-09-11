import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

// Enhanced ToolCard Component
export default function ToolCard({
  title,
  description,
  href,
  icon: Icon,
  category,
  isNew = false,
}) {
  return (
    <Link href={href} className="group block">
      <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200/50 p-6 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

        {/* New badge */}
        {isNew && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
            <Zap className="h-3 w-3" />
            New
          </div>
        )}

        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-primary/20">
              <Icon className="h-7 w-7 text-white" />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-raleway font-bold text-heading group-hover:text-primary transition-colors duration-200 leading-tight">
                {title}
              </h3>
            </div>

            <p className="text-body text-sm leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
              {description}
            </p>

            {/* Action button */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {category}
              </span>
              <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                Launch
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
