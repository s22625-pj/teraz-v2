import B2B from '../components/B2B'
import Baner from '../components/Baner'
import FAQ from '../components/FAQ'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Plans from '../components/Plans'
import Problem from '../components/Problem'
import Solution from '../components/Solution'
import Target from '../components/Target'
import Footer from '../components/Footer'


const Landing = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center justify-center box-border bg-[#FFFFFF] mq450:box-border">
    <Header />
    <Hero />
    <Problem />
    <Solution />
    <Plans />
    <Target />
    <B2B />
    <Baner />
    <FAQ />
    <Footer />
    </div>
  )
}

export default Landing
