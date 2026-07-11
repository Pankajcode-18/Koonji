require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const Service = require('../models/Service');
const PortfolioItem = require('../models/PortfolioItem');
const BlogPost = require('../models/BlogPost');
const TeamMember = require('../models/TeamMember');
const Testimonial = require('../models/Testimonial');
const Milestone = require('../models/Milestone');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/koonji';

const services = [
  {
    title: 'Ad Creation',
    slug: 'ad-creation',
    shortDescription: 'High-converting ads that captivate, engage, and convert your target audience across every platform.',
    fullDescription: 'Professional Ad Creation Service in Nepal by Koonji Infotech. We create high-converting social media ads, banner ads, Google Ads creatives, video advertisements, and campaign graphics that help businesses increase engagement, generate leads, and boost sales.\n\nOur approach to ad creation is deeply rooted in performance and psychology. We don\'t just design pretty graphics; we engineer compelling messages that stop the scroll and demand attention. From writing direct-response copy that addresses your customer\'s pain points to designing visuals that interrupt patterns, every element of our ads is tested and optimized.\n\nWhether you need ongoing monthly creatives for Facebook and Instagram or specialized banners for the Google Display Network, our team works closely with you to ensure your ads align with your broader digital marketing strategy and drive measurable ROI.',
    icon: 'MdCampaign',
    order: 1,
    metaTitle: 'Ad Creation Service in Nepal | Koonji Infotech',
    metaDescription: 'Professional ad creation service in Nepal. Social media ads, banner ads, Google Ads creatives, video ads & campaign graphics. Koonji Infotech.',
    features: ['Social Media Ad Creatives', 'Google Ads Banners', 'Video Advertisement Production', 'Campaign Graphics & Motion Design', 'A/B Testing Variants', 'Platform-Optimised Formats'],
  },
  {
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    shortDescription: 'Full-spectrum digital marketing that puts your brand in front of the right people at the right moment.',
    fullDescription: 'Professional Digital Marketing Service in Nepal by Koonji Infotech. Grow your business with SEO, Social Media Marketing, Google Ads, Content Marketing, Email Marketing, and performance-driven digital marketing strategies. We build integrated campaigns that align with your business goals — not just vanity metrics.\n\nIn today\'s crowded digital landscape, you need more than just a presence; you need a strategy. We take a holistic approach to digital marketing, ensuring that all channels—from organic search and social media to paid campaigns—work together in harmony. Our data-driven methodology means we constantly monitor, test, and refine your campaigns to maximize your return on investment.\n\nWe become an extension of your team, providing transparent reporting and strategic guidance to help you navigate the complexities of the digital world and outpace your competitors.',
    icon: 'MdTrendingUp',
    order: 2,
    metaTitle: 'Digital Marketing Service in Nepal | Koonji Infotech',
    metaDescription: 'SEO, Social Media Marketing, Google Ads & Content Marketing in Nepal. Performance-driven digital marketing by Koonji Infotech.',
    features: ['Search Engine Optimisation (SEO)', 'Social Media Marketing', 'Google & Meta Paid Ads', 'Content Marketing Strategy', 'Email Marketing Automation', 'Performance Analytics & Reporting'],
  },
  {
    title: 'Branding',
    slug: 'branding',
    shortDescription: 'Distinctive brand identities built to command attention, build trust, and stand the test of time.',
    fullDescription: 'Your brand is more than a logo — it\'s the story people tell about you. Koonji Infotech\'s branding service delivers comprehensive brand identity systems: strategy, visual identity, brand voice guidelines, and application across all touchpoints. From startups carving out their niche to established businesses refreshing their image, we create brands that mean something.\n\nOur branding process starts with deep discovery. We dig into the core values, mission, and unique differentiators of your business to craft a strategic foundation. Then, our design team brings this strategy to life through cohesive visual systems—including logos, typography, color palettes, and brand guidelines.\n\nThe result is a powerful, recognizable brand that resonates with your target audience, builds trust, and provides a solid platform for all your future marketing efforts.',
    icon: 'MdBrush',
    order: 3,
    metaTitle: 'Branding Service in Nepal | Koonji Infotech',
    metaDescription: 'Brand identity design in Nepal. Logo, visual systems, brand strategy & guidelines. Koonji Infotech creates brands that resonate.',
    features: ['Brand Strategy & Positioning', 'Logo & Visual Identity Design', 'Brand Voice & Messaging', 'Brand Guidelines Document', 'Stationery & Collateral Design', 'Brand Rollout Consultation'],
  },
  {
    title: 'Video Production',
    slug: 'video-production',
    shortDescription: 'Cinematic video content that tells your story, showcases your brand, and moves your audience to act.',
    fullDescription: 'From concept to final cut, Koonji Infotech produces video content that stands out in crowded feeds. Our video production service covers corporate films, product videos, social media reels, event coverage, and full advertising campaigns. We handle scripting, shooting, editing, colour grading, and motion graphics — delivering premium-quality video on time and on budget.\n\nVideo is the most powerful medium for storytelling in the digital age. We work with you to understand the message you want to convey and the emotion you want to evoke. Our team then handles everything from storyboarding and casting to on-location shooting and complex post-production.\n\nWhether it\'s a 15-second TikTok reel designed to go viral or a 3-minute corporate documentary designed to build trust with investors, we deliver high-impact visual stories that drive action.',
    icon: 'MdVideocam',
    order: 4,
    metaTitle: 'Video Production Service in Nepal | Koonji Infotech',
    metaDescription: 'Professional video production in Nepal. Corporate films, social media reels, product videos & ad campaigns. Koonji Infotech.',
    features: ['Corporate & Brand Films', 'Social Media Reels & Short-Form', 'Product & Promotional Videos', 'Event Videography & Coverage', 'Motion Graphics & Animation', 'Scripting & Creative Direction'],
  },
  {
    title: 'Performance Ads',
    slug: 'performance-ads',
    shortDescription: 'Data-fuelled paid advertising campaigns engineered for maximum ROI and measurable growth.',
    fullDescription: 'Koonji Infotech\'s Performance Ads service takes a science-led approach to paid media. We research your audience, build tightly structured campaigns on Google, Meta, and beyond, continuously optimise based on real data, and report transparently on every rupee spent. Our clients consistently see improved cost-per-acquisition and sustained growth in qualified leads.\n\nWe manage your ad budget as if it were our own. By implementing advanced tracking setups and robust attribution models, we ensure every click is measured and every conversion is tracked. Our media buyers use dynamic creative testing to quickly identify winning ads and eliminate losing ones, maximizing your ROI.\n\nWe provide transparent, easy-to-understand dashboards and regular strategic reviews so you always know exactly how your campaigns are performing and what our next steps are to scale your results.',
    icon: 'MdShowChart',
    order: 5,
    metaTitle: 'Performance Advertising Service in Nepal | Koonji Infotech',
    metaDescription: 'ROI-focused Google Ads, Meta Ads & paid media campaigns in Nepal. Data-driven performance advertising by Koonji Infotech.',
    features: ['Google Search & Display Campaigns', 'Meta (Facebook & Instagram) Ads', 'Audience Research & Targeting', 'Continuous A/B Optimisation', 'Conversion Tracking Setup', 'Monthly Performance Reports'],
  },
  {
    title: 'Web Development',
    slug: 'web-development',
    shortDescription: 'Custom, high-performance websites built for speed, scalability, and seamless user experiences.',
    fullDescription: 'Professional Web Development Service in Nepal by Koonji Infotech. We build fast, secure, and fully responsive websites that serve as powerful digital storefronts for your brand.\n\nFrom corporate websites and dynamic web applications to robust e-commerce platforms, our development team combines clean, modern code with cutting-edge technologies like React, Node.js, and MongoDB. We ensure every site is optimized for search engines, fully accessible, and designed to convert visitors into customers.\n\nWe don\'t just build websites; we engineer digital experiences that are easy to manage and built to scale as your business grows.',
    icon: 'MdWeb',
    order: 6,
    metaTitle: 'Web Development Service in Nepal | Koonji Infotech',
    metaDescription: 'Custom website development, e-commerce, and web applications in Nepal by Koonji Infotech.',
    features: ['Custom Website Design', 'E-Commerce Solutions', 'CMS Integration & Management', 'Web Application Development', 'Performance Optimization', 'Responsive & Mobile-First Design'],
  },
  {
    title: 'Application Development',
    slug: 'application-development',
    shortDescription: 'Intuitive and powerful mobile applications designed to engage users and drive business growth on iOS and Android.',
    fullDescription: 'Professional Mobile App Development Service in Nepal by Koonji Infotech. We design and develop custom mobile applications that put your business right in your customers\' pockets.\n\nWhether you need a native iOS app, an Android application, or a cross-platform solution using React Native or Flutter, our expert developers bring your vision to life. We focus on creating seamless, intuitive user interfaces paired with robust back-end architectures to ensure your app is secure, fast, and scalable.\n\nFrom initial prototyping and UI/UX design to app store deployment and ongoing maintenance, we guide you through the entire app development lifecycle.',
    icon: 'MdPhoneIphone',
    order: 7,
    metaTitle: 'Mobile App Development Service in Nepal | Koonji Infotech',
    metaDescription: 'Native and cross-platform mobile application development for iOS and Android in Nepal. Custom app solutions by Koonji Infotech.',
    features: ['iOS & Android Development', 'Cross-Platform App Development', 'UI/UX App Design', 'API Integration & Backend', 'App Store Optimization (ASO)', 'Ongoing Maintenance & Support'],
  },
  {
    title: 'SEO & Analytics',
    slug: 'seo-analytics',
    shortDescription: 'Data-driven SEO strategies that improve your visibility and drive organic growth.',
    fullDescription: 'Comprehensive SEO and web analytics services in Nepal. We don\'t just chase keywords; we optimize for intent and user experience. From technical SEO audits to content optimization, we help your business rank higher on Google and convert organic traffic into loyal customers.',
    icon: 'MdAnalytics',
    order: 8,
    metaTitle: 'SEO & Analytics Service in Nepal | Koonji Infotech',
    metaDescription: 'Data-driven SEO and analytics services in Nepal. Rank higher on Google and drive organic growth with Koonji Infotech.',
    features: ['Technical SEO Audits', 'Keyword Strategy', 'On-Page Optimization', 'Link Building', 'Google Analytics Setup', 'Performance Dashboards'],
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    shortDescription: 'User-centric designs that delight your customers and reduce friction at every touchpoint.',
    fullDescription: 'Professional UI/UX Design services in Nepal. We design intuitive, accessible, and stunning digital interfaces. Our design process is rooted in user research and psychological principles, ensuring that your app or website not only looks beautiful but also provides a seamless experience that drives conversions.',
    icon: 'MdDesignServices',
    order: 9,
    metaTitle: 'UI/UX Design Service in Nepal | Koonji Infotech',
    metaDescription: 'User-centric UI/UX design services in Nepal. We create intuitive interfaces that delight customers and drive conversions.',
    features: ['User Research', 'Wireframing & Prototyping', 'User Interface (UI) Design', 'User Experience (UX) Strategy', 'Usability Testing', 'Design Systems'],
  },
];

