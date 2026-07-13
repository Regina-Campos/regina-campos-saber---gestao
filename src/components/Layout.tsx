import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Quem Sou', href: '#quem-sou' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Contato', href: '#contato' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/10',
          isScrolled ? 'glass-header' : 'solid-header',
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 group">
            <span className="font-serif text-2xl text-rc-ivory font-bold tracking-widest group-hover:text-rc-gold transition-colors">
              RC
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-rc-ivory/80 hover:text-rc-gold text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-rc-ivory hover:text-rc-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-rc-navy/95 backdrop-blur-md border-t border-white/10 py-4 shadow-lg animate-fade-in-down">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-rc-ivory/90 hover:text-rc-gold text-base font-medium py-2 transition-colors border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-rc-navy text-rc-ivory py-12 border-t border-rc-gold/20" id="contato">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="font-serif text-3xl font-bold tracking-widest block mb-2">RC</span>
            <p className="font-sans text-rc-gold uppercase tracking-[0.2em] text-xs font-semibold">
              Saber & Gestão
            </p>
          </div>
          <div className="text-center md:text-right text-sm text-rc-ivory/70 space-y-2">
            <p>© {new Date().getFullYear()} Regina Campos. Todos os direitos reservados.</p>
            <p>Especialista em Crédito e Gestão Empresarial</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/5511999999999" // Example link
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center animate-fade-in-up"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  )
}
