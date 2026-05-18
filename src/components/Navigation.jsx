'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileWorkshopsOpen, setMobileWorkshopsOpen] = useState(false)
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
            
            {/* Workshops Dropdown */}
            <div className="relative group">
              <button 
                className={`
                  flex items-center gap-1 px-3 py-2 font-semibold transition-colors
                  ${pathname.startsWith('/workshops') ? 'text-ctu-cyan' : 'text-ctu-blue'}
                  hover:text-ctu-cyan
                `}
              >
                Workshops <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex-col bg-white border border-ctu-blue/10 shadow-lg rounded-md min-w-[240px] py-2 z-50">
                <Link href="/workshops/workshop-1" className="block px-4 py-2 text-sm text-ctu-blue hover:bg-ctu-blue/5 hover:text-ctu-cyan transition-colors">
                  Workshop 1: AI in Healthcare
                </Link>
                <Link href="/workshops/workshop-2" className="block px-4 py-2 text-sm text-ctu-blue hover:bg-ctu-blue/5 hover:text-ctu-cyan transition-colors">
                  Workshop 2: Machine Learning
                </Link>
              </div>
            </div>

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
              
              {/* Mobile Workshops Dropdown */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setMobileWorkshopsOpen(!mobileWorkshopsOpen)}
                  className="flex items-center justify-between px-3 py-2 font-semibold text-ctu-blue hover:text-ctu-cyan"
                >
                  Workshops 
                  <ChevronDown size={16} className={`transform transition-transform ${mobileWorkshopsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileWorkshopsOpen && (
                  <div className="flex flex-col pl-4 pb-2 border-l-2 border-ctu-cyan/30 ml-4 mt-1 gap-2">
                    <Link 
                      href="/workshops/workshop-1" 
                      onClick={() => setMobileMenuOpen(false)} 
                      className="px-3 py-1 text-sm text-ctu-blue hover:text-ctu-cyan"
                    >
                      Workshop 1: AI in Healthcare
                    </Link>
                    <Link 
                      href="/workshops/workshop-2" 
                      onClick={() => setMobileMenuOpen(false)} 
                      className="px-3 py-1 text-sm text-ctu-blue hover:text-ctu-cyan"
                    >
                      Workshop 2: Machine Learning
                    </Link>
                  </div>
                )}
              </div>

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
