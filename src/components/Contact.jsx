import { useState } from 'react'

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${backendUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          phone: payload.phone || null,
          service: payload.service || null,
          message: payload.message || null,
          schedule_iso: payload.schedule || null,
          source: 'website'
        })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Submission failed')
      setStatus({ ok: true, msg: 'Thanks! We will get back to you shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    }
  }

  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <header className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold">Book a strategy session</h2>
          <p className="mt-3 text-white/70">Tell us about your goals. We’ll propose the highest-impact plan.</p>
        </header>
        <form onSubmit={onSubmit} className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="name" className="block text-sm text-white/80">Full name</label>
            <input required id="name" name="name" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Jane Doe" />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="email" className="block text-sm text-white/80">Email</label>
            <input required type="email" id="email" name="email" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="jane@company.com" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm text-white/80">Phone</label>
            <input id="phone" name="phone" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="+1 555 123 4567" />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm text-white/80">Service</label>
            <select id="service" name="service" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option value="">Select a service</option>
              <option>Digital Marketing Services</option>
              <option>SEO Agency</option>
              <option>PPC & Paid Media Agency</option>
              <option>Social Media Marketing Agency</option>
              <option>Content Marketing Agency</option>
              <option>Lead Generation Agency</option>
              <option>Email Marketing Services</option>
              <option>Digital Strategy & Marketing Automation</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm text-white/80">Message</label>
            <textarea id="message" name="message" rows="4" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Tell us about your goals"></textarea>
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="schedule" className="block text-sm text-white/80">Preferred date/time</label>
            <input type="datetime-local" id="schedule" name="schedule" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="w-full rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 transition">Submit</button>
          </div>
          {status && (
            <p role="status" className={`sm:col-span-2 mt-2 ${status.ok ? 'text-green-400' : 'text-red-400'}`}>{status.msg}</p>
          )}
        </form>
      </div>
    </section>
  )
}