const portfolioItems = [
  // Branding (5 items)
  {
    title: 'Apex Brand Refresh',
    category: 'Branding',
    description: 'Full identity overhaul for a leading corporate group, transforming how their brand shows up in the world.',
    images: ['https://picsum.photos/id/0/800/600'],
    client: 'Apex Group',
    challenge: 'Apex Group needed a modernized identity that reflected their growth while maintaining the trust of their legacy audience.',
    solution: 'We developed a comprehensive brand strategy and a bold new visual identity system that brought a cohesive and contemporary feel across all touchpoints.',
    results: 'The refresh garnered universal praise from stakeholders and led to a 40% increase in positive brand sentiment.',
    featured: true,
    order: 1,
  },
  {
    title: 'TechNova Identity',
    category: 'Branding',
    description: 'Complete brand overhaul for a fast-growing fintech startup — from strategy through to launch.',
    images: ['https://picsum.photos/id/1/800/600'],
    client: 'TechNova',
    challenge: 'TechNova was entering a crowded market without a distinctive identity.',
    solution: 'Developed a comprehensive brand strategy, visual identity, and brand guidelines.',
    results: 'Brand recognition increased significantly within 6 months of launch.',
    featured: false,
    order: 2,
  },
  {
    title: 'Himalayan Organics Rebrand',
    category: 'Branding',
    description: 'Premium rebrand for an organic foods company targeting health-conscious urban consumers.',
    images: ['https://picsum.photos/id/2/800/600'],
    client: 'Himalayan Organics',
    challenge: 'The existing packaging looked generic and failed to communicate premium quality.',
    solution: 'A complete packaging and identity redesign focused on earthy tones and minimalist typography.',
    results: 'Retail sales increased by 22% in the first quarter post-launch.',
    featured: false,
    order: 3,
  },
  {
    title: 'Everest Coffee Co.',
    category: 'Branding',
    description: 'Visual identity and packaging for a specialty coffee roaster.',
    images: ['https://picsum.photos/id/3/800/600'],
    client: 'Everest Coffee Co.',
    challenge: 'Standing out on competitive cafe shelves with a unique visual story.',
    solution: 'Created an identity inspired by topography maps and vibrant accent colors.',
    results: 'Secured placement in 15 new premium retail locations.',
    featured: false,
    order: 4,
  },
  {
    title: 'Lumina Skincare',
    category: 'Branding',
    description: 'Brand identity and packaging design for a new luxury skincare line.',
    images: ['https://picsum.photos/id/4/800/600'],
    client: 'Lumina',
    challenge: 'Communicating clinical efficacy alongside natural ingredients.',
    solution: 'A refined, clinical-yet-warm visual identity with holographic packaging details.',
    results: 'Sold out initial production run within 3 weeks of launch.',
    featured: false,
    order: 5,
  },

  // Performance (5 items)
  {
    title: 'Orbit Media Campaign',
    category: 'Performance',
    description: 'A data-driven performance advertising campaign that consistently outperformed benchmarks.',
    images: ['https://picsum.photos/id/6/800/600'],
    client: 'Orbit Media',
    challenge: 'Struggling with high customer acquisition costs and low ROI.',
    solution: 'Restructured campaigns across Meta and Google, implementing dynamic creative testing.',
    results: 'Achieved a 3x ROAS within the first 90 days, significantly reducing the CPA.',
    featured: true,
    order: 6,
  },
  {
    title: 'MountainBrew Ads',
    category: 'Performance',
    description: 'Performance ad campaign across Meta and Google delivering 3.2× ROAS.',
    images: ['https://picsum.photos/id/7/800/600'],
    client: 'MountainBrew Tea',
    challenge: 'High customer acquisition costs on existing Meta campaigns running generic creative.',
    solution: 'Rebuilt campaign structure with UGC-style video creatives and full-funnel approach.',
    results: 'CPA reduced by 40%. Email list grew by 8,000 subscribers.',
    featured: false,
    order: 7,
  },
  {
    title: 'BankLink Lead Gen',
    category: 'Performance',
    description: 'Lead generation campaign for a digital banking platform achieving 60% lower CPL.',
    images: ['https://picsum.photos/id/9/800/600'],
    client: 'BankLink',
    challenge: 'Generating qualified B2B leads in a highly competitive financial sector.',
    solution: 'Hyper-targeted LinkedIn and Google Search campaigns with high-value lead magnets.',
    results: 'Generated 500+ qualified leads at a 60% lower CPL than the industry benchmark.',
    featured: false,
    order: 8,
  },
  {
    title: 'EduTech Conversions',
    category: 'Performance',
    description: 'Scaling course enrollments for an online education platform through paid social.',
    images: ['https://picsum.photos/id/20/800/600'],
    client: 'EduTech Academy',
    challenge: 'Scaling ad spend without dropping ROAS below the break-even point.',
    solution: 'Implemented aggressive creative testing and advanced lookalike audience layering.',
    results: 'Scaled monthly spend by 400% while maintaining a 2.5x ROAS.',
    featured: false,
    order: 9,
  },
  {
    title: 'FitApp User Acquisition',
    category: 'Performance',
    description: 'App install campaigns across Apple Search Ads and Meta.',
    images: ['https://picsum.photos/id/26/800/600'],
    client: 'FitApp',
    challenge: 'Acquiring active users with high lifetime value (LTV), not just cheap installs.',
    solution: 'Shifted optimization from "installs" to "in-app events" (trial starts).',
    results: 'Decreased cost per trial start by 35% within two months.',
    featured: false,
    order: 10,
  },

  // Video (5 items)
  {
    title: 'Nova Launch Film',
    category: 'Video',
    description: 'A cinematic brand film crafted to introduce Nova Corp\'s newest product line.',
    images: ['https://picsum.photos/id/36/800/600'],
    client: 'Nova Corp',
    challenge: 'Cutting through the noise of a crowded market with a compelling product launch.',
    solution: 'Scripted, shot, and produced a high-impact launch film focused on storytelling.',
    results: 'Generated over 500,000 views in its first week and drove record-breaking sales.',
    featured: true,
    order: 11,
  },
  {
    title: 'YatraCo Brand Film',
    category: 'Video',
    description: '90-second brand film capturing the spirit of authentic Himalayan adventure.',
    images: ['https://picsum.photos/id/42/800/600'],
    client: 'YatraCo Travel',
    challenge: 'Communicate premium positioning against generic travel content.',
    solution: 'Cinematic 90-second hero film across 5 locations with original score.',
    results: '1.2M organic views across platforms.',
    featured: false,
    order: 12,
  },
  {
    title: 'Everest Resort Reels',
    category: 'Video',
    description: 'A 12-part Instagram Reels series showcasing luxury resort experiences.',
    images: ['https://picsum.photos/id/48/800/600'],
    client: 'Everest Resort',
    challenge: 'Increasing social engagement and direct bookings from younger demographics.',
    solution: 'Produced engaging, short-form vertical video content optimized for the algorithm.',
    results: 'Grew Instagram following by 15k and increased direct bookings by 18%.',
    featured: false,
    order: 13,
  },
  {
    title: 'FinTrust Explainer',
    category: 'Video',
    description: 'Animated explainer video for a complex financial product.',
    images: ['https://picsum.photos/id/60/800/600'],
    client: 'FinTrust',
    challenge: 'Explaining a complicated investment product in under 60 seconds.',
    solution: 'Created a sleek, 2D motion graphics video with a clear voiceover and metaphor-driven visuals.',
    results: 'Increased landing page conversion rate by 24%.',
    featured: false,
    order: 14,
  },
  {
    title: 'CityLife Documentary',
    category: 'Video',
    description: 'A mini-documentary highlighting the impact of a local NGO.',
    images: ['https://picsum.photos/id/119/800/600'],
    client: 'CityLife Foundation',
    challenge: 'Raising awareness and funds for urban development initiatives.',
    solution: 'Shot a documentary-style video focusing on personal stories of beneficiaries.',
    results: 'Helped the NGO exceed their annual fundraising goal by 30%.',
    featured: false,
    order: 15,
  },

  // Digital (5 items)
  {
    title: 'Pulse Social Strategy',
    category: 'Digital',
    description: 'An engaging, community-first social media strategy designed to build brand loyalty.',
    images: ['https://picsum.photos/id/160/800/600'],
    client: 'Pulse Labs',
    challenge: 'Low social engagement and a disconnected community presence.',
    solution: 'Implemented a content-first strategy focusing on educational insights and interactive polls.',
    results: 'Organic reach increased by 250% in 6 months, and engagement rates doubled.',
    featured: true,
    order: 16,
  },
  {
    title: 'NepMart SEO Growth',
    category: 'Digital',
    description: 'End-to-end digital marketing and SEO for a fast-growing e-commerce marketplace.',
    images: ['https://picsum.photos/id/163/800/600'],
    client: 'NepMart',
    challenge: 'Heavy reliance on paid acquisition making unit economics unsustainable.',
    solution: 'Implemented a 6-month SEO roadmap and content marketing programme.',
    results: 'Organic traffic up 180% in 6 months. Overall CAC down 35%.',
    featured: false,
    order: 17,
  },
  {
    title: 'KTM Eats SEO',
    category: 'Digital',
    description: 'Technical SEO and content strategy that took a food delivery app from page 4 to position 1.',
    images: ['https://picsum.photos/id/175/800/600'],
    client: 'KTM Eats',
    challenge: 'Low visibility for high-intent local search queries.',
    solution: 'Comprehensive technical SEO overhaul and local schema implementation.',
    results: 'Ranked #1 for 15 primary target keywords within 4 months.',
    featured: false,
    order: 18,
  },
  {
    title: 'TechHub Content Marketing',
    category: 'Digital',
    description: 'B2B content strategy and whitepaper production for a software firm.',
    images: ['https://picsum.photos/id/180/800/600'],
    client: 'TechHub',
    challenge: 'Generating high-quality B2B leads through organic channels.',
    solution: 'Produced a series of in-depth industry reports and gated whitepapers.',
    results: 'Generated 300+ MQLs (Marketing Qualified Leads) in the first quarter.',
    featured: false,
    order: 19,
  },
  {
    title: 'GreenEnergy Email Automation',
    category: 'Digital',
    description: 'Complex email automation sequences for a solar energy provider.',
    images: ['https://picsum.photos/id/192/800/600'],
    client: 'GreenEnergy Solutions',
    challenge: 'High drop-off rate between lead capture and sales consultation.',
    solution: 'Built a 7-part educational email sequence nurturing leads with ROI calculators and case studies.',
    results: 'Increased consultation booking rate by 45%.',
    featured: false,
    order: 20,
  },
];

