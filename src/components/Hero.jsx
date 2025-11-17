import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide backdrop-blur-xl">Premium Digital Marketing Agency</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight">
            Growth-focused marketing with a glassmorphic edge
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            We combine brand strategy, performance marketing, and automation to scale your revenue. Elegant, fast, and measurable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-xl bg-red-600 hover:bg-red-500 text-white px-5 py-3 font-semibold transition">Book a Strategy Call</a>
            <a href="#services" className="rounded-xl bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-semibold backdrop-blur-xl border border-white/20 transition">Explore Services</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
