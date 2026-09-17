import Header from './components/Header'
import Hero from './components/Hero'
import Treatments from './components/Treatments'
import About from './components/About'
import Specialists from './components/Specialists'
import Testimonials from './components/Testimonials'
import Appointment from './components/Appointment'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Treatments />
        <About />
        <Specialists />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
