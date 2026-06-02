import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function About() {
  return (
    <section
      style={{
        background: 'var(--white)',
        padding: 'clamp(60px, 8vw, 100px) 0 clamp(100px, 14vw, 200px)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <div id="about" />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Image side */}
          <motion.div variants={fadeUp} style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              aspectRatio: '4 / 5',
            }}>
              <img
                src="/photos/interior-new.jpg"
                alt="Grill One Eleven interior"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Gold corner accents */}
            <div style={{
              position: 'absolute',
              top: '-12px',
              left: '-12px',
              width: '60px',
              height: '60px',
              borderTop: '1px solid var(--gold)',
              borderLeft: '1px solid var(--gold)',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-12px',
              right: '-12px',
              width: '60px',
              height: '60px',
              borderBottom: '1px solid var(--gold)',
              borderRight: '1px solid var(--gold)',
            }} />
          </motion.div>

          {/* Text side */}
          <div>
            <motion.div
              variants={fadeUp}
              style={{
                width: '40px',
                height: '1px',
                background: 'var(--gold)',
                marginBottom: '28px',
              }}
            />

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '20px',
              }}
            >
              Our Story
            </motion.p>

            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: 'var(--black)',
                marginBottom: '32px',
              }}
            >
              a Rockford tradition
            </motion.h2>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 300,
                color: 'var(--gray)',
                lineHeight: 2,
                marginBottom: '20px',
                letterSpacing: '0.02em',
              }}
            >
              Grill One Eleven features a full bar with an extensive wine list.
              Guests are entertained on every level — from the second floor
              outdoor balcony, next to the fireplace, or on the main floor at
              our romantic oval shaped mahogany bar.
            </motion.p>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 300,
                color: 'var(--gray)',
                lineHeight: 2,
                marginBottom: '40px',
                letterSpacing: '0.02em',
              }}
            >
              Our highly skilled Chefs work with local farms to prepare seasonal
              weekend dishes. Steaks are hand selected and cut in house, and
              fresh fish is flown in to serve up some of the finest dishes
              in West Michigan.
            </motion.p>

            {/* Gold separator */}
            <motion.div
              variants={fadeUp}
              style={{
                width: '100%',
                height: '1px',
                background: 'var(--gold)',
                opacity: 0.25,
                marginBottom: '32px',
              }}
            />

            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', gap: '48px' }}
              className="about-stats"
            >
              {[
                { top: 'Hand-Cut', bottom: 'Steaks' },
                { top: 'Local', bottom: 'Farm Partners' },
                { top: 'Fresh', bottom: 'Flown-In Fish' },
              ].map((s) => (
                <div key={s.bottom}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.3rem',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    color: 'var(--gold)',
                    marginBottom: '4px',
                  }}>{s.top}</div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--gray)',
                  }}>{s.bottom}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .about-stats { gap: 32px !important; }
        }
      `}</style>
    </section>
  )
}
