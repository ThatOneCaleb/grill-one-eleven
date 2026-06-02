import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const leftLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
]

const rightLinks = [
  { label: 'Specials', href: '#specials' },
  { label: 'Visit', href: '#visit' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  const allLinks = [...leftLinks, ...rightLinks]

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '16px 48px' : '28px 48px',
          background: scrolled ? 'rgba(0, 0, 0, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'padding 0.5s ease, background 0.5s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '60px',
          borderBottom: scrolled ? '1px solid rgba(183, 140, 87, 0.2)' : '1px solid transparent',
        }}
      >
        {/* Left links */}
        <div style={{ display: 'flex', gap: '40px' }} className="nav-desktop">
          {leftLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="nav-link"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--white)',
                position: 'relative',
                padding: '4px 0',
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Center logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img
            src="/logo.png"
            alt="Grill One Eleven"
            style={{
              height: scrolled ? '38px' : '50px',
              transition: 'height 0.5s ease',
              filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.3))',
            }}
          />
        </a>

        {/* Right links */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="nav-desktop">
          {rightLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="nav-link"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--white)',
                position: 'relative',
                padding: '4px 0',
              }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="tel:6168633111"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="nav-cta"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              border: '1px solid var(--gold)',
              padding: '10px 28px',
              transition: 'background 0.3s ease, color 0.3s ease',
            }}
          >
            Order Now
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-mobile-toggle"
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            zIndex: 1001,
          }}
        >
          <div style={{ width: '26px', height: '1.5px', background: 'var(--white)', transition: 'transform 0.3s ease', transform: mobileOpen ? 'rotate(45deg) translateY(4.75px)' : 'none' }} />
          <div style={{ width: '26px', height: '1.5px', background: 'var(--white)', marginTop: '8px', transition: 'opacity 0.3s ease', opacity: mobileOpen ? 0 : 1 }} />
          <div style={{ width: '26px', height: '1.5px', background: 'var(--white)', marginTop: '8px', transition: 'transform 0.3s ease', transform: mobileOpen ? 'rotate(-45deg) translateY(-4.75px)' : 'none' }} />
        </button>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(0, 0, 0, 0.97)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '28px',
            }}
          >
            {allLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 400,
                  color: 'var(--white)',
                  letterSpacing: '0.02em',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 0.4s var(--ease-out-expo);
        }
        .nav-link:hover::after,
        .nav-link:focus-visible::after { width: 100%; }
        .nav-link:focus-visible { outline: 1px solid var(--gold); outline-offset: 4px; }
        .nav-cta:hover { background: var(--gold) !important; color: var(--black) !important; }
        .nav-cta:focus-visible { outline: 1px solid var(--gold-glow); outline-offset: 4px; }
        .nav-cta:active { transform: scale(0.97); }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  )
}
