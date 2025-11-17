import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl text-white">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-extrabold tracking-tight text-white">FLAMES<span className="text-red-600">.</span>BLUE</a>
        <button className="sm:hidden p-2 rounded-lg hover:bg-white/10" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          <Menu />
        </button>
        <ul className="hidden sm:flex gap-6 text-sm">
          <li><a className="hover:text-yellow-400" href="#services">Services</a></li>
          <li><a className="hover:text-yellow-400" href="#cases">Work</a></li>
          <li><a className="hover:text-yellow-400" href="#blog">Blog</a></li>
          <li><a className="hover:text-yellow-400" href="#contact">Contact</a></li>
        </ul>
      </div>
      {open && (
        <ul className="sm:hidden px-6 pb-4 space-y-2">
          <li><a className="block rounded-lg px-3 py-2 bg-white/5" href="#services">Services</a></li>
          <li><a className="block rounded-lg px-3 py-2 bg-white/5" href="#cases">Work</a></li>
          <li><a className="block rounded-lg px-3 py-2 bg-white/5" href="#blog">Blog</a></li>
          <li><a className="block rounded-lg px-3 py-2 bg-white/5" href="#contact">Contact</a></li>
        </ul>
      )}
    </nav>
  )
}