const blogContent = `<h2>The Anatomy of a High-Converting Campaign</h2>
<p>In a world where every click counts and every dollar spent on ads must justify itself ten times over, the way you start an ad creation process determines whether you win or burn budget. At Koonji Infotech, we don’t just “make ads.” We engineer revenue engines. We design psychological hooks wrapped in pixels. And it all begins long before we even think about headlines or images.</p>
<p>If you’ve ever wondered how a professional digital marketing agency like Koonji Infotech transforms a blank screen into a profitable ad campaign, this inside look is for you. Grab a coffee—here’s our playbook.</p>

<h3>1. The Discovery Deep-Dive: We Become Your Customer’s Brain</h3>
<p>Most agencies jump straight into competitor research and keyword tools. We start earlier: we sit down with you. In a structured 60-minute discovery session (we call it the Koonji Ad Blueprint Call), we extract the hidden gold:</p>
<ul>
<li><strong>The “after” state:</strong> What transformation does your product create? Not features—emotional outcomes. Less stress? Status? More time to play with the kids?</li>
<li><strong>Unspoken hesitations:</strong> What doubts keep your ideal customer awake at night? We list every objection, fear, and skepticism they have before buying.</li>
<li><strong>Language mining:</strong> We record exact phrases you and your customers use. If your client says “I needed something that just works, no headaches,” that becomes ad copy. No marketer-speak allowed.</li>
<li><strong>The missed connection:</strong> Why did the last customer choose you over a competitor? Often the best ad angles hide there.</li>
</ul>
<p>This raw intelligence becomes the fuel for everything that follows. Without it, you’re guessing. With it, you’re armed with truth.</p>

<h3>2. Avatar Sculpting: We Don’t Target “Everyone”</h3>
<p>“Small business owners aged 25-54” is not an audience—it’s a census statistic. At Koonji Infotech, we build psychographic avatars with a name, a face, and a Monday morning frustration.</p>
<p>Using the discovery data, we create a primary persona. For example, “Startup Steve”: a 32-year-old SaaS founder who’s burned by agencies that promise growth but deliver vanity metrics. He scrolls LinkedIn at 11 PM, secretly worried his runway is shrinking, and responds to direct, no-fluff language.</p>
<p>We then map this avatar onto the actual ad platforms:</p>
<ul>
<li>What subreddits does Steve lurk in? (Reddit Ads)</li>
<li>Which job titles and company sizes match on LinkedIn?</li>
<li>What “interest but not declared” behaviors does Meta’s algorithm read?</li>
</ul>
<p>This step alone multiplies conversion rates because we speak to one person, not a crowd.</p>

<h3>3. The Messaging Matrix: One Core Promise, Infinite Angles</h3>
<p>With the avatar clear, we build what we internally call the Messaging Matrix. It’s a grid of hooks and proof points. We never put all our chips on a single ad angle; instead, we design 4-6 distinct concepts, each attacking a different motivation:</p>
<ul>
<li><strong>Problem-agitation:</strong> “Tired of agencies that disappear after signing the contract?”</li>
<li><strong>Emotion-led:</strong> “Imagine finally waking up without that pit in your stomach about cash flow.”</li>
<li><strong>Logic & credibility:</strong> “We’ve spent $2M+ on ads for B2B brands—here’s the data.”</li>
<li><strong>Objection crusher:</strong> “No long-term lock-in. We earn your business monthly.”</li>
</ul>
<p>Every angle gets a corresponding visual idea, because at Koonji Infotech we know that the hook (text, image, video first 3 seconds) does 80% of the work. Our creative briefs specify: “This ad must make Startup Steve think ‘Finally, someone gets it’ within 1.5 seconds.”</p>

<h3>4. Creative Assembly: Where Science Meets Art</h3>
<p>Now we open the design and copy tools—but with strict constraints. We don’t create “pretty” ads; we create ads that sell. Here’s the Koonji way:</p>
<ul>
<li><strong>Headline hierarchy:</strong> We write 25+ headline variations for each angle and keep the top 3 based on our 4U framework (Useful, Urgent, Unique, Ultra-specific).</li>
<li><strong>Visual testing first:</strong> We often test a static image, a carousel, and a short-form video (UGC style, even if we film it in-house) for the same message. Platform algorithms favor variety, but we maintain message consistency.</li>
<li><strong>The 3-second rule:</strong> Thumb-stopping power is non-negotiable. Our design team uses pattern interrupts—bold text overlays, unexpected colors, or micro-animations that halt the scroll.</li>
<li><strong>Ad copy that reads like a conversation:</strong> No corporate jargon. We write as if we’re texting the avatar. Short sentences. Lots of “you.” A clear CTA (call to action) that feels like a natural next step.</li>
</ul>

<h3>5. Funnel Architecture: The Ad is Just the Door</h3>
<p>An ad in isolation is a lonely, ineffective thing. At Koonji Infotech, we architect the full journey before the first impression is served. The ad creative must align seamlessly with:</p>
<ul>
<li><strong>Landing page congruency:</strong> If the ad says “Free growth audit for bootstrapped B2B companies,” the page headline must match exactly. No bait-and-switch. Message match = higher Quality Score and lower cost per click.</li>
<li><strong>Conversion mechanism:</strong> What’s the desired action? We map it to the ad goal. Is it a lead magnet download, a demo booking, a straight purchase? Each dictates a different ad format and pixel event setup.</li>
<li><strong>Retargeting logic:</strong> We plan the safety net. The person who watched 50% of the video but didn’t click gets a different ad tomorrow—maybe a testimonial. We pre-build these sequences in our campaign structure.</li>
</ul>

<h3>6. Technical Mastery: Pixel, Tracking, and the Invisible Backbone</h3>
<p>This step is invisible to the client but makes or breaks ROI. Our team ensures:</p>
<ul>
<li><strong>Flawless pixel implementation:</strong> Main pixel, conversion events, micro-conversions (like scroll depth or time on page) are tested via Meta Pixel Helper and Google Tag Assistant. No missed data.</li>
<li><strong>UTM discipline:</strong> Every URL carries clean UTM parameters so we can trace a sale back to the exact ad creative, placement, and keyword. We use a naming convention that the whole team respects.</li>
<li><strong>Audience seeding:</strong> For new accounts, we might start with lookalikes seeded from your top 5% customers (uploaded securely) or an interest-based audience with a layered demographic filter. We avoid broad targeting on day one unless budget allows rapid machine learning.</li>
</ul>

<h3>7. The Launch Sequence: Small Fire, Then Gasoline</h3>
<p>We never go from zero to $1,000/day in one shot. Koonji Infotech follows a measured launch cadence:</p>
<ul>
<li><strong>Soft launch (Day 1-3):</strong> 3-4 top ad variants go live with a modest daily budget ($30-50 per ad set). Goal: gather statistically significant click-through rate (CTR) and cost-per-click (CPC) data without financial risk.</li>
<li><strong>Creative elimination (Day 3-5):</strong> We kill ads with CTR below the industry benchmark or CPMs that are sky-high (indicating poor relevance score). Winners get a budget bump.</li>
<li><strong>Landing page heat check:</strong> We monitor time on page, bounce rate, and conversion rate. If CTR is great but conversions are low, the issue is the page, not the ad. We fix it fast.</li>
</ul>

<h3>8. The Optimization Loop That Never Sleeps</h3>
<p>Here’s what separates Koonji Infotech from agencies that “set and forget”: our weekly (sometimes daily) optimization rhythm.</p>
<ul>
<li><strong>Ad fatigue radar:</strong> We monitor frequency (how many times the same person sees your ad). Once it passes 2.5–3 in prospecting, we refresh creatives. We always have a queue of new hooks ready.</li>
<li><strong>Creative iteration:</strong> We mine the winning angle’s comments, shares, and reactions to spark the next batch. Sometimes a small copy tweak (“for SaaS founders” to “for bootstrapped SaaS founders”) lifts CTR by 20%.</li>
</ul>

<h3>Why This Process Makes Koonji Infotech Different</h3>
<p>Anyone can open Ads Manager and boost a post. But a strategic ad creation process—grounded in deep buyer psychology, creative rigor, technical precision, and continuous improvement—is what turns a £1,000 ad budget into £5,000 in pipeline.</p>
<p>Our clients come to us tired of guessing games. They stay because our “start” is actually the beginning of a predictable profit system. No fluff. No hidden fees. Just a proven framework executed by a team that cares about your numbers as much as you do.</p>
<p>Ready to see the Koonji Infotech process work for your brand? Contact us today for a free discovery session — let’s turn your next campaign into a conversion machine.</p>`;

