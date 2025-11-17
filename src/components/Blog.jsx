import { useEffect, useState } from 'react'

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

const seedPosts = [
  { title: 'Best Digital Marketing Agency for Small Business', slug: 'best-digital-marketing-agency-for-small-business', description: 'Learn how to choose a marketing partner that drives real revenue for SMBs.' },
  { title: 'Top SEO Services 2025: What Actually Moves Rankings', slug: 'top-seo-services-2025', description: 'A practical breakdown of SEO services that work in 2025.' },
]

export default function Blog() {
  const [posts, setPosts] = useState(seedPosts)

  useEffect(() => {
    let ignore = false
    fetch(`${backendUrl}/api/posts?limit=6`).then(r => r.json()).then(data => {
      if (!ignore && Array.isArray(data) && data.length) setPosts(data)
    }).catch(() => {})
    return () => { ignore = true }
  }, [])

  return (
    <section id="blog" className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <header className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold">Insights and playbooks</h2>
          <p className="mt-3 text-white/70">SEO-friendly, practitioner-written content designed to help you scale.</p>
        </header>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(p => (
            <a key={p.slug} href={`/blog/${p.slug}`} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/70">{p.description}</p>
              <span className="sr-only">Read blog post: {p.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
