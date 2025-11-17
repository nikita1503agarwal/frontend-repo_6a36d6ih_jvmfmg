import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Ava Thompson', role: 'CMO', company: 'NovaPay', quote: 'They moved the needle where it matters. Clear attribution, scalable programs, real partnership.' },
  { name: 'Liam Chen', role: 'Head of Growth', company: 'CloudZero', quote: 'Best SEO and paid team we’ve worked with. Our pipeline velocity has never been higher.' },
  { name: 'Sofia Martinez', role: 'Founder', company: 'BrightSkin', quote: 'From brand to performance, they delivered. Beautiful work and measurable ROI.' },
]

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <header className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold">What clients say</h2>
          <p className="mt-3 text-white/70">Trusted by high-growth startups and established brands.</p>
        </header>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote key={t.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-white/90">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-white/70">{t.name} — {t.role}, {t.company}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