const blogPosts = [
  {
    title: 'From Zero to Hero: How Koonji Infotech Launches a High-Converting Ad Campaign',
    slug: 'from-zero-to-hero-how-koonji-infotech-launches-a-high-converting-ad-campaign',
    excerpt: 'In a world where every click counts and every dollar spent on ads must justify itself ten times over, the way you start an ad creation process determines whether you win or burn budget.',
    content: blogContent,
    category: 'Performance Ads',
    readTime: 8,
    tags: ['advertising', 'performance marketing', 'campaign strategy', 'ROI'],
    isPublished: true,
  },
  {
    title: 'SEO in Nepal: What Businesses Get Wrong (And How to Fix It)',
    slug: 'seo-nepal-what-businesses-get-wrong',
    excerpt: 'Most Nepali businesses treat SEO as a one-time task. Here\'s why that\'s costing you traffic — and the 5-step fix.',
    content: '<h2>The SEO Misconception</h2><p>SEO is the single highest-ROI digital marketing channel for most businesses — but only when done correctly. Our audits of 50+ Nepali business websites revealed the same five mistakes again and again.</p><h2>Mistake #1: Keyword Stuffing Old Content</h2><p>Adding your target keyword 30 times to a page doesn\'t help — it actively hurts. Google\'s algorithms have long since evolved past keyword density. What matters now is topical authority and user intent matching.</p><h2>Mistake #2: Ignoring Technical SEO</h2><p>Page speed, mobile responsiveness, Core Web Vitals — these are ranking factors most businesses ignore entirely. A site loading in 6 seconds on mobile is leaving 60%+ of potential visitors on the table.</p><h2>Mistake #3: No Internal Linking Strategy</h2><p>Internal links pass authority between pages and help Google understand your site structure. Most Nepali business sites have zero intentional internal linking strategy.</p><h2>The 5-Step Fix</h2><ol><li>Technical audit: fix speed, mobile, and Core Web Vitals first</li><li>Keyword research: focus on buyer-intent keywords, not broad terms</li><li>Content calendar: publish 2 quality articles per month minimum</li><li>Internal linking: connect related content intentionally</li><li>Build backlinks: local directories, partnerships, guest posts</li></ol>',
    category: 'Digital Marketing',
    readTime: 8,
    tags: ['SEO', 'Nepal', 'digital marketing', 'search engine optimisation'],
    isPublished: true,
  },
  {
    title: 'Building a Brand Identity That Lasts: Lessons from 12 Years',
    slug: 'building-brand-identity-lessons-12-years',
    excerpt: 'After helping 500+ businesses shape their brand, here\'s what we\'ve learned about what makes brand identity endure.',
    content: '<h2>What We\'ve Learned in 12 Years of Brand Building</h2><p>Since founding Koonji Infotech in 2012, our team has had the privilege of building brand identities for businesses of every size — from first-year startups to established institutions. Across all of them, a handful of principles have separated the brands that endure from the ones that fade.</p><h2>Principle 1: Brand Strategy Before Design</h2><p>The biggest mistake we see is jumping straight to logo design without first answering the strategic questions: Who are we? Who do we serve? What do we stand for? A beautiful logo built on a shaky foundation is expensive to fix later.</p><h2>Principle 2: Simplicity Wins</h2><p>The most iconic brands in the world — Apple, Nike, Airbnb — have one thing in common: their identity is ruthlessly simple. Complexity is the enemy of memorability.</p><h2>Principle 3: Consistency Is the Work</h2><p>Creating the brand is the easy part. Maintaining it consistently across every touchpoint — every email, every social post, every staff interaction — is where most brands fail. This is why a robust brand guidelines document is non-negotiable.</p>',
    category: 'Branding',
    readTime: 7,
    tags: ['branding', 'brand identity', 'strategy', 'Nepal'],
    isPublished: true,
  },
  {
    title: 'How to Run Facebook Ads That Actually Convert in Nepal',
    slug: 'facebook-ads-that-convert-nepal',
    excerpt: 'A practical guide to Meta advertising for the Nepali market — from audience targeting to creative best practices.',
    content: '<h2>The Nepali Meta Ads Landscape in 2025</h2><p>Nepal has over 14 million active Facebook users, making Meta advertising one of the highest-impact channels for reaching Nepali consumers. Yet most local businesses run campaigns that massively underperform what\'s possible.</p><h2>Audience Targeting: The Foundation</h2><p>Most businesses target too broadly. Start with tight custom audiences: website visitors, email list uploads, and lookalikes of your existing customers. Save broad interest-based targeting for awareness phases only.</p><h2>Creative That Works in the Nepali Market</h2><p>Local language (Nepali or Nepali-English mix) consistently outperforms English-only creative. Social proof — testimonials, review counts, client logos — is especially powerful. Authentic, slightly imperfect UGC-style video often outperforms polished studio production.</p><h2>Campaign Structure Best Practice</h2><ul><li>Awareness: 1 ad set, broad targeting, video creative</li><li>Consideration: retarget video viewers 25%+, website visitors</li><li>Conversion: tight audience, direct offer, clear CTA</li></ul>',
    category: 'Digital Marketing',
    readTime: 9,
    tags: ['Facebook Ads', 'Meta advertising', 'Nepal', 'performance marketing'],
    isPublished: true,
  },
];

