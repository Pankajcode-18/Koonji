import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PageWrapper from '../components/layout/PageWrapper';
import Home from '../pages/Home';
import About from '../pages/About';
import Team from '../pages/Team';
import Services from '../pages/Services';
import ServiceDetail from '../pages/ServiceDetail';
import Portfolio from '../pages/Portfolio';
import PortfolioDetail from '../pages/PortfolioDetail';
import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';
import Contact from '../pages/Contact';
import { Terms, PrivacyPolicy } from '../pages/Legal';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      <div className="font-serif text-[8rem] font-semibold text-brand opacity-10 leading-none mb-4" aria-hidden="true">404</div>
      <h1 className="font-serif text-3xl font-semibold text-gray-900 mb-4">Page Not Found</h1>
      <p className="text-slate-600 mb-8 max-w-md">The page you're looking for doesn't exist or has been moved.</p>
      <a href="/" className="btn-primary">Back to Home</a>
    </div>
  );
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollObserver() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

    const timeout = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
}

export default function AppRouter() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollObserver />
        <Routes>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about-us" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/services/:slug" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
          <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
          <Route path="/portfolio/:slug" element={<PageWrapper><PortfolioDetail /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="/blog/:slug" element={<PageWrapper><BlogDetail /></PageWrapper>} />
          <Route path="/contact-us" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />
          <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
