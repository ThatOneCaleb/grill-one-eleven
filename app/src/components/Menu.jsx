import { motion } from 'framer-motion'

const menuCategories = [
  {
    title: 'Lunch & Dinner',
    description: 'Hand-cut steaks, fresh fish, seasonal dishes.',
    href: 'https://grilloneeleven.com/menuPDFs/lunchdinner.pdf',
    image: '/photos/dish2.jpg',
  },
  {
    title: 'Beverages',
    description: 'Craft cocktails, wine, Michigan brews.',
    href: 'https://grilloneeleven.com/menuPDFs/beverages.pdf',
    image: '/photos/interior1.jpg',
  },
]

const secondaryMenus = [
  { title: "Children's Menu", href: 'https://grilloneeleven.com/menuPDFs/childrens.pdf' },
  { title: 'Large Parties', href: 'https://grilloneeleven.com/menuPDFs/largeparties.pdf' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function Menu() {
  return (
    <section
      style={{
        background: 'var(--white)',
        padding: 'clamp(60px, 8vw, 100px) 0 clamp(100px, 14vw, 200px)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)', margin: '0 auto 28px' }} />
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '20px',
          }}>
            Our Menus
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--black)',
          }}>
            eat & sip
          </h2>
        </motion.div>

        {/* Two large image cards — eat & sip style */}
        <div id="menu" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            marginBottom: '64px',
          }}
          className="menu-grid"
        >
          {menuCategories.map((cat) => (
            <motion.a
              key={cat.title}
              href={cat.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.01, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
              style={{
                display: 'block',
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '4 / 5',
                cursor: 'pointer',
              }}
              className="menu-image-card"
            >
              <img
                src={cat.image}
                alt={cat.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                className="menu-image"
              />
              {/* Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%)',
              }} />
              {/* Gold border frame */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                right: '16px',
                bottom: '16px',
                border: '1px solid rgba(183, 140, 87, 0.3)',
                pointerEvents: 'none',
              }} />
              {/* Text */}
              <div style={{
                position: 'absolute',
                bottom: '40px',
                left: '32px',
                right: '32px',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 3vw, 3rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'var(--white)',
                  marginBottom: '8px',
                }}>
                  {cat.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  fontWeight: 300,
                  color: 'var(--gold-light)',
                  letterSpacing: '0.03em',
                  marginBottom: '20px',
                }}>
                  {cat.description}
                </p>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                }}>
                  View Menu →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Secondary menu links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            flexWrap: 'wrap',
          }}
        >
          {secondaryMenus.map((m) => (
            <a
              key={m.title}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-menu-link"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gray)',
                borderBottom: '1px solid var(--gold)',
                paddingBottom: '4px',
                transition: 'color 0.3s ease',
              }}
            >
              {m.title}
            </a>
          ))}
        </motion.div>

        {/* On tap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ textAlign: 'center', marginTop: '80px' }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.3rem',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--black)',
            marginBottom: '24px',
          }}>
            currently on tap
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
            {[
              'Miller Lite', 'Smithwicks Irish Red Ale', 'Summer Shandy',
              'Founders All Day IPA', 'Stone Hazy IPA', 'Guinness Irish Stout',
            ].map((b) => (
              <span key={b} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: 400,
                color: 'var(--gray)',
                padding: '8px 20px',
                border: '1px solid rgba(183, 140, 87, 0.2)',
              }}>
                {b}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .menu-image-card:hover .menu-image { transform: scale(1.05); }
        .menu-image-card:focus-visible { outline: 1px solid var(--gold); outline-offset: 4px; }
        .secondary-menu-link:hover { color: var(--gold) !important; }
        .secondary-menu-link:focus-visible { outline: 1px solid var(--gold); outline-offset: 4px; }
        @media (max-width: 768px) {
          .menu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
