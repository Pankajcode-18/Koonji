import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import PageHero from '../components/ui/PageHero';

const CATEGORIES = ['All', 'Branding', 'Performance', 'Video', 'Digital'];

const CATEGORY_COLORS = {
  Branding: '#4A74F0',
  Performance: '#2457E5',
  Video: '#8B5CF6',
  Digital: '#06B6D4',
};

const fallbackPortfolio = [
  { _id: '1', title: 'Apex Brand Refresh', category: 'Branding', client: 'Apex Group', images: ['https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80'], slug: 'apex-brand-refresh' },
  { _id: '2', title: 'Nabil Bank App Launch', category: 'Digital', client: 'Nabil Bank', images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'], slug: 'nabil-app-launch' },
  { _id: '3', title: 'Himalayan Coffee Ad', category: 'Video', client: 'Himalayan Coffee Roasters', images: ['https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80'], slug: 'himalayan-coffee-ad' },
  { _id: '4', title: 'Everest Gear Campaign', category: 'Performance', client: 'Everest Gear', images: ['https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80'], slug: 'everest-gear-campaign' },
  { _id: '5', title: 'Tech StartUp Identity', category: 'Branding', client: 'Innovate Nepal', images: ['https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80'], slug: 'innovate-nepal-identity' },
  { _id: '6', title: 'Tourism Board Promo', category: 'Video', client: 'Nepal Tourism', images: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80'], slug: 'tourism-board-promo' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { data, loading } = useFetch('/portfolio');

  const portfolioItems = (data && data.length > 0) ? data : fallbackPortfolio;

  const filtered = portfolioItems
    ? activeCategory === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)
    : [];

  return (
    <>
      <Helmet>
        <title>Portfolio — Koonji Infotech | Our Work</title>
        <meta name="description" content="Browse Koonji Infotech's portfolio of brand identity, performance advertising, video production, and digital marketing projects." />
        <link rel="canonical" href="https://koonji.com/portfolio" />
      </Helmet>

      {/* Page hero */}
      <PageHero 
        eyebrow="Portfolio"
        title="Work That"
        titleHighlight="Speaks"
        description="A showcase of brand transformations, digital experiences, and high-performance campaigns."
        bgImage="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1600&q=80"
      />

      {/* Filter tabs */}
      <section className="py-10 bg-gray-50 border-b border-gray-200">
        <div className="container-koonji flex flex-wrap gap-3 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-brand text-white'
                  : 'bg-white text-slate-600 border border-gray-200 hover:border-brand hover:text-brand'
              }`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-white">
        <div className="container-koonji">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="card-light h-64 animate-pulse" />
              ))}
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((item) => {
                const color = CATEGORY_COLORS[item.category] || '#5C7CFF';
                return (
                  <motion.article
                    key={item._id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="card-light overflow-hidden group"
                  >
                    {/* Image */}
                    <div className="h-52 relative overflow-hidden" style={{ background: `linear-gradient(135deg, #f3f4f6, #e5e7eb)` }}>
                      {item.images && item.images[0] ? (
                        <img
                          src={item.images[0]}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full border-2 border-brand opacity-20" />
                        </div>
                      )}
                      <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: `${color}22`, color, border: `1px solid ${color}44` }}>
                        {item.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h2 className="font-serif text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand transition-colors">
                        {item.title}
                      </h2>
                      {item.client && <p className="text-slate-500 text-xs mb-2">Client: {item.client}</p>}
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">{item.description}</p>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No projects found in this category yet.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
