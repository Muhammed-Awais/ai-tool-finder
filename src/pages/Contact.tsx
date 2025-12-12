import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, MapPin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: 'Message Sent!',
      description: 'We\'ll get back to you as soon as possible.',
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'hello@aitoolshub.com',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Available 9am-5pm EST',
      color: 'bg-category-code/10 text-category-code',
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'San Francisco, CA',
      color: 'bg-category-image/10 text-category-image',
    },
  ];

  if (isSubmitted) {
    return (
      <Layout>
        <div className="pt-32 pb-20">
          <div className="container max-w-2xl">
            <div className="text-center py-16 animate-scale-in">
              <div className="w-20 h-20 rounded-full bg-category-code/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-category-code" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Message Sent!</h1>
              <p className="text-muted-foreground mb-8">
                Thank you for reaching out. We'll get back to you within 24-48 hours.
              </p>
              <Button variant="gradient" onClick={() => setIsSubmitted(false)}>
                Send Another Message
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
        <title>Contact Us - Get in Touch | AI Tools Hub</title>
        <meta
          name="description"
          content="Have questions or feedback? Contact the AI Tools Hub team. We're here to help!"
        />
      </Helmet>

      <Layout>
        <div className="pt-28 pb-20">
          <div className="container">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-3xl lg:text-4xl font-bold mb-3">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Have questions, feedback, or partnership inquiries? We'd love to hear from you.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Contact Info Cards */}
              <div className="lg:col-span-1 space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="p-6 rounded-2xl bg-card border border-border/50"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center mb-4`}
                    >
                      <info.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-muted-foreground">{info.description}</p>
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-2xl bg-card border border-border/50 space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="min-h-32 resize-none"
                    />
                  </div>

                  <Button type="submit" variant="gradient" size="lg" className="w-full gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
