import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProblemLock from '@/components/ProblemLock'
import Solution from '@/components/Solution'
import Testimonials from '@/components/Testimonials'
import TrustProof from '@/components/TrustProof'
import ClientWins from '@/components/ClientWins'
import WhoThisIsFor from '@/components/WhoThisIsFor'
import FinalClose from '@/components/FinalClose'
import SplashScreen from '@/components/SplashScreen'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SplashScreen />
      <Navbar />
      <Hero />
      <ProblemLock />
      <Solution />
      <Testimonials />
      <TrustProof />
      <ClientWins />
      <WhoThisIsFor />
      <FinalClose />
    </main>
  )
}
