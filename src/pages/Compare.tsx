import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { tools } from '@/data/mockData';
import { Plus, X, Star, Check, ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function Compare() {
  const [selectedTools, setSelectedTools] = useState<string[]>([]);

  const addTool = (toolId: string) => {
    if (selectedTools.length < 3 && !selectedTools.includes(toolId)) {
      setSelectedTools([...selectedTools, toolId]);
    }
  };

  const removeTool = (toolId: string) => {
    setSelectedTools(selectedTools.filter((id) => id !== toolId));
  };

  const comparedTools = selectedTools.map((id) => tools.find((t) => t.id === id)!).filter(Boolean);
  const availableTools = tools.filter((t) => !selectedTools.includes(t.id));

  return (
    <>
      <Helmet>
        <title>Compare AI Tools - Side by Side Comparison | AI Tools Hub</title>
        <meta
          name="description"
          content="Compare AI tools side by side. Evaluate features, pricing, pros and cons to make the best choice for your needs."
        />
      </Helmet>

      <Layout>
        <div className="pt-28 pb-20">
          <div className="container">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold mb-3">
                Compare <span className="text-gradient">AI Tools</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Select up to 3 AI tools to compare their features, pricing, and capabilities side by side.
              </p>
            </div>

            {/* Tool Selector */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[0, 1, 2].map((index) => {
                const tool = comparedTools[index];
                return (
                  <div
                    key={index}
                    className={cn(
                      'relative p-6 rounded-2xl border-2 border-dashed transition-all',
                      tool ? 'border-primary bg-card' : 'border-border hover:border-primary/50'
                    )}
                  >
                    {tool ? (
                      <>
                        <button
                          onClick={() => removeTool(tool.id)}
                          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-muted hover:bg-destructive/10 hover:text-destructive flex items-center justify-center transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center">
                            <img
                              src={tool.logo}
                              alt={tool.name}
                              className="w-8 h-8 object-contain"
                              onError={(e) => {
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${tool.name}&background=6366f1&color=fff`;
                              }}
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold">{tool.name}</h3>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Star className="w-3.5 h-3.5 fill-category-chat text-category-chat" />
                              {tool.rating}
                            </div>
                          </div>
                        </div>
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
                      </>
                    ) : (
                      <div className="text-center py-6">
                        <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                          <Plus className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <Select onValueChange={addTool}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a tool" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableTools.map((t) => (
                              <SelectItem key={t.id} value={t.id}>
                                {t.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Comparison Table */}
            {comparedTools.length >= 2 && (
              <div className="rounded-2xl bg-card border border-border/50 overflow-hidden animate-fade-in">
                {/* Table Header */}
                <div className="grid grid-cols-4 gap-4 p-6 bg-muted/50 border-b border-border/50">
                  <div className="font-semibold">Feature</div>
                  {comparedTools.map((tool) => (
                    <div key={tool.id} className="font-semibold text-center">
                      {tool.name}
                    </div>
                  ))}
                  {comparedTools.length < 3 && <div />}
                </div>

                {/* Rating */}
                <div className="grid grid-cols-4 gap-4 p-6 border-b border-border/50">
                  <div className="text-muted-foreground">Rating</div>
                  {comparedTools.map((tool) => (
                    <div key={tool.id} className="text-center flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 fill-category-chat text-category-chat" />
                      <span className="font-semibold">{tool.rating}</span>
                    </div>
                  ))}
                  {comparedTools.length < 3 && <div />}
                </div>

                {/* Pricing */}
                <div className="grid grid-cols-4 gap-4 p-6 border-b border-border/50 bg-muted/30">
                  <div className="text-muted-foreground">Pricing</div>
                  {comparedTools.map((tool) => (
                    <div key={tool.id} className="text-center">
                      <Badge
                        variant="outline"
                        className={cn(
                          tool.pricing === 'free' && 'text-category-code border-category-code',
                          tool.pricing === 'freemium' &&
                            'text-category-productivity border-category-productivity',
                          tool.pricing === 'paid' && 'text-category-image border-category-image'
                        )}
                      >
                        {tool.priceDetails || tool.pricing}
                      </Badge>
                    </div>
                  ))}
                  {comparedTools.length < 3 && <div />}
                </div>

                {/* Features */}
                <div className="grid grid-cols-4 gap-4 p-6 border-b border-border/50">
                  <div className="text-muted-foreground">Key Features</div>
                  {comparedTools.map((tool) => (
                    <div key={tool.id} className="space-y-2">
                      {tool.features.slice(0, 4).map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                  {comparedTools.length < 3 && <div />}
                </div>

                {/* Pros */}
                <div className="grid grid-cols-4 gap-4 p-6 border-b border-border/50 bg-muted/30">
                  <div className="text-muted-foreground">Pros</div>
                  {comparedTools.map((tool) => (
                    <div key={tool.id} className="space-y-2">
                      {tool.pros.map((pro) => (
                        <div
                          key={pro}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="w-3.5 h-3.5 text-category-code shrink-0" />
                          <span>{pro}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                  {comparedTools.length < 3 && <div />}
                </div>

                {/* Cons */}
                <div className="grid grid-cols-4 gap-4 p-6 border-b border-border/50">
                  <div className="text-muted-foreground">Cons</div>
                  {comparedTools.map((tool) => (
                    <div key={tool.id} className="space-y-2">
                      {tool.cons.map((con) => (
                        <div
                          key={con}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <X className="w-3.5 h-3.5 text-destructive shrink-0" />
                          <span>{con}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                  {comparedTools.length < 3 && <div />}
                </div>

                {/* Actions */}
                <div className="grid grid-cols-4 gap-4 p-6 bg-muted/50">
                  <div />
                  {comparedTools.map((tool) => (
                    <div key={tool.id} className="space-y-2">
                      <a href={tool.officialLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="gradient" size="sm" className="w-full gap-2">
                          Visit Site
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Button>
                      </a>
                      <Link to={`/tools/${tool.id}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          Full Review
                        </Button>
                      </Link>
                    </div>
                  ))}
                  {comparedTools.length < 3 && <div />}
                </div>
              </div>
            )}

            {/* Empty State */}
            {comparedTools.length < 2 && (
              <div className="text-center py-16 rounded-2xl bg-muted/30 border border-dashed border-border">
                <h3 className="text-xl font-semibold mb-2">Select at least 2 tools to compare</h3>
                <p className="text-muted-foreground">
                  Choose from our directory of AI tools to see a detailed comparison.
                </p>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
