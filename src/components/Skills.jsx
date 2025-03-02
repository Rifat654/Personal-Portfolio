import html from "../assets/html-1.jpg"
import css from "../assets/css.jpg"
import js from "../assets/js.jpg"
import react from "../assets/React.js.jpg"
import tailwind from "../assets/tailwind-removebg.jpg"
import figma from "../assets/fig-removebg-preview.jpg"
const Skills = () => {
  const logos = [html,css,js,react,tailwind,figma]
  return (
    <div id="skills">
      <div className="text-center text-4xl py-5">
      <h1>skills</h1>
      </div>
    <div className="px-2 md:px-0">
     <div className="  w-full  md:w-[80%] h-auto md:h-[150px] container mx-auto rounded-3xl flex items-center justify-center  ">
     <div className=" py-5 grid grid-cols-3  md:grid-cols-6 gap-5 md:gap-2">
      {
        logos.map((logo,index) =>(
          <div key={index} className="mx-2">
            <img src={logo} alt="" className="w-14 h-14 object-contain gap-3 cursor-pointer  shadow-purple-500 hover:shadow-lg transition-all duration-300"/>
          </div>
        ))
      }
     </div>
    </div>
   </div>
    </div>
  )
}

export default Skills