const teamMembers = [
  {
    name: 'Aakash Shrestha',
    role: 'Founder & Creative Director',
    bio: 'Aakash founded Koonji Infotech in 2012 with a single belief: that Nepal\'s businesses deserve world-class creative. With over 12 years leading brand and advertising projects across South Asia, he drives the creative vision that defines everything we make.',
    photo: 'https://picsum.photos/id/64/500/500',
    socialLinks: { linkedin: 'https://linkedin.com', twitter: '', instagram: '' },
    order: 1,
  },
  {
    name: 'Priya Maharjan',
    role: 'Head of Digital Strategy',
    bio: 'Priya leads all digital marketing strategy at Koonji, bringing 8 years of performance marketing experience. She has managed over NPR 50M in paid media spend and built SEO programmes that have driven millions of organic visits for Nepali brands.',
    photo: 'https://picsum.photos/id/65/500/500',
    socialLinks: { linkedin: 'https://linkedin.com', twitter: '', instagram: '' },
    order: 2,
  },
  {
    name: 'Roshan Tamang',
    role: 'Lead Videographer & Director',
    bio: 'Roshan has directed brand films from Kathmandu to Annapurna Base Camp. His cinematic eye and deep understanding of visual storytelling have earned Koonji three regional advertising awards. He also teaches video production at a leading Kathmandu media school.',
    photo: 'https://picsum.photos/id/91/500/500',
    socialLinks: { linkedin: '', twitter: '', instagram: 'https://instagram.com' },
    order: 3,
  },
  {
    name: 'Sujata Gurung',
    role: 'Brand Identity Designer',
    bio: 'Sujata\'s design work has shaped the visual identities of over 80 Nepali businesses. A graduate of the Lalipur School of Design, she brings a uniquely Nepal-informed perspective to global design trends — creating identities that feel both contemporary and rooted.',
    photo: 'https://picsum.photos/id/129/500/500',
    socialLinks: { linkedin: 'https://linkedin.com', twitter: '', instagram: 'https://instagram.com' },
    order: 4,
  },
  {
    name: 'Bikash Karki',
    role: 'Performance Ads Specialist',
    bio: 'Bikash is our data obsessive — the person who lives in dashboards and turns numbers into narrative. He manages Google and Meta campaigns for our performance clients, consistently beating industry benchmarks on ROAS and CPL.',
    photo: 'https://picsum.photos/id/177/500/500',
    socialLinks: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', instagram: '' },
    order: 5,
  },
  {
    name: 'Anita Thapa',
    role: 'Content & SEO Lead',
    bio: 'Anita leads content strategy and SEO across our digital marketing projects. A former journalist, she brings a storytelling discipline to content marketing that elevates brand voice while driving measurable organic growth.',
    photo: 'https://picsum.photos/id/338/500/500',
    socialLinks: { linkedin: 'https://linkedin.com', twitter: '', instagram: '' },
    order: 6,
  },
];

