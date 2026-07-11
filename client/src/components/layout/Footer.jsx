import { Link } from 'react-router-dom';
import { FiLinkedin, FiInstagram, FiFacebook, FiTwitter, FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';

const serviceLinks = [
  { label: 'Ad Creation', to: '/services/ad-creation' },
  { label: 'Digital Marketing', to: '/services/digital-marketing' },
  { label: 'Branding', to: '/services/branding' },
  { label: 'Video Production', to: '/services/video-production' },
  { label: 'Performance Ads', to: '/services/performance-ads' },
  { label: 'Web Development', to: '/services/web-development' },
  { label: 'App Development', to: '/services/application-development' },
];

const quickLinks = [
  { label: 'About Us', to: '/about-us' },
  { label: 'Our Team', to: '/team' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact-us' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms' },
];

const socialLinks = [
  { icon: FiLinkedin, href: 'https://linkedin.com/company/koonji-infotech', label: 'LinkedIn' },
  { icon: FiInstagram, href: 'https://instagram.com/koonji.infotech', label: 'Instagram' },
  { icon: FiFacebook, href: 'https://facebook.com/koojjiinfotech', label: 'Facebook' },
  { icon: FiTwitter, href: 'https://twitter.com/koonji_infotech', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100" aria-label="Site footer">
      <div className="container-koonji">
        
        {/* Massive CTA Banner inside Footer */}
        <div className="bg-brand rounded-[2rem] p-10 md:p-14 mb-16 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-brand/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" aria-hidden="true" />
          <div className="relative z-10 text-center md:text-left mb-8 md:mb-0 flex flex-col items-center md:items-start">
            <h2 className="text-white font-serif text-3xl md:text-4xl font-semibold mb-3">
              Ready to transform your brand?
            </h2>
            <p className="text-blue-100 text-lg max-w-lg">
              Let's create something extraordinary together. Reach out today and start your journey.
            </p>
          </div>
          <Link
            to="/contact-us"
            className="relative z-10 bg-white text-brand px-8 py-4 rounded-full font-semibold hover:bg-gray-50 hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto"
          >
            Start a Project <FiArrowRight />
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16 text-center md:text-left">
          
          {/* Brand & Description */}
          <div className="md:col-span-4 lg:col-span-4 pr-0 lg:pr-8 flex flex-col items-center md:items-start">
            <Link to="/" aria-label="Koonji Infotech Home" className="inline-block mb-6 group">
              <img
                src="/logo.png"
                alt="Koonji Infotech"
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Nepal's leading creative advertising agency. We build bold campaigns, powerful brands, and
              performance-driven content that connects businesses with their true audience.
            </p>
            <div className="flex gap-3 justify-center md:justify-start w-full">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 hover:bg-brand hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="font-serif text-lg font-semibold text-gray-900 mb-6">Services</h3>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-slate-500 text-sm hover:text-brand transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="font-serif text-lg font-semibold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-slate-500 text-sm hover:text-brand transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col items-center md:items-start">
            <h3 className="font-serif text-lg font-semibold text-gray-900 mb-6">Get in Touch</h3>
            <ul className="space-y-4 mb-8 w-full">
              <li>
                <a href="https://maps.google.com/?q=Kathmandu" target="_blank" rel="noopener noreferrer" className="flex gap-3 justify-center md:justify-start items-start text-slate-500 text-sm hover:text-brand transition-colors">
                  <FiMapPin className="mt-0.5 shrink-0 text-brand" size={16} />
                  <span>Creative Hub, Tech District<br />Kathmandu, Nepal</span>
                </a>
              </li>
              <li>
                <a href="tel:+97712345678" className="flex gap-3 justify-center md:justify-start items-center text-slate-500 text-sm hover:text-brand transition-colors">
                  <FiPhone className="shrink-0 text-brand" size={16} />
                  <span>+977 1 234 56789</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@koonji.com" className="flex gap-3 justify-center md:justify-start items-center text-slate-500 text-sm hover:text-brand transition-colors">
                  <FiMail className="shrink-0 text-brand" size={16} />
                  <span>hello@koonji.com</span>
                </a>
              </li>
            </ul>

            <h3 className="font-serif text-lg font-semibold text-gray-900 mb-4">Subscribe</h3>
            <form className="flex flex-col sm:flex-row gap-2 w-full max-w-sm mx-auto md:mx-0" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-50 border border-gray-200 text-sm rounded-xl px-4 py-3 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-center sm:text-left"
                required
              />
              <button
                type="submit"
                className="bg-brand text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-center md:text-left">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Koonji Infotech Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-6">
            {legalLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-slate-500 text-sm hover:text-brand transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
}
