import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Service from "./components/Service"
 import Skills from "./components/Skills"

const App = () => {
  return (
    <div className=" overflow-hidden w-full h-full bg-gradient-to-r from-black to-[#1B0132] text-white">
      <Navbar/>
      <Hero/>
      <Service/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
