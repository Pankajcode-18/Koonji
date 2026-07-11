import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiClock, FiTag } from 'react-icons/fi';
import useFetch from '../hooks/useFetch';

export default function BlogDetail() {
  const { slug } = useParams();
  const { data: post, loading, error } = useFetch(`/blog/${slug}`);

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
