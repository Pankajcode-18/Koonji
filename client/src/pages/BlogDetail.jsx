import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiClock, FiTag } from 'react-icons/fi';
import useFetch from '../hooks/useFetch';

const fallbackBlog = [
  { _id: '1', title: 'The Future of Performance Marketing in Nepal', category: 'Performance Ads', excerpt: 'How data-driven strategies are changing the landscape of advertising in Kathmandu.', content: '<p>The landscape of performance marketing is shifting rapidly. With the rise of AI-driven ad platforms and privacy-first tracking, businesses in Nepal must adapt to stay competitive. In this article, we explore the top strategies that are currently yielding the highest ROI for local brands.</p><h2>Understanding the Shift</h2><p>Gone are the days when a simple Facebook boost was enough. Today, performance marketing requires a full-funnel approach, combining creative storytelling with rigorous data analysis.</p>', publishedAt: '2024-05-12T00:00:00Z', readTime: 5, slug: 'future-of-performance-marketing', metaTitle: 'Future of Performance Marketing | Koonji Infotech', metaDescription: 'Discover how data-driven strategies and AI are reshaping performance advertising in Nepal.' },
  { _id: '2', title: 'Why Your Business Needs a Brand Identity, Not Just a Logo', category: 'Branding', excerpt: 'A logo is just the beginning. Discover how a complete brand system drives loyalty.', content: '<p>Many businesses make the mistake of treating their logo as their entire brand. While a logo is a crucial identifier, your brand identity encompasses much more—from your typography and color palette to your voice and messaging.</p><h2>The Elements of a Brand System</h2><ul><li><strong>Visual Identity:</strong> Logo, colors, typography.</li><li><strong>Verbal Identity:</strong> Tone of voice, messaging pillars.</li><li><strong>Brand Guidelines:</strong> Rules for consistent application.</li></ul><p>Investing in a comprehensive brand identity helps build trust and recognition, ultimately driving long-term customer loyalty.</p>', publishedAt: '2024-04-28T00:00:00Z', readTime: 7, slug: 'brand-identity-vs-logo', metaTitle: 'Brand Identity vs Logo | Koonji Infotech', metaDescription: 'Learn why a comprehensive brand identity system is more powerful than just a logo.' },
  { _id: '3', title: 'Maximizing ROI with Short-Form Video', category: 'Video Production', excerpt: 'TikTok and Reels are dominating attention. Here is how your business can capitalize.', content: '<p>Short-form video is currently the most engaging content format on social media. Platforms like TikTok, Instagram Reels, and YouTube Shorts offer unprecedented organic reach for brands that know how to use them.</p><h2>Keys to Successful Short-Form Content</h2><ol><li><strong>Hook viewers in the first 3 seconds.</strong></li><li><strong>Provide immediate value or entertainment.</strong></li><li><strong>Use trending audio strategically.</strong></li><li><strong>Include a clear call to action.</strong></li></ol><p>Our video production team has helped numerous clients increase their engagement rates by over 300% simply by pivoting to a short-form video strategy.</p>', publishedAt: '2024-04-10T00:00:00Z', readTime: 4, slug: 'maximizing-roi-short-form-video', metaTitle: 'Short-Form Video ROI | Koonji Infotech', metaDescription: 'Learn how to maximize your marketing ROI using short-form video on TikTok and Reels.' },
  { _id: '4', title: 'SEO Best Practices for 2024', category: 'Digital Marketing', excerpt: 'Stay ahead of algorithm updates with these actionable SEO strategies.', content: '<p>Search engine optimization is continually evolving. What worked in 2021 might actively harm your rankings today. In 2024, search engines are prioritizing helpful, user-first content over keyword-stuffed articles.</p><h2>Focus on E-E-A-T</h2><p>Experience, Expertise, Authoritativeness, and Trustworthiness are the pillars of modern SEO. Ensure your content demonstrates real-world experience and provides genuine value to the reader.</p>', publishedAt: '2024-03-22T00:00:00Z', readTime: 6, slug: 'seo-best-practices-2024', metaTitle: 'SEO Best Practices 2024 | Koonji Infotech', metaDescription: 'Stay ahead of the curve with the latest SEO best practices and strategies for 2024.' },
];

export default function BlogDetail() {
  const { slug } = useParams();
  const { data: fetchedPost, loading, error } = useFetch(`/blog/${slug}`);
  const post = fetchedPost || fallbackBlog.find(p => p.slug === slug);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-2 border-brand border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
        <h1 className="font-serif text-3xl text-gray-900 mb-4">Article Not Found</h1>
        <p className="text-slate-600 mb-8">This article may have been moved or doesn't exist.</p>
        <Link to="/blog" className="btn-primary">Back to Blog</Link>
      </div>
    );
  }

  const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>{post.metaTitle || `${post.title} — Koonji Infotech Blog`}</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />
        <link rel="canonical" href={`https://koonji.com/blog/${slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Article header */}
      <section className="pt-36 pb-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 30%, var(--color-brand) 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="container-koonji relative z-10 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-brand transition-colors mb-8">
            <FiArrowLeft size={14} /> All Articles
          </Link>
          <span className="eyebrow block mb-4">{post.category}</span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight"
          >
            {post.title}
          </motion.h1>
          <div className="flex flex-wrap items-center gap-6 mt-6 text-slate-500 text-sm">
            <span className="flex items-center gap-2"><FiCalendar size={13} /> {date}</span>
            <span className="flex items-center gap-2"><FiClock size={13} /> {post.readTime} min read</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 bg-gray-50">
        <div className="container-koonji max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose-koonji"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap items-center gap-3">
              <FiTag className="text-slate-500" size={14} />
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white text-slate-600 border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-12">
            <Link to="/blog" className="btn-outline inline-flex">
              <FiArrowLeft className="mr-1" /> Back to All Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
