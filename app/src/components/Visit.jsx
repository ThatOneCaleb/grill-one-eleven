import { motion } from 'framer-motion'

const hours = [
  { day: 'Sunday', time: '10 am – 8 pm' },
  { day: 'Monday', time: '11 am – 9 pm' },
  { day: 'Tuesday', time: '11 am – 9 pm' },
  { day: 'Wednesday', time: '11 am – 9 pm' },
  { day: 'Thursday', time: '11 am – 9 pm' },
  { day: 'Friday', time: '11 am – 10 pm' },
  { day: 'Saturday', time: '11 am – 10 pm' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function Visit() {
  return (
    <section
      style={{
        background: 'var(--off-white)',
        padding: 'clamp(60px, 8vw, 100px) 0 clamp(100px, 14vw, 200px)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
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
            Visit Us
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--black)',
          }}>
            find grill one eleven
          </h2>
        </motion.div>

        <div id="visit" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="visit-grid">
          {/* Hours */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p variants={fadeUp} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '24px',
            }}>
              Hours
            </motion.p>

            {hours.map((h, i) => (
              <motion.div
                key={h.day}
                variants={fadeUp}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '14px 0',
                  borderBottom: i < hours.length - 1 ? '1px solid rgba(183, 140, 87, 0.12)' : 'none',
                }}
              >
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 400, color: 'var(--gray)' }}>
                  {h.day}
                </span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 500, color: 'var(--black)' }}>
                  {h.time}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact & Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '24px',
            }}>
              Contact
            </p>

            <a
              href="tel:6168633111"
              className="visit-link"
              style={{
                display: 'block',
                fontFamily: 'var(--font-display)',
                fontSize: '1.8rem',
                fontWeight: 400,
                color: 'var(--black)',
                marginBottom: '12px',
                transition: 'color 0.3s ease',
              }}
            >
              (616) 863-3111
            </a>

            <a
              href="https://www.google.com/maps/search/111+Courtland+St+Rockford+MI"
              target="_blank"
              rel="noopener noreferrer"
              className="visit-link"
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 400,
                color: 'var(--gray)',
                marginBottom: '40px',
                transition: 'color 0.3s ease',
              }}
            >
              111 Courtland St, Rockford, MI →
            </a>

            {/* Map */}
            <div style={{
              overflow: 'hidden',
              height: '280px',
              border: '1px solid rgba(183, 140, 87, 0.15)',
            }}>
              <iframe
                title="Grill One Eleven Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.8!2d-85.56!3d43.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA3JzEyLjAiTiA4NcKwMzMnMzYuMCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.3)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .visit-link:hover { color: var(--gold) !important; }
        .visit-link:focus-visible { outline: 1px solid var(--gold); outline-offset: 4px; }
        @media (max-width: 768px) {
          .visit-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
