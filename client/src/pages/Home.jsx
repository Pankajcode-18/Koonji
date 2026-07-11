import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import StatsBar from '../components/home/StatsBar';
import ServicesGrid from '../components/home/ServicesGrid';
import HowWeWork from '../components/home/HowWeWork';
import PortfolioPreview from '../components/home/PortfolioPreview';
import TrustedBy from '../components/home/TrustedBy';
import BlogPreview from '../components/home/BlogPreview';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import CtaBanner from '../components/home/CtaBanner';
import FloatingChatbot from '../components/chat/FloatingChatbot';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Koonji Infotech — Nepal's Premier Creative Advertising Agency</title>
        <meta
          name="description"
          content="Koonji Infotech is Nepal's leading advertising agency specialising in brand identity, digital marketing, ad creation, video production, and performance advertising. Trusted by 500+ businesses since 2012."
        />
        <meta property="og:title" content="Koonji Infotech — Nepal's Premier Creative Advertising Agency" />
        <meta property="og:description" content="Bold campaigns, powerful brands, and performance-driven content. Koonji Infotech — Kathmandu, Nepal." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://koonji.com" />
        <link rel="canonical" href="https://koonji.com" />
      </Helmet>

      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <HowWeWork />
      <PortfolioPreview />
      <TrustedBy />
      <BlogPreview />
      <TestimonialsCarousel />
      <CtaBanner />
      <FloatingChatbot />
    </>
  );
}
