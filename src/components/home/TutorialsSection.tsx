import { Link } from 'react-router-dom';
import { tutorials } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

export function TutorialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-category-research" />
              <span className="text-sm font-medium text-category-research">Learn & Grow</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Latest <span className="text-gradient">Tutorials</span>
            </h2>
          </div>
          <Link to="/tutorials">
            <Button variant="outline" className="gap-2">
              All Tutorials
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutorials.map((tutorial, index) => (
            <Link
              key={tutorial.id}
              to={`/tutorials/${tutorial.id}`}
              className="group rounded-2xl bg-card border border-border/50 overflow-hidden hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <Badge className="absolute top-3 left-3 bg-card/80 backdrop-blur-sm">
                  {tutorial.category.charAt(0).toUpperCase() + tutorial.category.slice(1)}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {tutorial.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {tutorial.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{tutorial.author}</span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {tutorial.readTime} min
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
