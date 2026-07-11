import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiClock, FiTag, FiUser, FiArrowRight, FiMail } from 'react-icons/fi';
import useFetch from '../hooks/useFetch';

export const fallbackBlog = [
  { 
    _id: '5', 
    title: 'From Zero to Hero: How Koonji Infotech Launches a High-Converting Ad Campaign', 
    category: 'Performance Ads', 
    excerpt: 'An inside look at our playbook for transforming a blank screen into a profitable ad campaign.', 
    author: 'Admin',
    content: '<p>In a world where every click counts and every dollar spent on ads must justify itself ten times over, the way you start an ad creation process determines whether you win or burn budget. At Koonji Infotech, we don’t just “make ads.” We engineer revenue engines. We design psychological hooks wrapped in pixels. And it all begins long before we even think about headlines or images.</p><p>If you’ve ever wondered how a professional digital marketing agency like Koonji Infotech transforms a blank screen into a profitable ad campaign, this inside look is for you. Grab a coffee—here’s our playbook.</p><h2>1. The Discovery Deep-Dive: We Become Your Customer’s Brain</h2><p>Most agencies jump straight into competitor research and keyword tools. We start earlier: we sit down with you. In a structured 60-minute discovery session (we call it the Koonji Ad Blueprint Call), we extract the hidden gold:</p><ul><li><strong>The “after” state:</strong> What transformation does your product create? Not features—emotional outcomes. Less stress? Status? More time to play with the kids?</li><li><strong>Unspoken hesitations:</strong> What doubts keep your ideal customer awake at night? We list every objection, fear, and skepticism they have before buying.</li><li><strong>Language mining:</strong> We record exact phrases you and your customers use. If your client says “I needed something that just works, no headaches,” that becomes ad copy. No marketer-speak allowed.</li><li><strong>The missed connection:</strong> Why did the last customer choose you over a competitor? Often the best ad angles hide there.</li></ul><p>This raw intelligence becomes the fuel for everything that follows. Without it, you’re guessing. With it, you’re armed with truth.</p><h2>2. Avatar Sculpting: We Don’t Target “Everyone”</h2><p>“Small business owners aged 25-54” is not an audience—it’s a census statistic. At Koonji Infotech, we build psychographic avatars with a name, a face, and a Monday morning frustration.</p><p>Using the discovery data, we create a primary persona. For example, “Startup Steve”: a 32-year-old SaaS founder who’s burned by agencies that promise growth but deliver vanity metrics. He scrolls LinkedIn at 11 PM, secretly worried his runway is shrinking, and responds to direct, no-fluff language.</p><p>We then map this avatar onto the actual ad platforms:</p><ul><li>What subreddits does Steve lurk in? (Reddit Ads)</li><li>Which job titles and company sizes match on LinkedIn?</li><li>What “interest but not declared” behaviors does Meta’s algorithm read?</li></ul><p>This step alone multiplies conversion rates because we speak to one person, not a crowd.</p><h2>3. The Messaging Matrix: One Core Promise, Infinite Angles</h2><p>With the avatar clear, we build what we internally call the Messaging Matrix. It’s a grid of hooks and proof points. We never put all our chips on a single ad angle; instead, we design 4-6 distinct concepts, each attacking a different motivation:</p><ul><li><strong>Problem-agitation:</strong> “Tired of agencies that disappear after signing the contract?”</li><li><strong>Emotion-led:</strong> “Imagine finally waking up without that pit in your stomach about cash flow.”</li><li><strong>Logic & credibility:</strong> “We’ve spent $2M+ on ads for B2B brands—here’s the data.”</li><li><strong>Objection crusher:</strong> “No long-term lock-in. We earn your business monthly.”</li></ul><p>Every angle gets a corresponding visual idea, because at Koonji Infotech we know that the hook (text, image, video first 3 seconds) does 80% of the work. Our creative briefs specify: “This ad must make Startup Steve think ‘Finally, someone gets it’ within 1.5 seconds.”</p><h2>4. Creative Assembly: Where Science Meets Art</h2><p>Now we open the design and copy tools—but with strict constraints. We don’t create “pretty” ads; we create ads that sell. Here’s the Koonji way:</p><ul><li><strong>Headline hierarchy:</strong> We write 25+ headline variations for each angle and keep the top 3 based on our 4U framework (Useful, Urgent, Unique, Ultra-specific).</li><li><strong>Visual testing first:</strong> We often test a static image, a carousel, and a short-form video (UGC style, even if we film it in-house) for the same message. Platform algorithms favor variety, but we maintain message consistency.</li><li><strong>The 3-second rule:</strong> Thumb-stopping power is non-negotiable. Our design team uses pattern interrupts—bold text overlays, unexpected colors, or micro-animations that halt the scroll.</li><li><strong>Ad copy that reads like a conversation:</strong> No corporate jargon. We write as if we’re texting the avatar. Short sentences. Lots of “you.” A clear CTA (call to action) that feels like a natural next step.</li></ul><h2>5. Funnel Architecture: The Ad is Just the Door</h2><p>An ad in isolation is a lonely, ineffective thing. At Koonji Infotech, we architect the full journey before the first impression is served. The ad creative must align seamlessly with:</p><ul><li><strong>Landing page congruency:</strong> If the ad says “Free growth audit for bootstrapped B2B companies,” the page headline must match exactly. No bait-and-switch. Message match = higher Quality Score and lower cost per click.</li><li><strong>Conversion mechanism:</strong> What’s the desired action? We map it to the ad goal. Is it a lead magnet download, a demo booking, a straight purchase? Each dictates a different ad format and pixel event setup.</li><li><strong>Retargeting logic:</strong> We plan the safety net. The person who watched 50% of the video but didn’t click gets a different ad tomorrow—maybe a testimonial. We pre-build these sequences in our campaign structure.</li></ul><h2>6. Technical Mastery: Pixel, Tracking, and the Invisible Backbone</h2><p>This step is invisible to the client but makes or breaks ROI. Our team ensures:</p><ul><li><strong>Flawless pixel implementation:</strong> Main pixel, conversion events, micro-conversions (like scroll depth or time on page) are tested via Meta Pixel Helper and Google Tag Assistant. No missed data.</li><li><strong>UTM discipline:</strong> Every URL carries clean UTM parameters so we can trace a sale back to the exact ad creative, placement, and keyword.</li><li><strong>Audience seeding:</strong> For new accounts, we might start with lookalikes seeded from your top 5% customers. We avoid broad targeting on day one unless budget allows rapid machine learning.</li><li><strong>Campaign structure:</strong> We separate prospecting, remarketing, and retention into distinct campaigns with appropriate budgets and bidding strategies.</li></ul><h2>7. The Launch Sequence: Small Fire, Then Gasoline</h2><p>We never go from zero to $1,000/day in one shot. Koonji Infotech follows a measured launch cadence:</p><ul><li><strong>Soft launch (Day 1-3):</strong> 3-4 top ad variants go live with a modest daily budget. Goal: gather statistically significant CTR and CPC data without financial risk.</li><li><strong>Creative elimination (Day 3-5):</strong> We kill ads with CTR below the industry benchmark. Winners get a budget bump.</li><li><strong>Landing page heat check:</strong> We monitor time on page, bounce rate, and conversion rate. If CTR is great but conversions are low, the issue is the page, not the ad.</li><li><strong>First scale (Day 7+):</strong> Once we have a cost per conversion that meets target ROI, we duplicate the winning ad set into a scaled campaign with a higher budget.</li></ul><h2>8. The Optimization Loop That Never Sleeps</h2><p>Here’s what separates Koonji Infotech from agencies that “set and forget”: our weekly (sometimes daily) optimization rhythm.</p><ul><li><strong>Ad fatigue radar:</strong> We monitor frequency. Once it passes 2.5–3 in prospecting, we refresh creatives.</li><li><strong>Creative iteration:</strong> We mine the winning angle’s comments, shares, and reactions to spark the next batch.</li><li><strong>Platform updates:</strong> We actively test new ad formats—Meta’s Advantage+ shopping, Google’s Demand Gen, LinkedIn’s Thought Leader ads.</li><li><strong>Bid and budget pacing:</strong> Using rules and manual checks, we shift spend toward top-performing hours and days.</li></ul><h2>Why This Process Makes Koonji Infotech Different</h2><p>Anyone can open Ads Manager and boost a post. But a strategic ad creation process—grounded in deep buyer psychology, creative rigor, technical precision, and continuous improvement—is what turns a budget into pipeline.</p><p>Our clients come to us tired of guessing games. They stay because our “start” is actually the beginning of a predictable profit system. No fluff. No hidden fees. Just a proven framework executed by a team that cares about your numbers as much as you do.</p>', 
    publishedAt: '2026-06-23T00:00:00Z', 
    readTime: 8, 
    slug: 'from-zero-to-hero-ad-campaign', 
    tags: ['Advertising', 'Strategy', 'Performance', 'Case Study'],
    metaTitle: 'From Zero to Hero: How Koonji Infotech Launches Ad Campaigns', 
    metaDescription: 'An inside look at how Koonji Infotech transforms a blank screen into a profitable, high-converting ad campaign.' 
  },
  { 
    _id: '1', title: 'The Future of Performance Marketing in Nepal', category: 'Performance Ads', excerpt: 'How data-driven strategies are changing the landscape of advertising in Kathmandu.', author: 'Koonji Team', content: '<p>The landscape of performance marketing is shifting rapidly. With the rise of AI-driven ad platforms and privacy-first tracking, businesses in Nepal must adapt to stay competitive. In this article, we explore the top strategies that are currently yielding the highest ROI for local brands.</p><h2>Understanding the Shift</h2><p>Gone are the days when a simple Facebook boost was enough. Today, performance marketing requires a full-funnel approach, combining creative storytelling with rigorous data analysis.</p><h2>1. The Power of First-Party Data</h2><p>With third-party cookies crumbling, businesses must rely on their own data. Collecting emails, tracking logged-in user behavior, and building a robust CRM is no longer optional—it is the foundation of targeting.</p><h2>2. Machine Learning Takes the Wheel</h2><p>Platforms like Google and Meta now rely heavily on machine learning to find conversions. Instead of hyper-targeting narrow audiences, the new best practice is providing high-quality creative to broader audiences and letting the algorithm do the heavy lifting.</p>', publishedAt: '2024-05-12T00:00:00Z', readTime: 5, slug: 'future-of-performance-marketing', tags: ['Performance', 'Data', 'Trends'], metaTitle: 'Future of Performance Marketing | Koonji Infotech', metaDescription: 'Discover how data-driven strategies and AI are reshaping performance advertising in Nepal.' 
  },
  { 
    _id: '2', title: 'Why Your Business Needs a Brand Identity, Not Just a Logo', category: 'Branding', excerpt: 'A logo is just the beginning. Discover how a complete brand system drives loyalty.', author: 'Creative Dept', content: '<p>Many businesses make the mistake of treating their logo as their entire brand. While a logo is a crucial identifier, your brand identity encompasses much more—from your typography and color palette to your voice and messaging.</p><h2>The Elements of a Brand System</h2><ul><li><strong>Visual Identity:</strong> Logo, colors, typography.</li><li><strong>Verbal Identity:</strong> Tone of voice, messaging pillars.</li><li><strong>Brand Guidelines:</strong> Rules for consistent application.</li></ul><p>Investing in a comprehensive brand identity helps build trust and recognition, ultimately driving long-term customer loyalty.</p><h2>Consistency is King</h2><p>Whether a customer visits your website, reads your brochure, or scrolls past your Instagram post, they should immediately recognize your brand. A disjointed presence confuses consumers and dilutes your perceived value. A strong brand system prevents this.</p>', publishedAt: '2024-04-28T00:00:00Z', readTime: 7, slug: 'brand-identity-vs-logo', tags: ['Branding', 'Design', 'Strategy'], metaTitle: 'Brand Identity vs Logo | Koonji Infotech', metaDescription: 'Learn why a comprehensive brand identity system is more powerful than just a logo.' 
  },
  { 
    _id: '3', title: 'Maximizing ROI with Short-Form Video', category: 'Video Production', excerpt: 'TikTok and Reels are dominating attention. Here is how your business can capitalize.', author: 'Video Team', content: '<p>Short-form video is currently the most engaging content format on social media. Platforms like TikTok, Instagram Reels, and YouTube Shorts offer unprecedented organic reach for brands that know how to use them.</p><h2>Keys to Successful Short-Form Content</h2><ol><li><strong>Hook viewers in the first 3 seconds:</strong> If you don\'t grab attention instantly, they will scroll past.</li><li><strong>Provide immediate value or entertainment:</strong> Educational quick-tips, behind-the-scenes, or humor work best.</li><li><strong>Use trending audio strategically:</strong> Audio is a discovery tool on these platforms.</li><li><strong>Include a clear call to action:</strong> Tell the viewer exactly what to do next.</li></ol><p>Our video production team has helped numerous clients increase their engagement rates by over 300% simply by pivoting to a short-form video strategy.</p>', publishedAt: '2024-04-10T00:00:00Z', readTime: 4, slug: 'maximizing-roi-short-form-video', tags: ['Video', 'Social Media', 'Content'], metaTitle: 'Short-Form Video ROI | Koonji Infotech', metaDescription: 'Learn how to maximize your marketing ROI using short-form video on TikTok and Reels.' 
  },
  { 
    _id: '4', title: 'SEO Best Practices for 2024', category: 'Digital Marketing', excerpt: 'Stay ahead of algorithm updates with these actionable SEO strategies.', author: 'SEO Team', content: '<p>Search engine optimization is continually evolving. What worked in 2021 might actively harm your rankings today. In 2024, search engines are prioritizing helpful, user-first content over keyword-stuffed articles.</p><h2>Focus on E-E-A-T</h2><p>Experience, Expertise, Authoritativeness, and Trustworthiness are the pillars of modern SEO. Ensure your content demonstrates real-world experience and provides genuine value to the reader.</p><h2>Technical Foundation Matters</h2><ul><li><strong>Site Speed:</strong> Core Web Vitals are a direct ranking factor.</li><li><strong>Mobile First:</strong> Your site must function perfectly on mobile devices.</li><li><strong>Structured Data:</strong> Help Google understand your content using Schema markup.</li></ul><p>By combining technical excellence with genuinely helpful content, your organic traffic will compound over time.</p>', publishedAt: '2024-03-22T00:00:00Z', readTime: 6, slug: 'seo-best-practices-2024', tags: ['SEO', 'Digital Marketing', 'Growth'], metaTitle: 'SEO Best Practices 2024 | Koonji Infotech', metaDescription: 'Stay ahead of the curve with the latest SEO best practices and strategies for 2024.' 
  },
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
      <section className="mt-[72px] pt-16 pb-12 bg-white relative overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 30%, var(--color-brand) 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="container-koonji relative z-10 max-w-4xl mx-auto text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-brand transition-colors mb-8">
            <FiArrowLeft size={14} /> All Articles
          </Link>
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="eyebrow block text-brand">{post.category}</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-8"
          >
            {post.title}
          </motion.h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-slate-500 text-sm">
            <span className="flex items-center gap-2"><FiCalendar size={13} /> {date}</span>
            <span className="flex items-center gap-2"><FiClock size={13} /> {post.readTime} min read</span>
            <span className="flex items-center gap-2"><FiUser size={13} /> By {post.author || 'Admin'}</span>
          </div>
        </div>
      </section>

      {/* Article body with Sidebar Layout */}
      <section className="py-16 bg-slate-50">
        <div className="container-koonji max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Main Content (Left) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-2/3"
            >
              <div 
                className="prose-koonji bg-white p-5 md:p-12 rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <FiTag className="text-slate-400" size={16} />
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-4 py-1.5 rounded-full bg-white text-slate-600 border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Sidebar (Right) */}
            <div className="lg:w-1/3 space-y-8">
              
              {/* Author Box */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-xl">
                    {post.author ? post.author.charAt(0).toUpperCase() : 'A'}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{post.author || 'Admin'}</h3>
                    <p className="text-sm text-slate-500">Writer and contributor</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Digital marketing and branding experts at Koonji Infotech, dedicated to sharing insights that drive real business growth.
                </p>
              </div>

              {/* In This Article (TOC Placeholder) */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm sticky top-28">
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">In This Article</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2"><span className="text-brand font-medium">1.</span> The Discovery Deep-Dive</li>
                  <li className="flex gap-2"><span className="text-brand font-medium">2.</span> Avatar Sculpting</li>
                  <li className="flex gap-2"><span className="text-brand font-medium">3.</span> The Messaging Matrix</li>
                  <li className="flex gap-2"><span className="text-brand font-medium">4.</span> Creative Assembly</li>
                  <li className="flex gap-2"><span className="text-brand font-medium">5.</span> Funnel Architecture</li>
                  <li className="flex gap-2"><span className="text-brand font-medium">6.</span> Technical Mastery</li>
                  <li className="flex gap-2"><span className="text-brand font-medium">7.</span> The Launch Sequence</li>
                  <li className="flex gap-2"><span className="text-brand font-medium">8.</span> Continuous Optimization</li>
                </ul>
              </div>

              {/* Stay Sharp Newsletter */}
              <div className="bg-brand text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <FiMail size={80} />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3 relative z-10">Stay Sharp</h3>
                <p className="text-white/80 text-sm mb-6 relative z-10">
                  Insights on brand, creative, and performance — delivered fortnightly. No fluff.
                </p>
                <form className="relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full px-4 py-3 rounded-lg text-gray-900 text-sm outline-none mb-3"
                    required
                  />
                  <button type="submit" className="w-full bg-gray-900 text-white font-medium py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
