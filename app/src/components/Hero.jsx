import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--black)',
      }}
    >
      {/* Background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/photos/interior1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.4,
      }} />

      {/* Gold border frame */}
      <div style={{
        position: 'absolute',
        top: '40px',
        left: '40px',
        right: '40px',
        bottom: '40px',
        border: '1px solid rgba(183, 140, 87, 0.25)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        padding: '0 24px',
        maxWidth: '800px',
      }}>
        {/* Small decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '60px',
            height: '1px',
            background: 'var(--gold)',
            margin: '0 auto 32px',
          }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '28px',
          }}
        >
          Smart &bull; Classy &bull; Casual &bull; Fresh
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            fontWeight: 400,
            color: 'var(--white)',
            lineHeight: 1,
            marginBottom: '20px',
            fontStyle: 'italic',
          }}
        >
          fabulous food,
          <br />
          comfort & style
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            fontWeight: 300,
            color: 'var(--white)',
            maxWidth: '450px',
            margin: '0 auto 44px',
            lineHeight: 1.9,
            letterSpacing: '0.03em',
          }}
        >
          Rockford's premier dining experience at
          One Eleven Courtland, downtown.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#menu"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hero-cta"
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--white)',
            border: '1px solid var(--gold)',
            padding: '16px 48px',
            transition: 'background 0.4s ease, color 0.4s ease',
          }}
        >
          See Menu
        </motion.a>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '56px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(180deg, var(--gold), transparent)',
          }}
        />
      </motion.div>

      <style>{`
        .hero-cta:hover {
          background: var(--gold) !important;
          color: var(--black) !important;
        }
        .hero-cta:focus-visible {
          outline: 1px solid var(--gold-glow);
          outline-offset: 4px;
        }
      `}</style>
    </section>
  )
}
