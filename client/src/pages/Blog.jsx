import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import useFetch from '../hooks/useFetch';
import PageHero from '../components/ui/PageHero';

const CATEGORY_COLORS = {
  'Video Production': '#8B5CF6',
  'Digital Marketing': '#06B6D4',
  'Branding': '#4A74F0',
  'Performance Ads': '#2457E5',
};

import { fallbackBlog } from './BlogDetail';

export default function Blog() {
  const { data, loading } = useFetch('/blog');
  const posts = (data && data.length > 0) ? data : fallbackBlog;

  return (
    <>
      <Helmet>
        <title>Blog — Koonji Infotech | Insights & Strategy</title>
        <meta name="description" content="Advertising, branding, and digital marketing insights from Koonji Infotech's expert team. Strategy, trends, and practical guides for Nepali businesses." />
        <link rel="canonical" href="https://koonji.com/blog" />
      </Helmet>

      {/* Page hero */}
      <PageHero 
        eyebrow="Insights"
        title="Ideas Worth"
        titleHighlight="Sharing"
        description="Advertising, branding, and digital marketing insights from our expert team."
        bgImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80"
      />

      <section className="py-16 bg-gray-50">
        <div className="container-koonji">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="card-light h-64 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post, i) => {
                const color = CATEGORY_COLORS[post.category] || '#4A74F0';
                const date = new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
                return (
                  <motion.article
                    key={post._id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="card-light p-7 flex flex-col group"
                  >
                    <span className="text-xs font-semibold px-3 py-1 rounded-full self-start mb-5"
                      style={{ background: `${color}22`, color, border: `1px solid ${color}44` }}>
                      {post.category}
                    </span>
                    <h2 className="font-serif text-xl font-semibold text-gray-900 mb-3 group-hover:text-brand transition-colors flex-1">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-4 text-slate-500 text-xs">
                        <span className="flex items-center gap-1.5"><FiCalendar size={11} /> {date}</span>
                        <span className="flex items-center gap-1.5"><FiClock size={11} /> {post.readTime} min</span>
                      </div>
                      <Link to={`/blog/${post.slug}`} className="text-brand text-sm flex items-center gap-1.5 hover:gap-2.5 transition-all">
                        Read <FiArrowRight size={13} />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
