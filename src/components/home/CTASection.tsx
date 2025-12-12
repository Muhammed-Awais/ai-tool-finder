import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Send } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="relative rounded-3xl bg-gradient-primary p-8 sm:p-12 lg:p-16 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          
          {/* Content */}
          <div className="relative max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary-foreground/80" />
              <span className="text-sm font-medium text-primary-foreground/80">
                Share Your AI Tool
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground mb-4">
              Have an AI Tool?
              <br />
              List It on Our Platform!
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
              Reach thousands of users looking for the perfect AI solution. Submit your tool for free and get featured on AI Tools Hub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/submit">
                <Button
                  size="xl"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Your Tool
                </Button>
              </Link>
              <Link to="/advertise">
                <Button
                  size="xl"
                  variant="ghost"
                  className="text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/10 gap-2"
                >
                  Advertise With Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
