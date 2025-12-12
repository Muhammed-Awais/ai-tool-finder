import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { categories } from '@/data/mockData';
import { Send, CheckCircle, Rocket } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function SubmitTool() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    toolName: '',
    email: '',
    website: '',
    category: '',
    description: '',
    pricing: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to the backend
    setIsSubmitted(true);
    toast({
      title: 'Tool Submitted!',
      description: 'We\'ll review your submission and get back to you soon.',
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="pt-32 pb-20">
          <div className="container max-w-2xl">
            <div className="text-center py-16 animate-scale-in">
              <div className="w-20 h-20 rounded-full bg-category-code/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-category-code" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
              <p className="text-muted-foreground mb-8">
                Your tool has been submitted for review. Our team will evaluate it and get back to
                you within 2-3 business days.
              </p>
              <Button variant="gradient" onClick={() => setIsSubmitted(false)}>
                Submit Another Tool
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Helmet>
        <title>Submit Your AI Tool - Get Featured | AI Tools Hub</title>
        <meta
          name="description"
          content="Submit your AI tool to be featured on AI Tools Hub. Reach thousands of users looking for AI solutions."
        />
      </Helmet>

      <Layout>
        <div className="pt-28 pb-20">
          <div className="container max-w-2xl">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-3">
                Submit Your <span className="text-gradient">AI Tool</span>
              </h1>
              <p className="text-muted-foreground">
                Get your AI tool featured on our platform and reach thousands of potential users.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    placeholder="Your company name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="toolName">Tool Name</Label>
                  <Input
                    id="toolName"
                    placeholder="Name of your AI tool"
                    value={formData.toolName}
                    onChange={(e) => setFormData({ ...formData, toolName: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website URL</Label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="https://yourtool.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pricing">Pricing Model</Label>
                  <Select
                    value={formData.pricing}
                    onValueChange={(value) => setFormData({ ...formData, pricing: value })}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select pricing" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free">Free</SelectItem>
                      <SelectItem value="freemium">Freemium</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Tool Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what your tool does, its key features, and why users would love it..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  className="min-h-32 resize-none"
                />
              </div>

              <Button type="submit" variant="gradient" size="xl" className="w-full gap-2">
                <Send className="w-5 h-5" />
                Submit Tool for Review
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                By submitting, you agree to our{' '}
                <a href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
