import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span style={{
      position: 'relative',
      margin: '0 6px',
      display: 'inline-block',
    }}>
      <span style={{ opacity: 0.15 }}>{children}</span>
      <motion.span
        style={{
          opacity,
          position: 'absolute',
          inset: 0,
          color: 'var(--gold)',
        }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function TextReveal() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const text = 'Hand-cut steaks, fresh flown-in fish, local farm partnerships, and an award-winning bar — all in the heart of downtown Rockford.'
  const words = text.split(' ')

  // Fade + scale the whole content out near end so the unstick isn't jarring
  const contentOpacity = useTransform(scrollYProgress, [0, 0.1, 0.65, 0.8], [0, 1, 1, 0])
  const contentScale = useTransform(scrollYProgress, [0.65, 0.8], [1, 0.97])
  const contentY = useTransform(scrollYProgress, [0.65, 0.8], [0, -30])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '150vh',
        background: 'var(--black)',
      }}
    >
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* Decorative top line */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '48px',
          right: '48px',
          height: '1px',
          background: 'rgba(183, 140, 87, 0.15)',
        }} />

        <motion.div style={{
          maxWidth: '900px',
          padding: '0 48px',
          textAlign: 'center',
          opacity: contentOpacity,
          scale: contentScale,
          y: contentY,
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '32px',
          }}>
            Our Promise
          </p>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.5,
            color: 'var(--gold)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {words.map((word, i) => {
              // Reveal all words between 15%-50% scroll progress
              const start = (i / words.length) * 0.35 + 0.15
              const end = ((i + 1) / words.length) * 0.35 + 0.15
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              )
            })}
          </p>
        </motion.div>

        {/* Decorative bottom line */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: '48px',
          right: '48px',
          height: '1px',
          background: 'rgba(183, 140, 87, 0.15)',
        }} />
      </div>
    </div>
  )
}
