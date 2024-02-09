import { About } from "./components/about/About"
import { ComingSoon } from "./components/comingsoon/ComingSoon"
import { Contact } from "./components/contact/Contact"
import { Footer } from "./components/footer/Footer"
import { Hero } from "./components/hero/Hero"
import { Navbar } from "./components/navbar/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ComingSoon />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