const testimonials = [
  {
    name: 'Ramesh Adhikari',
    role: 'CEO',
    company: 'TechNova Nepal',
    quote: 'Koonji Infotech didn\'t just design us a logo — they helped us understand our brand. The identity they built is one of our greatest business assets today. Every investor, every customer mentions it.',
    rating: 5,
    order: 1,
  },
  {
    name: 'Sunita Rai',
    role: 'Marketing Director',
    company: 'MountainBrew Tea',
    quote: 'Our Meta ads were haemorrhaging budget before Koonji took over. Within 60 days, ROAS went from 0.9× to 3.2×. Their performance team genuinely understands the Nepali consumer — not just the global playbook.',
    rating: 5,
    order: 2,
  },
  {
    name: 'Deepak Lama',
    role: 'Founder',
    company: 'YatraCo Travel',
    quote: 'The brand film Koonji produced for us has become our most important marketing asset. Over a million views, and still working for us two years later. That\'s extraordinary ROI on a single piece of content.',
    rating: 5,
    order: 3,
  },
  {
    name: 'Kavita Poudel',
    role: 'Head of Growth',
    company: 'NepMart E-Commerce',
    quote: 'Working with Koonji feels different from working with other agencies. They ask hard questions, challenge assumptions, and genuinely care about results. Six months in, our organic traffic is up 180%.',
    rating: 5,
    order: 4,
  },
];

