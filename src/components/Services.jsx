import { motion } from 'framer-motion'
import { Megaphone, Search, MousePointerClick, Share2, FileText, Sparkles, Mail, Workflow } from 'lucide-react'

const services = [
  { icon: Megaphone, title: 'Digital Marketing Services', slug: 'digital-marketing-services', desc: 'Full-funnel strategy and execution across paid, owned, and earned channels.' },
  { icon: Search, title: 'SEO Agency', slug: 'seo-agency', desc: 'Technical SEO, content strategy, and authority building for sustainable growth.' },
  { icon: MousePointerClick, title: 'PPC & Paid Media Agency', slug: 'ppc-paid-media-agency', desc: 'High-ROI campaigns across Google, Meta, LinkedIn, and programmatic.' },
  { icon: Share2, title: 'Social Media Marketing Agency', slug: 'social-media-marketing-agency', desc: 'Audience-first creative and media to build brand and demand.' },
  { icon: FileText, title: 'Content Marketing Agency', slug: 'content-marketing-agency', desc: 'Editorial strategy, copywriting, and content hubs engineered for search.' },
  { icon: Sparkles, title: 'Lead Generation Agency', slug: 'lead-generation-agency', desc: 'Pipeline-focused acquisition programs with attribution you can trust.' },
  { icon: Mail, title: 'Email Marketing Services', slug: 'email-marketing-services', desc: 'Lifecycle, CRM, and deliverability best practices that convert.' },
  { icon: Workflow, title: 'Digital Strategy & Marketing Automation', slug: 'digital-strategy-marketing-automation', desc: 'Measurement frameworks, CDP/CRM integration, and automation at scale.' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-yellow-500/10 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <header className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold">Services engineered for impact</h2>
          <p className="mt-3 text-white/70">From search to social to automation, our senior team builds systems that compound results.</p>
        </header>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.a
              key={s.slug}
              href={`/${s.slug}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-red-600/0 via-yellow-400/0 to-white/10 opacity-0 group-hover:opacity-100 transition" />
              <s.icon className="h-6 w-6 text-yellow-400" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
              <span className="sr-only">Read more about {s.title}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
