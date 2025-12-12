import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { TrendingToolsSection } from '@/components/home/TrendingToolsSection';
import { FeaturedToolsSection } from '@/components/home/FeaturedToolsSection';
import { TutorialsSection } from '@/components/home/TutorialsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AI Tools Hub - Discover, Compare & Learn About the Best AI Tools</title>
        <meta
          name="description"
          content="Browse 500+ AI tools for writing, image generation, coding, and more. Compare features, read reviews, and find the perfect AI tool for your needs."
        />
        <meta
          name="keywords"
          content="AI tools, artificial intelligence, ChatGPT, Midjourney, AI software, machine learning tools"
        />
        <meta property="og:title" content="AI Tools Hub - Discover the Best AI Tools" />
        <meta
          property="og:description"
          content="Browse 500+ AI tools for writing, image generation, coding, and more."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://aitoolshub.com" />
      </Helmet>

      <Layout>
        <HeroSection />
        <CategoriesSection />
        <TrendingToolsSection />
        <FeaturedToolsSection />
        <TutorialsSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
