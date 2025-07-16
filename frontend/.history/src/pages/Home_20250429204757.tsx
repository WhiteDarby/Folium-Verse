import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Home() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const floatingRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const floating = floatingRef.current

    gsap.to(section, {
      backgroundColor: '#f0f8ff',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    gsap.to(floating, {
      y: -30,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'power1.inOut',
    })

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
    <div
      ref={sectionRef}
      className="min-h-[200vh] relative overflow-hidden px-6 py-24 transition-colors duration-500"
    >
      <img
        ref={floatingRef}
        src="/book-floating.png"
        alt="Floating Book"
        className="w-24 absolute top-12 right-12 z-20"
      />
      <div className="parallax-layer relative z-10 text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to FoliumVerse 📚</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Scroll down to explore your personal library universe
        </p>
      </div>
    </div>
  )
}

export default Home