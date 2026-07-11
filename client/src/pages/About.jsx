import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiUsers, FiZap } from 'react-icons/fi';
import SectionHeader from '../components/ui/SectionHeader';
import useFetch from '../hooks/useFetch';
import CtaBanner from '../components/home/CtaBanner';

import PageHero from '../components/ui/PageHero';

const values = [
  {
    icon: FiCheckCircle,
    title: 'Integrity',
    description: 'We say what we mean, deliver what we promise, and give honest counsel even when it\'s uncomfortable. Trust is earned through consistency, not words.',
  },
  {
    icon: FiZap,
    title: 'Innovation',
    description: 'We don\'t recycle last year\'s playbook. Every brief gets fresh thinking — informed by data, shaped by craft, and bold enough to stand out.',
  },
  {
    icon: FiUsers,
    title: 'Collaboration',
    description: 'The best work happens when client and agency think as one team. We immerse ourselves in your business because your success is our success.',
  },
];

function MilestoneTimeline({ milestones }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-brand to-transparent hidden md:block" aria-hidden="true" />

      <div className="space-y-12">
        {milestones.map((m, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={m._id || i}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isLeft ? '' : 'md:text-right'}`}
            >
              {isLeft ? (
                <>
                  <div className="md:pr-12">
                    <div className="card-light p-6">
                      <span className="font-serif text-3xl font-semibold text-brand block mb-2">{m.year}</span>
                      <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">{m.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block relative">
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand border-4 border-white shadow-sm" aria-hidden="true" />
                  </div>
                </>
              ) : (
                <>
                  <div className="hidden md:block relative">
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand border-4 border-white shadow-sm" aria-hidden="true" />
                  </div>
                  <div className="md:pl-12">
                    <div className="card-light p-6">
                      <span className="font-serif text-3xl font-semibold text-brand block mb-2">{m.year}</span>
                      <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">{m.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

const fallbackMilestones = [
  { _id: '1', year: '2012', title: 'The Beginning', description: 'Founded with a small team and a big vision in a shared office space.' },
  { _id: '2', year: '2015', title: 'First Major Campaign', description: 'Executed a nationwide campaign that put us on the map.' },
  { _id: '3', year: '2018', title: 'Digital Expansion', description: 'Grew our digital marketing division to offer full-funnel services.' },
  { _id: '4', year: '2023', title: 'Creative Hub', description: 'Moved into our new custom-built creative studio in the Tech District.' },
];

const fallbackTeam = [
  { _id: '1', name: 'Aarav Sharma', role: 'Creative Director', image: 'https://i.pravatar.cc/300?img=11' },
  { _id: '2', name: 'Priya Patel', role: 'Lead Strategist', image: 'https://i.pravatar.cc/300?img=5' },
  { _id: '3', name: 'Rohan Thapa', role: 'Head of Digital', image: 'https://i.pravatar.cc/300?img=12' },
  { _id: '4', name: 'Maya Gurung', role: 'Art Director', image: 'https://i.pravatar.cc/300?img=9' },
];

export default function About() {
  const { data: milestonesData } = useFetch('/milestones');
  const { data: teamData } = useFetch('/team');

  const milestones = (milestonesData && milestonesData.length > 0) ? milestonesData : fallbackMilestones;
  const team = (teamData && teamData.length > 0) ? teamData.slice(0, 4) : fallbackTeam;

  return (
    <>
      <Helmet>
        <title>About Us — Koonji Infotech | Nepal's Creative Agency</title>
        <meta name="description" content="Learn the story behind Koonji Infotech — Nepal's premier creative advertising agency. Founded in 2012, 500+ projects, 98% client satisfaction." />
        <link rel="canonical" href="https://koonji.com/about-us" />
      </Helmet>

      {/* Page hero */}
      <PageHero 
        eyebrow="About Koonji Infotech"
        title="We are the architects of"
        titleHighlight="growth."
        description="We combine sharp strategy, bold creative, and deep technical expertise to build brands that matter and campaigns that convert."
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
      />

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container-koonji">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow block mb-4">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Started With a Belief.<br />
                <span className="text-brand">Sustained by Results.</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Koonji Infotech was founded in 2012 in Kathmandu with a simple but ambitious belief: Nepal's businesses
                  deserve world-class creative work. Not creative for creativity's sake — but purposeful advertising that
                  drives measurable business outcomes.
                </p>
                <p>
                  What began as a three-person team working above a tea shop in Thamel has grown into Nepal's most
                  trusted advertising agency, with a dedicated Creative Hub in the Kathmandu Tech District and a team of
                  specialists across branding, digital marketing, video production, and performance advertising.
                </p>
                <p>
                  In twelve years, we have completed over 500 projects for clients across fintech, hospitality, FMCG,
                  e-commerce, NGOs, and government. Our 98% client satisfaction rate isn't a marketing number — it's the
                  result of a deep commitment to doing honest, excellent work every single day.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {[['500+', 'Projects Delivered'], ['98%', 'Client Satisfaction'], ['12+', 'Years Experience'], ['50+', 'Team Specialists']].map(([num, label]) => (
                <div key={label} className="card-light p-6 text-center">
                  <div className="font-serif text-3xl font-semibold text-brand mb-2">{num}</div>
                  <div className="text-slate-600 text-sm">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container-koonji">
          <SectionHeader eyebrow="What We Believe" title="Our Core Values" center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="card-light p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(36,87,229,0.1)' }}>
                  <val.icon className="text-brand" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">{val.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container-koonji">
          <SectionHeader eyebrow="Our Journey" title="Milestones That Define Us" center />
          <div className="mt-12">
            <MilestoneTimeline milestones={milestones} />
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-white">
        <div className="container-koonji">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeader eyebrow="The People" title="Meet Our Team" subtitle="The talented specialists behind every Koonji project." />
            <Link to="/team" className="btn-outline shrink-0 self-start md:self-end">
              Meet the Full Team <FiArrowRight className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={member._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-light p-6 text-center group"
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-serif font-bold text-brand"
                  style={{ background: 'rgba(36,87,229,0.1)' }}
                  aria-label={`${member.name} avatar`}
                >
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{member.name}</h3>
                <p className="text-slate-600 text-xs">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
