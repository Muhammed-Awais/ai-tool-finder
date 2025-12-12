import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { tools, categories } from '@/data/mockData';
import {
  Star,
  ExternalLink,
  ArrowLeft,
  Check,
  X,
  Share2,
  Bookmark,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ToolDetail() {
  const { id } = useParams();
  const tool = tools.find((t) => t.id === id);

  if (!tool) {
    return (
      <Layout>
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Tool not found</h1>
          <Link to="/tools">
            <Button>Back to Tools</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const category = categories.find((c) => c.id === tool.category);
  const relatedTools = tools.filter((t) => t.category === tool.category && t.id !== tool.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{tool.name} - AI Tool Review | AI Tools Hub</title>
        <meta name="description" content={tool.shortDescription} />
        <meta property="og:title" content={`${tool.name} - AI Tool Review`} />
        <meta property="og:description" content={tool.shortDescription} />
      </Helmet>

      <Layout>
        <div className="pt-28 pb-20">
          <div className="container">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/tools" className="hover:text-foreground transition-colors">
                Tools
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link
                to={`/tools?category=${tool.category}`}
                className="hover:text-foreground transition-colors"
              >
                {category?.name}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">{tool.name}</span>
            </nav>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-24 h-24 rounded-2xl bg-card border border-border/50 flex items-center justify-center shrink-0">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-14 h-14 object-contain"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${tool.name}&background=6366f1&color=fff&size=128`;
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h1 className="text-3xl lg:text-4xl font-bold">{tool.name}</h1>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Bookmark className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share2 className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Star className="w-5 h-5 fill-category-chat text-category-chat" />
                        <span className="font-semibold">{tool.rating}</span>
                        <span className="text-muted-foreground">
                          ({tool.reviewCount.toLocaleString()} reviews)
                        </span>
                      </div>
                      <Badge variant="secondary">{category?.name}</Badge>
                      <Badge
                        variant="outline"
                        className={cn(
                          tool.pricing === 'free' && 'text-category-code border-category-code',
                          tool.pricing === 'freemium' &&
                            'text-category-productivity border-category-productivity',
                          tool.pricing === 'paid' && 'text-category-image border-category-image'
                        )}
                      >
                        {tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{tool.shortDescription}</p>
                  </div>
                </div>

                {/* Description */}
                <section className="p-6 rounded-2xl bg-card border border-border/50">
                  <h2 className="text-xl font-semibold mb-4">About {tool.name}</h2>
                  <p className="text-muted-foreground leading-relaxed">{tool.description}</p>
                </section>

                {/* Features */}
                <section className="p-6 rounded-2xl bg-card border border-border/50">
                  <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {tool.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Pros & Cons */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <section className="p-6 rounded-2xl bg-category-code/5 border border-category-code/20">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5 text-category-code" />
                      Pros
                    </h2>
                    <ul className="space-y-3">
                      {tool.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-category-code mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <X className="w-5 h-5 text-destructive" />
                      Cons
                    </h2>
                    <ul className="space-y-3">
                      {tool.cons.map((con) => (
                        <li key={con} className="flex items-start gap-3">
                          <X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 space-y-6">
                  {/* CTA Card */}
                  <div className="p-6 rounded-2xl bg-card border border-border/50">
                    <div className="mb-6">
                      <span className="text-sm text-muted-foreground">Pricing</span>
                      <p className="text-2xl font-bold mt-1">{tool.priceDetails || 'Visit website'}</p>
                    </div>
                    <div className="space-y-3">
                      <a href={tool.officialLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="gradient" size="lg" className="w-full gap-2">
                          Visit {tool.name}
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                      {tool.affiliateLink && (
                        <a href={tool.affiliateLink} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="lg" className="w-full">
                            Get Special Offer
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Ad Placeholder */}
                  <div className="p-6 rounded-2xl bg-muted/50 border border-dashed border-border text-center">
                    <span className="text-sm text-muted-foreground">Advertisement</span>
                    <div className="h-48 flex items-center justify-center">
                      <span className="text-muted-foreground">Ad Space</span>
                    </div>
                  </div>

                  {/* Related Tools */}
                  {relatedTools.length > 0 && (
                    <div className="p-6 rounded-2xl bg-card border border-border/50">
                      <h3 className="font-semibold mb-4">Similar Tools</h3>
                      <div className="space-y-4">
                        {relatedTools.map((related) => (
                          <Link
                            key={related.id}
                            to={`/tools/${related.id}`}
                            className="flex items-center gap-3 group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                              <img
                                src={related.logo}
                                alt={related.name}
                                className="w-6 h-6 object-contain"
                                onError={(e) => {
                                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${related.name}&background=6366f1&color=fff`;
                                }}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium truncate group-hover:text-primary transition-colors">
                                {related.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                ★ {related.rating} • {related.pricing}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
