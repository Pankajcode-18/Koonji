import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We start by deeply understanding your business, audience, competitors, and goals. No assumptions — just research-backed insight that shapes everything we build.',
  },
  {
    number: '02',
    title: 'Create',
    description: 'Strategy in hand, our creative team develops concepts, copy, visuals, and content that are bold enough to stand out and smart enough to convert.',
  },
  {
    number: '03',
    title: 'Launch',
    description: 'We deploy campaigns with precision — the right message, the right channel, the right moment. Launch is not the end; it\'s where the real work begins.',
  },
  {
    number: '04',
    title: 'Scale',
    description: 'We analyse performance data continuously, double down on what works, eliminate what doesn\'t, and help you scale the results that matter to your business.',
  },
];

export default function HowWeWork() {
  return (
    <section className="py-16 bg-white" aria-label="How we work">
      <div className="container-koonji">
        <div className="section-divider mb-16" aria-hidden="true" />
        <SectionHeader
          eyebrow="Our Approach"
          title="How We Work"
          subtitle="A proven four-stage process that turns ambition into measurable outcomes — every time."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
              className="relative"
            >
              {/* Large serif number */}
              <div
                className="font-serif text-[5rem] font-light leading-none mb-4"
                style={{ color: 'var(--color-brand)', opacity: 0.2 }}
                aria-hidden="true"
              >
                {step.number}
              </div>

              {/* Connector line on desktop */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-[calc(100%+1rem)] w-8 h-px bg-gradient-to-r from-[rgba(36,87,229,0.3)] to-transparent"
                  aria-hidden="true"
                />
              )}

              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="section-divider mt-16" aria-hidden="true" />
      </div>
    </section>
  );
}
