import { Link } from 'react-router-dom';
import { tools } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, ExternalLink, Award } from 'lucide-react';

export function FeaturedToolsSection() {
  const featuredTools = tools.filter((t) => t.isFeatured).slice(0, 3);

  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-category-chat" />
              <span className="text-sm font-medium text-category-chat">Editor's Choice</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Featured <span className="text-gradient">AI Tools</span>
            </h2>
          </div>
          <Link to="/tools?filter=featured">
            <Button variant="outline" className="gap-2">
              See More
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Featured Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool, index) => (
            <Link
              key={tool.id}
              to={`/tools/${tool.id}`}
              className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border/50 hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Sponsored Badge */}
              <Badge className="absolute top-4 right-4 bg-category-chat/10 text-category-chat hover:bg-category-chat/20">
                Sponsored
              </Badge>

              {/* Logo & Name */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${tool.name}&background=6366f1&color=fff`;
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-category-chat text-category-chat" />
                    <span>{tool.rating}</span>
                    <span>•</span>
                    <span>{tool.reviewCount.toLocaleString()} reviews</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {tool.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tool.features.slice(0, 3).map((feature) => (
                  <Badge key={feature} variant="secondary" className="font-normal">
                    {feature}
                  </Badge>
                ))}
                {tool.features.length > 3 && (
                  <Badge variant="secondary" className="font-normal">
                    +{tool.features.length - 3} more
                  </Badge>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <Badge
                  variant="outline"
                  className={
                    tool.pricing === 'free'
                      ? 'text-category-code border-category-code'
                      : tool.pricing === 'freemium'
                      ? 'text-category-productivity border-category-productivity'
                      : 'text-category-image border-category-image'
                  }
                >
                  {tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}
                </Badge>
                <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
