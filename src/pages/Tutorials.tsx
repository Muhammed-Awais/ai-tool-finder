import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { tutorials, categories } from '@/data/mockData';
import { Search, Clock, User, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Tutorials() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesSearch =
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || tutorial.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>AI Tutorials & Guides - Learn to Use AI Tools | AI Tools Hub</title>
        <meta
          name="description"
          content="Learn how to use AI tools effectively with our comprehensive tutorials, guides, and how-to articles."
        />
      </Helmet>

      <Layout>
        <div className="pt-28 pb-20">
          <div className="container">
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-3xl lg:text-4xl font-bold mb-3">
                AI <span className="text-gradient">Tutorials</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                Learn how to use AI tools effectively with our comprehensive guides and tutorials.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-12 bg-card border-border/50 rounded-xl"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('all')}
                  className="rounded-xl"
                >
                  All
                </Button>
                {categories.slice(0, 5).map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(cat.id)}
                    className="rounded-xl"
                  >
                    {cat.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Tutorials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTutorials.map((tutorial, index) => (
                <Link
                  key={tutorial.id}
                  to={`/tutorials/${tutorial.id}`}
                  className="group rounded-2xl bg-card border border-border/50 overflow-hidden hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 animate-fade-in"
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
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {tutorial.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {tutorial.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <User className="w-4 h-4" />
                        {tutorial.author}
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {tutorial.readTime} min read
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredTutorials.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold mb-2">No tutorials found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
