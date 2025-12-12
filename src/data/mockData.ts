export interface Tool {
  id: string;
  name: string;
  logo: string;
  description: string;
  shortDescription: string;
  category: string;
  pricing: 'free' | 'freemium' | 'paid';
  priceDetails?: string;
  features: string[];
  pros: string[];
  cons: string[];
  officialLink: string;
  affiliateLink?: string;
  screenshots: string[];
  rating: number;
  reviewCount: number;
  createdAt: string;
  isTrending?: boolean;
  isFeatured?: boolean;
}

export interface Tutorial {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  readTime: number;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  count: number;
  color: string;
}

export const categories: Category[] = [
  { id: 'writing', name: 'Writing', icon: 'PenTool', description: 'AI-powered writing assistants', count: 45, color: 'category-writing' },
  { id: 'image', name: 'Image Generation', icon: 'Image', description: 'Create stunning visuals with AI', count: 38, color: 'category-image' },
  { id: 'video', name: 'Video', icon: 'Video', description: 'AI video creation and editing', count: 24, color: 'category-video' },
  { id: 'audio', name: 'Audio & Music', icon: 'Music', description: 'AI audio tools and music generation', count: 19, color: 'category-audio' },
  { id: 'code', name: 'Code', icon: 'Code', description: 'AI coding assistants', count: 32, color: 'category-code' },
  { id: 'chat', name: 'Chatbots', icon: 'MessageSquare', description: 'Conversational AI assistants', count: 28, color: 'category-chat' },
  { id: 'productivity', name: 'Productivity', icon: 'Zap', description: 'Boost your workflow with AI', count: 56, color: 'category-productivity' },
  { id: 'research', name: 'Research', icon: 'Search', description: 'AI research and analysis tools', count: 21, color: 'category-research' },
];

