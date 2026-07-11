import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import useFetch from '../../hooks/useFetch';

const fallbackTestimonials = [
  {
    _id: '1',
    name: 'Ramesh Adhikari',
    role: 'CEO',
    company: 'TechNova Nepal',
    quote: 'Koonji Infotech didn\'t just design us a logo — they helped us understand our brand. The identity they built is one of our greatest business assets today.',
    rating: 5,
  },
  {
    _id: '2',
    name: 'Sunita Rai',
    role: 'Marketing Director',
    company: 'MountainBrew Tea',
    quote: 'Our Meta ads were haemorrhaging budget before Koonji took over. Within 60 days, ROAS went from 0.9× to 3.2×. They genuinely understand the Nepali consumer.',
    rating: 5,
  },
  {
    _id: '3',
    name: 'Deepak Lama',
    role: 'Founder',
    company: 'YatraCo Travel',
    quote: 'The brand film Koonji produced has become our most important marketing asset. Over a million views, still working two years later. Extraordinary ROI.',
    rating: 5,
  },
  {
    _id: '4',
    name: 'Kavita Poudel',
    role: 'Head of Growth',
    company: 'NepMart E-Commerce',
    quote: 'Working with Koonji feels different. They ask hard questions, challenge assumptions, and genuinely care about results. Organic traffic is up 180%.',
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const { data } = useFetch('/testimonials');
  const testimonials = (data && data.length > 0) ? data : fallbackTestimonials;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = useCallback((dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(() => navigate(1), 6000);
    return () => clearInterval(timer);
  }, [navigate]);

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  return (
    <section className="py-16 bg-transparent" aria-label="Client testimonials">
      <div className="container-koonji">
        <SectionHeader
          eyebrow="What Clients Say"
          title="Stories of Impact"
          center
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Quote mark */}
          <div
            className="font-serif text-[8rem] leading-none text-brand opacity-10 absolute -top-8 -left-4 select-none"
            aria-hidden="true"
          >
            "
          </div>

          {/* Slide */}
          <div className="min-h-[200px] flex items-center overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="w-full text-center px-8"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6" aria-label={`${testimonials[current].rating} stars`}>
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <FiStar key={i} className="text-brand fill-current" size={16} />
                  ))}
                </div>

                <blockquote className="font-serif text-xl md:text-2xl text-gray-900 leading-relaxed italic mb-8">
                  "{testimonials[current].quote}"
                </blockquote>

                <div>
                  <p className="font-semibold text-gray-900">{testimonials[current].name}</p>
                  <p className="text-slate-600 text-sm mt-1">
                    {testimonials[current].role}, {testimonials[current].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-500 hover:text-brand hover:border-brand hover:bg-brand/5 transition-all"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{ background: i === current ? 'var(--color-brand)' : '#E5E7EB' }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === current ? 'true' : undefined}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-500 hover:text-brand hover:border-brand hover:bg-brand/5 transition-all"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
