import { motion } from 'framer-motion'

const cases = [
  { title: 'Fintech Scale-Up: 3x MRR in 9 Months', slug: 'fintech-scale-up', summary: 'Multi-channel acquisition + CRO. 210% ROAS across paid search and social.' },
  { title: 'Ecommerce DTC: +145% Organic Traffic', slug: 'ecommerce-dtc-seo', summary: 'Technical SEO + content hub. 60+ keywords in top 3 within 6 months.' },
  { title: 'B2B SaaS: Pipeline Automation', slug: 'b2b-saas-automation', summary: 'RevOps + lifecycle email + lead scoring led to 38% SQL lift.' },
]

export default function CaseStudies() {
  return (
    <section className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <header className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold">Proven outcomes</h2>
          <p className="mt-3 text-white/70">A snapshot of results we’ve created for ambitious brands.</p>
        </header>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.a key={c.slug} href={`/case-studies/${c.slug}`} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-red-500">
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-white/70">{c.summary}</p>
              <span className="sr-only">Read case study: {c.title}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