const milestones = [
  {
    year: '2012',
    title: 'Founded in Kathmandu',
    description: 'Koonji Infotech was established with a team of three, a shared belief in the power of honest creativity, and a studio above a tea shop in Thamel.',
    order: 1,
  },
  {
    year: '2014',
    title: 'First Major Brand Client',
    description: 'Landed our first corporate branding retainer, a pivotal moment that validated our positioning as a premium creative partner — not just a design vendor.',
    order: 2,
  },
  {
    year: '2016',
    title: 'Digital Marketing Division Launched',
    description: 'Expanded beyond creative into performance digital marketing, recognising that great work must be backed by data-driven distribution to deliver real results.',
    order: 3,
  },
  {
    year: '2018',
    title: 'Video Production Studio Opens',
    description: 'Invested in a dedicated video production studio in Lalitpur, enabling full in-house film production from scripting through to colour grade and delivery.',
    order: 4,
  },
  {
    year: '2020',
    title: '100th Client Milestone',
    description: 'Reached our 100th client relationship — a diverse portfolio spanning fintech, hospitality, FMCG, NGOs, and government communications.',
    order: 5,
  },
  {
    year: '2021',
    title: 'Regional Advertising Award',
    description: 'Won the South Asia Digital Advertising Excellence Award for the YatraCo brand film — our first international recognition and a team landmark.',
    order: 6,
  },
  {
    year: '2023',
    title: '500+ Projects Delivered',
    description: 'Crossed the milestone of 500 successful project deliveries while maintaining our 98% client satisfaction rate — a number we\'re prouder of than any award.',
    order: 7,
  },
  {
    year: '2024',
    title: 'New Creative Hub',
    description: 'Moved into our purpose-built Creative Hub in Kathmandu Tech District — a 5,000 sq ft space designed to inspire the boldest work of our next decade.',
    order: 8,
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Promise.all([
      Service.deleteMany({}),
      PortfolioItem.deleteMany({}),
      BlogPost.deleteMany({}),
      TeamMember.deleteMany({}),
      Testimonial.deleteMany({}),
      Milestone.deleteMany({}),
    ]);
    console.log('🗑️  Cleared existing data');

    // Insert seed data
    await Promise.all([
      Service.insertMany(services),
      PortfolioItem.insertMany(portfolioItems),
      BlogPost.insertMany(blogPosts),
      TeamMember.insertMany(teamMembers),
      Testimonial.insertMany(testimonials),
      Milestone.insertMany(milestones),
    ]);

    console.log(`✅ Seeded ${services.length} services`);
    console.log(`✅ Seeded ${portfolioItems.length} portfolio items`);
    console.log(`✅ Seeded ${blogPosts.length} blog posts`);
    console.log(`✅ Seeded ${teamMembers.length} team members`);
    console.log(`✅ Seeded ${testimonials.length} testimonials`);
    console.log(`✅ Seeded ${milestones.length} milestones`);
    console.log('\n🎉 Database seeded successfully!');
  } catch (error) {
    console.error('❌ Seed error:', error.message);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

seed();
