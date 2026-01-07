'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const NavLink = ({ href, children }) => (
    <Link
      href={href}
      onClick={() => setMobileMenuOpen(false)}
      className={`
        relative px-3 py-2 font-semibold transition-colors
        ${isActive(href) ? 'text-ctu-cyan' : 'text-ctu-blue'}
        hover:text-ctu-cyan
      `}
    >
      <span
        className={`
          absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full
          transition-all duration-300
          ${isActive(href) ? 'bg-ctu-cyan w-full' : 'w-0'}
        `}
      />
      {children}
    </Link>
  )

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-ctu-blue/10 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo / Identity */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-ctu-blue hover:text-ctu-cyan transition-colors"
          >
            AMI 2026
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/cfp">Call for Papers</NavLink>
            <NavLink href="/submission">Submission</NavLink>
            <NavLink href="/committee">Committee</NavLink>
            <NavLink href="/keynotes">Keynotes</NavLink>
            <NavLink href="/venue">Venue</NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ctu-blue"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-ctu-blue/10">
            <div className="flex flex-col gap-2">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/cfp">Call for Papers</NavLink>
              <NavLink href="/submission">Submission</NavLink>
              <NavLink href="/committee">Committee</NavLink>
              <NavLink href="/keynotes">Keynotes</NavLink>
              <NavLink href="/venue">Venue</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
