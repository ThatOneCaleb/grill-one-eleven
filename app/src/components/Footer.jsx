import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--black)',
      padding: '80px 48px 40px',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '48px',
            paddingBottom: '60px',
            borderBottom: '1px solid rgba(183, 140, 87, 0.15)',
          }}
        >
          {/* Left — Logo & tagline */}
          <div style={{ maxWidth: '260px' }}>
            <img
              src="/logo.png"
              alt="Grill One Eleven"
              style={{
                height: '44px',
                marginBottom: '20px',
                filter: 'brightness(1.5)',
              }}
            />
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: 300,
              color: 'var(--gold)',
              lineHeight: 1.8,
              letterSpacing: '0.02em',
            }}>
              Rockford's premier classy casual dining in the heart of downtown.
            </p>
          </div>

          {/* Center — Links */}
          <div style={{ display: 'flex', gap: '40px' }}>
            {['Menu', 'About', 'Specials', 'Visit'].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="footer-link"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  transition: 'color 0.3s ease',
                }}
              >
                {l}
              </a>
            ))}
          </div>

          {/* Right — Contact + Social */}
          <div style={{ textAlign: 'right' }}>
            <a
              href="tel:6168633111"
              className="footer-link"
              style={{
                display: 'block',
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 400,
                color: 'var(--gold)',
                marginBottom: '12px',
                transition: 'color 0.3s ease',
              }}
            >
              (616) 863-3111
            </a>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: 300,
              color: 'var(--gold)',
              marginBottom: '20px',
              letterSpacing: '0.02em',
            }}>
              111 Courtland St, Rockford, MI
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <a
                href="https://facebook.com/grilloneeleven"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon"
                style={{
                  width: '36px',
                  height: '36px',
                  border: '1px solid rgba(183, 140, 87, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold)',
                  transition: 'border-color 0.3s ease, color 0.3s ease',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/Grill_OneEleven"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="social-icon"
                style={{
                  width: '36px',
                  height: '36px',
                  border: '1px solid rgba(183, 140, 87, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold)',
                  transition: 'border-color 0.3s ease, color 0.3s ease',
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div style={{
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: 300,
            color: 'var(--gold)',
            letterSpacing: '0.05em',
          }}>
            &copy; {new Date().getFullYear()} Grill One Eleven
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: 300,
            color: 'var(--gold)',
            letterSpacing: '0.03em',
          }}>
            3% surcharge on credit card transactions. No debit surcharge.
          </p>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--gold) !important; }
        .footer-link:focus-visible { outline: 1px solid var(--gold); outline-offset: 4px; }
        .social-icon:hover { border-color: var(--gold) !important; color: var(--gold) !important; }
        .social-icon:focus-visible { outline: 1px solid var(--gold); outline-offset: 4px; }
      `}</style>
    </footer>
  )
}
