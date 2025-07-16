import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Home.css'

gsap.registerPlugin(ScrollTrigger)

function Home() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const floatingRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const floating = floatingRef.current

    // Background color change on scroll
    gsap.to(section, {
      backgroundColor: '#f0f8ff',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    // Floating book animation
    gsap.to(floating, {
      y: -30,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'power1.inOut',
    })

    // Parallax effect
    gsap.to('.parallax-layer', {
      yPercent: -20,
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  return (
    <div ref={sectionRef} className="parallax-container">
      <img
        ref={floatingRef}
        src="/book-floating.png"
        alt="Floating Book"
        className="floating"
      />
      <div className="parallax-layer">
        <h1>Welcome to FoliumVerse 📚</h1>
        <p>Scroll down to explore your personal library universe</p>
      </div>
    </div>
  )
}

export default Home
