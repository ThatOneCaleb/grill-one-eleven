import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

const foodImages = [
  { src: '/photos/hero.jpg', alt: 'Sesame crusted tuna' },
  { src: '/photos/dish2.jpg', alt: 'Filet mignon with vegetables' },
  { src: '/photos/bar.jpg', alt: 'Glazed salmon with fruit compote' },
  { src: '/photos/dish1.jpg', alt: 'Fresh salad' },
  { src: '/photos/food1.jpg', alt: 'Carrot cake dessert' },
  { src: '/photos/dish3.jpg', alt: 'Artisan hummus with grilled bread & pita' },
  { src: '/photos/food2.jpg', alt: 'Pan-crusted fish with shrimp & scallions' },
  { src: '/photos/food3.jpg', alt: 'Bread bowl soup with rosemary' },
  { src: '/photos/food4.jpg', alt: 'Chocolate torte with raspberry drizzle' },
  { src: '/photos/food5.jpg', alt: 'Grilled salmon with peach & seasonal vegetables' },
]

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span style={{
      position: 'relative',
      margin: '0 5px',
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

export default function FoodGallery() {
  const [currentImg, setCurrentImg] = useState(0)
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const contentOpacity = useTransform(scrollYProgress, [0, 0.12, 0.65, 0.82], [0, 1, 1, 0])
  const contentScale = useTransform(scrollYProgress, [0.65, 0.82], [1, 0.97])

  const text = 'Hand-cut steaks, fresh flown-in fish, local farm partnerships, and an award-winning bar — all in the heart of downtown Rockford.'
  const words = text.split(' ')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % foodImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        height: '150vh',
        background: 'var(--black)',
      }}
    >
      {/* Top border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '48px',
        right: '48px',
        height: '1px',
        background: 'rgba(183, 140, 87, 0.15)',
      }} />

      {/* Sticky viewport */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <motion.div
          style={{
            opacity: contentOpacity,
            scale: contentScale,
            width: '100%',
            maxWidth: '1200px',
            padding: '0 48px',
          }}
          className="gallery-layout"
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
          }} className="gallery-split">
            {/* Left: scroll text reveal */}
            <div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '24px',
              }}>
                Our Promise
              </p>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 2.8vw, 2.4rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.6,
                color: 'var(--gold)',
                display: 'flex',
                flexWrap: 'wrap',
              }}>
                {words.map((word, i) => {
                  const start = (i / words.length) * 0.35 + 0.15
                  const end = ((i + 1) / words.length) * 0.35 + 0.15
                  return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                      {word}
                    </Word>
                  )
                })}
              </p>
            </div>

            {/* Right: single large rotating image */}
            <div style={{
              position: 'relative',
              border: '1px solid rgba(183, 140, 87, 0.25)',
              padding: '10px',
            }} className="gallery-image">
              <AnimatePresence mode="wait">
                <motion.div
                  key={foodImages[currentImg].src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <img
                    src={foodImages[currentImg].src}
                    alt={foodImages[currentImg].alt}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-split {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .gallery-image {
            aspect-ratio: 3 / 2 !important;
          }
        }
      `}</style>
    </section>
  )
}
