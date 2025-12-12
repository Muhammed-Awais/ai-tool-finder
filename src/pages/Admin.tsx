import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { tools, tutorials } from '@/data/mockData';
import {
  LayoutDashboard,
  Wrench,
  BookOpen,
  Users,
  Mail,
  Settings,
  Plus,
  Pencil,
  Trash2,
  Check,
  X,
  LogOut,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

// Mock submissions data
const submissions = [
  {
    id: '1',
    companyName: 'TechCorp',
    toolName: 'AI Writer Pro',
    email: 'contact@techcorp.com',
    status: 'pending',
  },
  {
    id: '2',
    companyName: 'DataAI Inc',
    toolName: 'Smart Analytics',
    email: 'hello@dataai.com',
    status: 'pending',
  },
];

// Mock subscribers
const subscribers = [
  { id: '1', email: 'john@example.com', createdAt: '2024-01-15' },
  { id: '2', email: 'jane@example.com', createdAt: '2024-01-14' },
  { id: '3', email: 'bob@example.com', createdAt: '2024-01-13' },
];

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would validate credentials
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <Helmet>
          <title>Admin Login | AI Tools Hub</title>
        </Helmet>
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">
                  AI Tools<span className="text-gradient"> Hub</span>
                </span>
              </Link>
              <h1 className="text-2xl font-bold">Admin Login</h1>
              <p className="text-muted-foreground mt-2">
                Sign in to access the admin panel
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12"
                  required
                />
              </div>
              <Button type="submit" variant="gradient" size="lg" className="w-full">
                Sign In
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              <Link to="/" className="text-primary hover:underline">
                ← Back to website
              </Link>
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | AI Tools Hub</title>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Sidebar */}
        <aside className="fixed top-0 left-0 h-screen w-64 bg-card border-r border-border p-6">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">Admin</span>
          </Link>

          <nav className="space-y-1">
            {[
              { icon: LayoutDashboard, label: 'Dashboard', active: true },
              { icon: Wrench, label: 'Tools' },
              { icon: BookOpen, label: 'Tutorials' },
              { icon: Users, label: 'Submissions' },
              { icon: Mail, label: 'Subscribers' },
              { icon: Settings, label: 'Settings' },
            ].map((item) => (
              <button
                key={item.label}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                  item.active
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsLoggedIn(false)}
            className="absolute bottom-6 left-6 right-6 flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </aside>

        {/* Main Content */}
        <main className="ml-64 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your AI tools directory and content.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Tools', value: tools.length, icon: Wrench, color: 'text-primary' },
              {
                label: 'Tutorials',
                value: tutorials.length,
                icon: BookOpen,
                color: 'text-category-research',
              },
              {
                label: 'Pending Submissions',
                value: submissions.length,
                icon: Users,
                color: 'text-category-chat',
              },
              {
                label: 'Subscribers',
                value: subscribers.length,
                icon: Mail,
                color: 'text-category-code',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-card border border-border/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={cn('w-6 h-6', stat.color)} />
                  <span className="text-3xl font-bold">{stat.value}</span>
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <Tabs defaultValue="tools" className="space-y-6">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="submissions">Submissions</TabsTrigger>
              <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
            </TabsList>

            {/* Tools Tab */}
            <TabsContent value="tools">
              <div className="flex items-center justify-between mb-4">
                <Input placeholder="Search tools..." className="max-w-sm" />
                <Button variant="gradient" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add Tool
                </Button>
              </div>
              <div className="rounded-xl border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Pricing</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tools.map((tool) => (
                      <TableRow key={tool.id}>
                        <TableCell className="font-medium">{tool.name}</TableCell>
                        <TableCell>{tool.category}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{tool.pricing}</Badge>
                        </TableCell>
                        <TableCell>★ {tool.rating}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Tutorials Tab */}
            <TabsContent value="tutorials">
              <div className="flex items-center justify-between mb-4">
                <Input placeholder="Search tutorials..." className="max-w-sm" />
                <Button variant="gradient" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add Tutorial
                </Button>
              </div>
              <div className="rounded-xl border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tutorials.map((tutorial) => (
                      <TableRow key={tutorial.id}>
                        <TableCell className="font-medium max-w-xs truncate">
                          {tutorial.title}
                        </TableCell>
                        <TableCell>{tutorial.category}</TableCell>
                        <TableCell>{tutorial.author}</TableCell>
                        <TableCell>{tutorial.createdAt}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Submissions Tab */}
            <TabsContent value="submissions">
              <div className="rounded-xl border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Tool Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((sub) => (
                      <TableRow key={sub.id}>
                        <TableCell className="font-medium">{sub.companyName}</TableCell>
                        <TableCell>{sub.toolName}</TableCell>
                        <TableCell>{sub.email}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{sub.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" className="text-category-code">
                            <Check className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-destructive">
                            <X className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Subscribers Tab */}
            <TabsContent value="subscribers">
              <div className="flex items-center justify-between mb-4">
                <p className="text-muted-foreground">
                  {subscribers.length} total subscribers
                </p>
                <Button variant="outline" className="gap-2">
                  Export CSV
                </Button>
              </div>
              <div className="rounded-xl border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Subscribed On</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subscribers.map((sub) => (
                      <TableRow key={sub.id}>
                        <TableCell className="font-medium">{sub.email}</TableCell>
                        <TableCell>{sub.createdAt}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </>
  );
}
