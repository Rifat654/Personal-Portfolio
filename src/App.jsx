import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"

const App = () => {
  return (
    <div className="bg-gradient-to-r from-black to-[#1B0132] text-white">
      <Navbar/>
      <Hero/>
      <Skills/>
    </div>
  )
}

export default App
