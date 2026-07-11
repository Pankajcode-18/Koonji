import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

function LegalHero({ title }) {
  return (
    <section className="pt-36 pb-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, var(--color-brand) 0%, transparent 70%)' }} aria-hidden="true" />
      <div className="container-koonji relative z-10 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl md:text-5xl font-semibold text-gray-900"
        >
          {title}
        </motion.h1>
        <p className="text-slate-600 mt-3 text-sm">Last updated: January 2025</p>
      </div>
    </section>
  );
}

export function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service — Koonji Infotech</title>
        <meta name="description" content="Terms of Service for Koonji Infotech. Read our terms for using our services and website." />
      </Helmet>
      <LegalHero title="Terms of Service" />
      <section className="py-16 bg-gray-50">
        <div className="container-koonji max-w-3xl prose-koonji">
          <h2>1. Agreement to Terms</h2>
          <p>By accessing or using the services provided by Koonji Infotech Pvt. Ltd. ("Koonji," "we," "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

          <h2>2. Services</h2>
          <p>Koonji Infotech provides advertising, branding, digital marketing, video production, and related creative services. Specific deliverables, timelines, and fees are outlined in individual client agreements or proposals.</p>

          <h2>3. Intellectual Property</h2>
          <p>Upon full payment, intellectual property rights for work created specifically for a client are transferred to that client. Koonji retains the right to display completed work in our portfolio unless otherwise agreed in writing.</p>

          <h2>4. Payment Terms</h2>
          <p>Payment schedules are defined in client agreements. Koonji reserves the right to suspend work on overdue accounts. A 50% deposit is typically required before project commencement.</p>

          <h2>5. Confidentiality</h2>
          <p>Both parties agree to maintain confidentiality of sensitive business information shared during the course of a project. This obligation survives termination of the engagement.</p>

          <h2>6. Limitation of Liability</h2>
          <p>Koonji's total liability for any claim arising out of our services shall not exceed the total fees paid by the client for the specific project giving rise to the claim.</p>

          <h2>7. Governing Law</h2>
          <p>These terms are governed by the laws of Nepal. Any disputes shall be resolved through arbitration in Kathmandu, Nepal.</p>

          <h2>8. Contact</h2>
          <p>For questions about these Terms, contact us at <a href="mailto:legal@koonji.com">legal@koonji.com</a>.</p>
        </div>
      </section>
    </>
  );
}

export function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — Koonji Infotech</title>
        <meta name="description" content="Privacy Policy for Koonji Infotech. How we collect, use, and protect your personal information." />
      </Helmet>
      <LegalHero title="Privacy Policy" />
      <section className="py-16 bg-gray-50">
        <div className="container-koonji max-w-3xl prose-koonji">
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, including name, email address, company name, and project details when you contact us through our website or by other means.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to: respond to enquiries and provide services; communicate with you about your project; send relevant updates and insights (with your consent); and improve our website and services.</p>

          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our website and conducting our business, subject to confidentiality agreements.</p>

          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</p>

          <h2>5. Cookies</h2>
          <p>Our website uses cookies to improve user experience and analyse site traffic. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.</p>

          <h2>6. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at <a href="mailto:privacy@koonji.com">privacy@koonji.com</a>.</p>

          <h2>7. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website.</p>

          <h2>8. Contact Us</h2>
          <p>For questions about this Privacy Policy, contact us at <a href="mailto:privacy@koonji.com">privacy@koonji.com</a>.</p>
        </div>
      </section>
    </>
  );
}
