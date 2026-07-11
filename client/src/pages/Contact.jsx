import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock, FiCalendar, FiArrowRight, FiCheck, FiAlertCircle } from 'react-icons/fi';
import api from '../utils/api';
import PageHero from '../components/ui/PageHero';

const SERVICE_OPTIONS = [
  'Ad Creation',
  'Digital Marketing',
  'Branding',
  'Video Production',
  'Performance Ads',
  'General Inquiry',
];

const valueProps = [
  {
    title: 'Fast Execution',
    description: 'We move quickly without compromising quality. Most projects launch within agreed timelines — no excuses.',
  },
  {
    title: 'Proven Results',
    description: 'Every strategy is backed by data. We\'ve delivered measurable ROI for 500+ businesses across Nepal.',
  },
  {
    title: 'True Partnership',
    description: 'We embed ourselves in your business goals. Your success metrics become ours — not just deliverable counts.',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', serviceInterest: '', projectDetails: '', agreeTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [apiError, setApiError] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.projectDetails.trim()) e.projectDetails = 'Please describe your project';
    if (!form.agreeTerms) e.agreeTerms = 'Please accept the terms to continue';
    return e;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('loading');
    try {
      await api.post('/contact', {
        name: form.name,
        email: form.email,
        company: form.company,
        serviceInterest: form.serviceInterest,
        projectDetails: form.projectDetails,
      });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setApiError(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us — Koonji Infotech | Start a Project</title>
        <meta name="description" content="Get in touch with Koonji Infotech. Tell us about your project — we'll respond within 24 hours. Based in Kathmandu, Nepal." />
        <link rel="canonical" href="https://koonji.com/contact-us" />
      </Helmet>

      {/* Page hero */}
      <PageHero 
        eyebrow="Contact Us"
        title="Let's Start a"
        titleHighlight="Conversation"
        description="Tell us about your project and we'll be in touch within 24 hours."
        bgImage="https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=1600&q=80"
      />

      {/* Form + Info */}
      <section className="py-16 bg-gray-50">
        <div className="container-koonji">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {status === 'success' ? (
                <div className="card-light p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[rgba(36,87,229,0.1)] flex items-center justify-center mx-auto mb-5">
                    <FiCheck className="text-brand" size={28} />
                  </div>
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-3">Message Sent!</h2>
                  <p className="text-slate-600">Thanks for reaching out. We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-light p-8 space-y-5" noValidate aria-label="Contact form">
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>

                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-900 mb-2">Full Name *</label>
                    <input id="contact-name" name="name" type="text" value={form.name} onChange={handleChange}
                      placeholder="Your full name"
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      aria-required="true" aria-describedby={errors.name ? 'name-error' : undefined} />
                    {errors.name && <p id="name-error" className="text-red-400 text-xs mt-1.5" role="alert">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-900 mb-2">Email Address *</label>
                    <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="your@email.com"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      aria-required="true" aria-describedby={errors.email ? 'email-error' : undefined} />
                    {errors.email && <p id="email-error" className="text-red-400 text-xs mt-1.5" role="alert">{errors.email}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="contact-company" className="block text-sm font-medium text-gray-900 mb-2">Company / Organisation</label>
                    <input id="contact-company" name="company" type="text" value={form.company} onChange={handleChange}
                      placeholder="Your company name (optional)"
                      className="form-input" />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-medium text-gray-900 mb-2">Service Interest</label>
                    <select id="contact-service" name="serviceInterest" value={form.serviceInterest} onChange={handleChange}
                      className="form-input">
                      <option value="">Select a service...</option>
                      {SERVICE_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="contact-details" className="block text-sm font-medium text-gray-900 mb-2">Project Details *</label>
                    <textarea id="contact-details" name="projectDetails" value={form.projectDetails} onChange={handleChange}
                      rows={5} placeholder="Tell us about your project, goals, and timeline..."
                      className={`form-input resize-none ${errors.projectDetails ? 'error' : ''}`}
                      aria-required="true" aria-describedby={errors.projectDetails ? 'details-error' : undefined} />
                    {errors.projectDetails && <p id="details-error" className="text-red-400 text-xs mt-1.5" role="alert">{errors.projectDetails}</p>}
                  </div>

                  {/* Checkbox */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox" name="agreeTerms" checked={form.agreeTerms} onChange={handleChange}
                        className="mt-0.5 w-4 h-4 accent-brand"
                        aria-describedby={errors.agreeTerms ? 'terms-error' : undefined}
                      />
                      <span className="text-slate-600 text-sm leading-relaxed">
                        I agree to the{' '}
                        <a href="/terms" target="_blank" className="text-brand underline underline-offset-2">Terms of Service</a>
                        {' '}and{' '}
                        <a href="/privacy-policy" target="_blank" className="text-brand underline underline-offset-2">Privacy Policy</a>
                      </span>
                    </label>
                    {errors.agreeTerms && <p id="terms-error" className="text-red-400 text-xs mt-1.5" role="alert">{errors.agreeTerms}</p>}
                  </div>

                  {apiError && (
                    <div className="flex items-center gap-2 p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm" role="alert">
                      <FiAlertCircle size={15} /> {apiError}
                    </div>
                  )}

                  <button
                    type="submit"
                    id="contact-submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                    {status !== 'loading' && <FiArrowRight className="ml-1" />}
                  </button>
                </form>
              )}
              
              {/* What happens next */}
              <div className="mt-12 pl-2">
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-6">What happens next?</h3>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-brand text-white font-bold text-xs shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      1
                    </div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-1">Review</h4>
                      <p className="text-slate-600 text-sm">We carefully review your project details within 24 hours.</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-brand text-white font-bold text-xs shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      2
                    </div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-1">Discovery</h4>
                      <p className="text-slate-600 text-sm">A quick chat to dive deeper into your goals and vision.</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-brand text-white font-bold text-xs shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      3
                    </div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-1">Proposal</h4>
                      <p className="text-slate-600 text-sm">You receive a tailored plan, timeline, and strategy.</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(36,87,229,0.1)] flex items-center justify-center shrink-0">
                      <FiMapPin className="text-brand" size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm mb-0.5">Our Office</p>
                      <p className="text-slate-600 text-sm">Creative Hub, Tech District<br />Kathmandu, Nepal</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(36,87,229,0.1)] flex items-center justify-center shrink-0">
                      <FiPhone className="text-brand" size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm mb-0.5">Phone</p>
                      <a href="tel:+97712345678" className="text-slate-600 text-sm hover:text-brand transition-colors">+977 1 234 56789</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(36,87,229,0.1)] flex items-center justify-center shrink-0">
                      <FiMail className="text-brand" size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm mb-0.5">Email</p>
                      <a href="mailto:hello@koonji.com" className="text-slate-600 text-sm hover:text-brand transition-colors">hello@koonji.com</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(36,87,229,0.1)] flex items-center justify-center shrink-0">
                      <FiClock className="text-brand" size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm mb-0.5">Business Hours</p>
                      <p className="text-slate-600 text-sm">Monday – Friday, 9AM – 6PM NPT</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule call CTA */}
              <div className="card-light p-6">
                <div className="flex gap-3 mb-4">
                  <FiCalendar className="text-brand mt-0.5 shrink-0" size={18} />
                  <h3 className="font-semibold text-gray-900">Prefer a call?</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">Schedule a free 30-minute discovery call and let's talk about how we can help your business.</p>
                <a
                  href="https://calendly.com/koonji"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="schedule-call-cta"
                  className="btn-outline w-full justify-center text-sm"
                >
                  Schedule a Free Call
                </a>
              </div>

              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-[300px] w-full relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53719.93686121613!2d85.28493302080203!3d27.70895425220774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e1!3m2!1sen!2sin!4v1783795487481!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Location"
                  className="absolute inset-0"
                ></iframe>
              </div>

              {/* Value props */}
              <div className="space-y-5">
                <h3 className="font-serif text-xl font-semibold text-gray-900">Why Partner With Us</h3>
                {valueProps.map((prop) => (
                  <div key={prop.title} className="flex gap-4">
                    <div className="w-1 rounded-full bg-brand shrink-0 self-stretch" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-1">{prop.title}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{prop.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
