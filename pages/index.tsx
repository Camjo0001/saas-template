import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import HeroTestimonial from "@/components/HeroTestimonial"
import Features from "@/components/Features"
import Pricing from "@/components/Pricing"
import Testmonials from "@/components/Testmonials"
import CTA from '@/components/CTA'
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-base-100 text-neutral flex flex-col items-center">
      <Navbar />
      <Hero />
      <HeroTestimonial />
      <Features />
      <Pricing />
      <Testmonials />
      <CTA />

      <Footer />
    </main>
  )
}
