import SEO from './components/SEO'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Flames Blue Digital',
    url: baseUrl,
    sameAs: [
      'https://twitter.com/',
      'https://www.linkedin.com/',
    ],
    logo: baseUrl + '/favicon.ico',
    description: 'Premium digital marketing agency offering SEO, PPC, social, content, and automation.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '128',
    },
    department: [
      { '@type': 'Organization', name: 'SEO Agency' },
      { '@type': 'Organization', name: 'PPC & Paid Media Agency' },
      { '@type': 'Organization', name: 'Social Media Marketing Agency' },
      { '@type': 'Organization', name: 'Content Marketing Agency' },
      { '@type': 'Organization', name: 'Lead Generation Agency' },
      { '@type': 'Organization', name: 'Email Marketing Services' },
      { '@type': 'Organization', name: 'Digital Strategy & Marketing Automation' },
    ],
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <SEO
        title="Premium Digital Marketing Agency | SEO, PPC, Social, Content & Automation"
        description="Award-winning digital marketing agency. SEO, PPC, social media, content marketing, email, lead gen, and marketing automation to scale growth."
        canonical={baseUrl}
        jsonLd={jsonLd}
      />
      <Navbar />
      <Hero />
      <div id="services"><Services /></div>
      <div id="cases"><CaseStudies /></div>
      <Testimonials />
      <Blog />
      <Contact />
      <footer className="bg-black/90 border-t border-white/10 py-10 text-center text-white/70">
        <p>© {new Date().getFullYear()} Flames Blue Digital. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App
