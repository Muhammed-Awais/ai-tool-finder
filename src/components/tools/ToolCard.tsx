import { Link } from 'react-router-dom';
import { Tool } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { Star, ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ToolCardProps {
  tool: Tool;
  className?: string;
}

export function ToolCard({ tool, className }: ToolCardProps) {
  return (
    <Link
      to={`/tools/${tool.id}`}
      className={cn(
        'group flex flex-col p-5 rounded-2xl bg-card border border-border/50',
        'hover:shadow-card-hover hover:border-primary/20 hover:-translate-y-1',
        'transition-all duration-300',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center overflow-hidden shrink-0">
          <img
            src={tool.logo}
            alt={tool.name}
            className="w-8 h-8 object-contain"
            onError={(e) => {
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${tool.name}&background=6366f1&color=fff`;
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold truncate group-hover:text-primary transition-colors">
            {tool.name}
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Star className="w-3.5 h-3.5 fill-category-chat text-category-chat" />
            <span>{tool.rating}</span>
            <span className="text-border">•</span>
            <span className="truncate">{tool.category}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
        {tool.shortDescription}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tool.features.slice(0, 2).map((feature) => (
          <Badge key={feature} variant="secondary" className="text-xs font-normal">
            {feature}
          </Badge>
        ))}
        {tool.features.length > 2 && (
          <Badge variant="secondary" className="text-xs font-normal">
            +{tool.features.length - 2}
          </Badge>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border/50">
        <Badge
          variant="outline"
          className={cn(
            'text-xs',
            tool.pricing === 'free' && 'text-category-code border-category-code',
            tool.pricing === 'freemium' && 'text-category-productivity border-category-productivity',
            tool.pricing === 'paid' && 'text-category-image border-category-image'
          )}
        >
          {tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}
        </Badge>
        <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          View details
          <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  );
}
