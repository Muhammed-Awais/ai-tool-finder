import { Link } from 'react-router-dom';
import { categories } from '@/data/mockData';
import { 
  PenTool, Image, Video, Music, Code, MessageSquare, Zap, Search 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: Record<string, any> = {
  PenTool,
  Image,
  Video,
  Music,
  Code,
  MessageSquare,
  Zap,
  Search,
};

export function CategoriesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Explore by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse AI tools organized by their primary function and use case.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon] || Zap;
            return (
              <Link
                key={category.id}
                to={`/tools?category=${category.id}`}
                className={cn(
                  'group relative p-6 rounded-2xl bg-card border border-border/50',
                  'hover:shadow-card-hover hover:border-primary/20 hover:-translate-y-1',
                  'transition-all duration-300 animate-fade-in'
                )}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Icon */}
                <div
                  className={cn(
                    'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
                    'transition-transform duration-300 group-hover:scale-110'
                  )}
                  style={{
                    backgroundColor: `hsl(var(--${category.color}) / 0.15)`,
                    color: `hsl(var(--${category.color}))`,
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {category.description}
                </p>
                <span className="text-xs font-medium text-primary">
                  {category.count} tools →
                </span>

                {/* Hover Gradient */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--${category.color}) / 0.05) 0%, transparent 100%)`,
                  }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