export const tools: Tool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    description: 'ChatGPT is an AI-powered language model developed by OpenAI that can engage in conversational dialogue, answer questions, write content, and assist with various tasks. It uses advanced natural language processing to understand context and generate human-like responses.',
    shortDescription: 'Advanced AI chatbot for conversations, writing, and problem-solving.',
    category: 'chat',
    pricing: 'freemium',
    priceDetails: 'Free tier available, Plus at $20/month',
    features: ['Natural language conversations', 'Code generation', 'Content writing', 'Language translation', 'Data analysis', 'Custom GPTs'],
    pros: ['Highly versatile', 'Excellent for writing', 'Regular updates', 'Large knowledge base'],
    cons: ['Can hallucinate facts', 'Knowledge cutoff', 'Rate limits on free tier'],
    officialLink: 'https://chat.openai.com',
    rating: 4.8,
    reviewCount: 12500,
    createdAt: '2022-11-30',
    screenshots: [],
    isTrending: true,
    isFeatured: true,
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    logo: 'https://seeklogo.com/images/M/midjourney-logo-F5D54CEF90-seeklogo.com.png',
    description: 'Midjourney is an AI image generation tool that creates stunning artwork from text descriptions. It excels at creating artistic, imaginative visuals with unique aesthetics and high-quality outputs.',
    shortDescription: 'Create stunning AI art from text descriptions.',
    category: 'image',
    pricing: 'paid',
    priceDetails: 'Starting at $10/month',
    features: ['Text-to-image generation', 'Style customization', 'High resolution outputs', 'Variation generation', 'Upscaling'],
    pros: ['Beautiful artistic style', 'High quality outputs', 'Active community'],
    cons: ['No free tier', 'Discord-only interface', 'Learning curve'],
    officialLink: 'https://midjourney.com',
    rating: 4.7,
    reviewCount: 8900,
    createdAt: '2022-07-12',
    screenshots: [],
    isTrending: true,
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    logo: 'https://github.githubassets.com/images/modules/site/copilot/copilot-logo.svg',
    description: 'GitHub Copilot is an AI pair programmer that helps you write code faster. It suggests whole lines or entire functions based on context, comments, and existing code patterns.',
    shortDescription: 'AI pair programmer that helps you write code faster.',
    category: 'code',
    pricing: 'paid',
    priceDetails: '$10/month or $100/year',
    features: ['Code completion', 'Multi-language support', 'IDE integration', 'Comment-to-code', 'Test generation'],
    pros: ['Excellent code suggestions', 'Wide language support', 'Great IDE integration'],
    cons: ['Subscription required', 'Can suggest incorrect code', 'Privacy concerns'],
    officialLink: 'https://github.com/features/copilot',
    rating: 4.6,
    reviewCount: 6500,
    createdAt: '2021-10-29',
    screenshots: [],
    isFeatured: true,
  },
  {
    id: 'claude',
    name: 'Claude',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg',
    description: 'Claude is an AI assistant created by Anthropic, designed to be helpful, harmless, and honest. It excels at thoughtful analysis, creative writing, and complex reasoning tasks.',
    shortDescription: 'Thoughtful AI assistant for analysis and creative tasks.',
    category: 'chat',
    pricing: 'freemium',
    priceDetails: 'Free tier, Pro at $20/month',
    features: ['Long context window', 'Document analysis', 'Creative writing', 'Code assistance', 'Research help'],
    pros: ['Very thoughtful responses', 'Excellent at nuance', 'Long context handling'],
    cons: ['Newer than competitors', 'Limited integrations', 'Occasional refusals'],
    officialLink: 'https://claude.ai',
    rating: 4.7,
    reviewCount: 4200,
    createdAt: '2023-03-14',
    screenshots: [],
    isTrending: true,
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    description: 'Notion AI integrates artificial intelligence directly into your Notion workspace, helping you write faster, think bigger, and augment your creativity.',
    shortDescription: 'AI-powered writing and productivity in Notion.',
    category: 'productivity',
    pricing: 'paid',
    priceDetails: '$10/member/month add-on',
    features: ['Writing assistance', 'Summarization', 'Translation', 'Brainstorming', 'Action items extraction'],
    pros: ['Seamless Notion integration', 'Great for documentation', 'Easy to use'],
    cons: ['Requires Notion subscription', 'Limited standalone use', 'Add-on cost'],
    officialLink: 'https://notion.so/product/ai',
    rating: 4.4,
    reviewCount: 3800,
    createdAt: '2023-02-22',
    screenshots: [],
  },
  {
    id: 'runway',
    name: 'Runway',
    logo: 'https://framerusercontent.com/images/JzKu2uHMj2wHnXKUMnW1C6aWIpQ.png',
    description: 'Runway is a creative suite powered by AI that enables video generation, editing, and visual effects. Their Gen-2 model can generate videos from text or images.',
    shortDescription: 'AI-powered video generation and creative tools.',
    category: 'video',
    pricing: 'freemium',
    priceDetails: 'Free tier, Standard at $12/month',
    features: ['Text-to-video', 'Image-to-video', 'Video editing', 'Green screen', 'Motion tracking'],
    pros: ['Cutting-edge video AI', 'Professional features', 'Regular updates'],
    cons: ['Credits system', 'Can be expensive', 'Learning curve'],
    officialLink: 'https://runwayml.com',
    rating: 4.5,
    reviewCount: 2900,
    createdAt: '2023-03-20',
    screenshots: [],
    isTrending: true,
  },
  {
    id: 'jasper',
    name: 'Jasper',
    logo: 'https://assets-global.website-files.com/60e5f2de011b86acebc30db7/60e5f2de011b864ce2c30e2f_Jasper%20Logo.svg',
    description: 'Jasper is an AI content platform designed for marketing teams. It helps create blog posts, social media content, emails, and more with brand voice consistency.',
    shortDescription: 'AI content creation for marketing teams.',
    category: 'writing',
    pricing: 'paid',
    priceDetails: 'Starting at $49/month',
    features: ['Blog writing', 'Ad copy', 'Social media', 'Brand voice', 'Templates', 'Team collaboration'],
    pros: ['Marketing focused', 'Great templates', 'Brand voice feature'],
    cons: ['Expensive', 'Learning curve', 'Can feel generic'],
    officialLink: 'https://jasper.ai',
    rating: 4.3,
    reviewCount: 5100,
    createdAt: '2021-01-01',
    screenshots: [],
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    logo: 'https://storage.googleapis.com/eleven-public-cdn/images/logo-sq.png',
    description: 'ElevenLabs provides AI voice generation and text-to-speech technology. Create realistic voiceovers, clone voices, and generate speech in multiple languages.',
    shortDescription: 'AI voice generation and text-to-speech.',
    category: 'audio',
    pricing: 'freemium',
    priceDetails: 'Free tier, Creator at $22/month',
    features: ['Text-to-speech', 'Voice cloning', 'Multiple languages', 'Voice library', 'API access'],
    pros: ['Extremely realistic voices', 'Voice cloning', 'Good free tier'],
    cons: ['Character limits', 'Voice cloning ethics', 'Premium for best voices'],
    officialLink: 'https://elevenlabs.io',
    rating: 4.6,
    reviewCount: 3400,
    createdAt: '2022-01-01',
    screenshots: [],
    isFeatured: true,
  },
];

export const tutorials: Tutorial[] = [
  {
    id: '1',
    title: 'Getting Started with ChatGPT: A Complete Beginner\'s Guide',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    category: 'chat',
    excerpt: 'Learn how to use ChatGPT effectively for writing, coding, and daily tasks.',
    content: 'Full tutorial content here...',
    author: 'Sarah Johnson',
    readTime: 8,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Mastering Midjourney Prompts for Stunning AI Art',
    thumbnail: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800',
    category: 'image',
    excerpt: 'Discover the secrets to crafting perfect prompts for beautiful AI-generated images.',
    content: 'Full tutorial content here...',
    author: 'Mike Chen',
    readTime: 12,
    createdAt: '2024-01-10',
  },
  {
    id: '3',
    title: 'AI Coding Assistants: How to 10x Your Productivity',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    category: 'code',
    excerpt: 'Compare GitHub Copilot, Cursor, and other AI coding tools to supercharge your development.',
    content: 'Full tutorial content here...',
    author: 'Alex Rivera',
    readTime: 15,
    createdAt: '2024-01-05',
  },
  {
    id: '4',
    title: 'Building a Content Strategy with AI Writing Tools',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800',
    category: 'writing',
    excerpt: 'Learn how to integrate AI writing assistants into your content workflow.',
    content: 'Full tutorial content here...',
    author: 'Emma Wilson',
    readTime: 10,
    createdAt: '2024-01-01',
  },
];
