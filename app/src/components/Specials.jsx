import { motion } from 'framer-motion'

const specials = [
  { day: 'Sunday', deal: '$5 Miller Lites · $6 Bloody Marys · $7 Mimosas' },
  { day: 'Monday', deal: 'All Day Happy Hour' },
  { day: 'Tuesday', deal: 'Half Off Appetizers' },
  { day: 'Wednesday', deal: '$17 Bistro Steak · Half Off Wine by Glass' },
  { day: 'Thursday', deal: '$7 Classic Cocktails · Ladies Free Dessert' },
  { day: 'Friday', deal: 'Rotating Chef\'s Specials' },
  { day: 'Saturday', deal: '$9 Wine Bottles (Dine In)' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function Specials() {
  return (
    <section
      style={{
        background: 'var(--black)',
        padding: 'clamp(60px, 8vw, 100px) 0 clamp(100px, 14vw, 200px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top gold line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '48px',
        right: '48px',
        height: '1px',
        background: 'rgba(183, 140, 87, 0.2)',
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
            Weekly Specials
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--white)',
          }}>
            something special, every day
          </h2>
        </motion.div>

        {/* Specials list */}
        <div id="specials" />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {specials.map((s, i) => (
            <motion.div
              key={s.day}
              variants={item}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                padding: '20px 0',
                borderBottom: i < specials.length - 1 ? '1px solid rgba(183, 140, 87, 0.12)' : 'none',
                gap: '24px',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 400,
                fontStyle: 'italic',
                color: 'var(--gold)',
                flexShrink: 0,
                minWidth: '140px',
              }}>
                {s.day}
              </span>
              {/* Dots filler */}
              <span style={{
                flex: 1,
                borderBottom: '1px dotted rgba(183, 140, 87, 0.2)',
                marginBottom: '6px',
              }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: 300,
                color: 'var(--gold-light)',
                textAlign: 'right',
                letterSpacing: '0.02em',
              }}>
                {s.deal}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Happy Hour */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: '72px',
            border: '1px solid rgba(183, 140, 87, 0.2)',
            padding: 'clamp(32px, 4vw, 56px)',
            textAlign: 'center',
          }}
        >
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--gold)',
            marginBottom: '16px',
          }}>
            happy hour
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            fontWeight: 300,
            color: 'var(--gold-light)',
            lineHeight: 1.9,
            maxWidth: '500px',
            margin: '0 auto',
            letterSpacing: '0.02em',
          }}>
            Daily 3–6pm & All Day Monday — $2 off appetizers, house wine & drafts ·
            $3 domestic bottles · $4 sangrias & house wells
          </p>
        </motion.div>
      </div>
    </section>
  )
}
