import { HiMiniBars2 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { BiBoltCircle } from "react-icons/bi";
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  const[menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("#home")
  const nav = [
    {href: "#home", label: "Home"},
    {href: "#services", label: "Services"},
    {href: "#skills", label: "Skills"},
    {href: "#projects", label: "Projects"},
    {href: "#contact", label: "Contact"},
  ]
 
  return (
    <nav className="fixed top-0 left-0 right-0 text-white  backdrop-blur-md shadow-md p-4 z-50">
      <div className="w-full container mx-auto flex items-center justify-between ">
        {/* logo */}
        <div>
          <h1 className="text-2xl font-bold text-purple-500"><BiBoltCircle />
          </h1>
        </div>

         {/* mobile menu icons */}
         <button onClick={()=> setMenuOpen(!menuOpen)} className="text-2xl  cursor-pointer md:hidden ">
            {
              menuOpen ? <IoCloseOutline/>: <HiMiniBars2/>  
            }
         </button>
        {/* desktop navigation */}
        <div className="hidden md:flex items-center gap-7">
          {
            nav.map((item,index)=>(
              <a key={index} href={item.href} 
              onClick={()=>setActive(item.href) }
              className={`text-sm gap-3 text-white hover:text-orange-700 transition-all duration-300 ${active === item. href ? "text-orange-700" : "text-black"}`}>{item.label}</a>
            ))
          }
        </div>
        {/* get btn */}
    
     <div>
     
     <FaArrowRight className="hover:p-1 cursor-pointer"/>  
     </div>
      </div>
       {/* mobile menu icons */}
       {
         menuOpen &&(
          <div className="md:hidden ">
            <div>
              {
                nav.map((item,index)=>(
                  <a key={index}
                  onClick={()=>{
                    setActive(item.href)
                    setMenuOpen(false)
                  }}
                  className={`block text-center py-2 hover:text-orange-600 transition-all duration-300 ${active === item. href ? "text-orange-600 font-bold" : "text-white"} `}  href={item.href} >{item.label}</a>
                ))  
              }
               
            </div>
          </div>
         )
       }
    </nav>
  )
}
export default Navbar
