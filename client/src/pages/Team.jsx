import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';
import useFetch from '../hooks/useFetch';
import PageHero from '../components/ui/PageHero';

const fallbackTeam = [
  { _id: '1', name: 'Aakash Shrestha', role: 'Founder & Creative Director', bio: 'Leads the creative vision that defines everything we make.', socialLinks: { linkedin: 'https://linkedin.com' } },
  { _id: '2', name: 'Priya Maharjan', role: 'Head of Digital Strategy', bio: '8 years of performance marketing excellence.', socialLinks: { linkedin: 'https://linkedin.com' } },
  { _id: '3', name: 'Roshan Tamang', role: 'Lead Videographer & Director', bio: 'Award-winning cinematographer and visual storyteller.', socialLinks: { instagram: 'https://instagram.com' } },
  { _id: '4', name: 'Sujata Gurung', role: 'Brand Identity Designer', bio: 'Shaped the visual identities of 80+ Nepali businesses.', socialLinks: { linkedin: 'https://linkedin.com', instagram: 'https://instagram.com' } },
  { _id: '5', name: 'Bikash Karki', role: 'Performance Ads Specialist', bio: 'Data obsessive. ROAS and CPL benchmark beater.', socialLinks: { linkedin: 'https://linkedin.com' } },
  { _id: '6', name: 'Anita Thapa', role: 'Content & SEO Lead', bio: 'Former journalist turned content strategy powerhouse.', socialLinks: { linkedin: 'https://linkedin.com' } },
];

function TeamCard({ member }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="card-light p-7 text-center group"
    >
      {/* Avatar */}
      <div
        className="w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center text-3xl font-serif font-bold text-brand transition-all duration-300 group-hover:scale-105"
        style={{ background: 'rgba(36,87,229,0.1)', border: '2px solid rgba(36,87,229,0.2)' }}
        aria-label={`${member.name} photo`}
      >
        {member.photo ? (
          <img src={member.photo} alt={member.name} className="w-full h-full rounded-full object-cover" loading="lazy" />
        ) : (
          member.name.charAt(0)
        )}
      </div>

      <h3 className="font-serif text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
      <p className="text-brand text-sm font-medium mb-4">{member.role}</p>
      {member.bio && (
        <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">{member.bio}</p>
      )}

      {/* Social links */}
      <div className="flex justify-center gap-3">
        {member.socialLinks?.linkedin && (
          <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-md bg-white border border-gray-200 flex items-center justify-center text-slate-500 hover:text-brand hover:border-brand transition-all"
            aria-label={`${member.name} LinkedIn`}>
            <FiLinkedin size={13} />
          </a>
        )}
        {member.socialLinks?.instagram && (
          <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-md bg-white border border-gray-200 flex items-center justify-center text-slate-500 hover:text-brand hover:border-brand transition-all"
            aria-label={`${member.name} Instagram`}>
            <FiInstagram size={13} />
          </a>
        )}
        {member.socialLinks?.twitter && (
          <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-md bg-white border border-gray-200 flex items-center justify-center text-slate-500 hover:text-brand hover:border-brand transition-all"
            aria-label={`${member.name} Twitter`}>
            <FiTwitter size={13} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Team() {
  const { data, loading } = useFetch('/team');
  const team = (data && data.length > 0) ? data : fallbackTeam;

  return (
    <>
      <Helmet>
        <title>Our Team — Koonji Infotech | Meet the Creatives</title>
        <meta name="description" content="Meet the talented team behind Koonji Infotech — designers, strategists, videographers, and performance marketers who make every project exceptional." />
        <link rel="canonical" href="https://koonji.com/team" />
      </Helmet>

      {/* Page hero */}
      <PageHero 
        eyebrow="The People"
        title="The Minds Behind"
        titleHighlight="Every Project"
        description="A diverse team of strategists, creatives, and technologists united by one goal: exceptional results for our clients."
        bgImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80"
      />

      {/* Team Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-koonji">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="card-light h-64 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {team.map((member) => (
                <TeamCard key={member._id} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
