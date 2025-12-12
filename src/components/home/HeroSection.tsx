import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight, Sparkles, Bot, Wand2, Zap } from 'lucide-react';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Floating Icons */}
      <div className="absolute top-32 left-[10%] hidden lg:block animate-float">
        <div className="w-16 h-16 rounded-2xl bg-card shadow-xl flex items-center justify-center">
          <Bot className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-48 right-[15%] hidden lg:block animate-float-delayed">
        <div className="w-14 h-14 rounded-2xl bg-card shadow-xl flex items-center justify-center">
          <Wand2 className="w-7 h-7 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-32 left-[15%] hidden lg:block animate-float-delayed">
        <div className="w-12 h-12 rounded-xl bg-card shadow-xl flex items-center justify-center">
          <Zap className="w-6 h-6 text-category-chat" />
        </div>
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Discover 500+ AI Tools</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
            Find the Perfect
            <span className="text-gradient block mt-2">AI Tool for You</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Browse, compare, and discover the best AI tools for writing, image generation, coding, and more. All in one place.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for AI tools... (e.g., ChatGPT, Midjourney, Copilot)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 sm:h-16 pl-14 pr-36 text-base sm:text-lg rounded-2xl bg-card shadow-xl border-0 focus-visible:ring-2 focus-visible:ring-primary"
              />
              <Link to={`/tools?search=${searchQuery}`}>
                <Button
                  variant="gradient"
                  size="lg"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 sm:h-12 px-6"
                >
                  Search
                </Button>
              </Link>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="flex flex-wrap items-center justify-center gap-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <span className="text-sm text-muted-foreground">Popular:</span>
            {['ChatGPT', 'Midjourney', 'GitHub Copilot', 'Claude'].map((term) => (
              <Link
                key={term}
                to={`/tools?search=${term}`}
                className="px-3 py-1.5 rounded-lg bg-muted hover:bg-muted/80 text-sm font-medium transition-colors"
              >
                {term}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/tools">
              <Button variant="hero" size="xl" className="gap-2">
                Explore All Tools
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/compare">
              <Button variant="glass" size="xl">
                Compare Tools
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
