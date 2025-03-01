import img from "../assets/rifat.jpg"
import { FaArrowRight } from "react-icons/fa6";
const Hero = () => {
  return (
   <div id="home" className="w-full  h-full pt-20 flex items-center justify-end ">
    <section className="flex flex-col-reverse md:flex-row justify-between w-3/4 mx-auto items-center">
      {/* left column */}
   <div className="w-full md:w-1/2 mt-4 md:mt container mx-auto md:mx-0 text-center md:text-left text-white">
   <h1 className="text-2xl md:text-3xl lg:text-4xl font-sm">Hi I&lsquo;m Rifat Rahman</h1>
      <p className="text-[10px] md:text-sm  my-4"><span className="font-bold">As</span> a frontend developer i provide professional frontend development services, creating responsive, user-friendly websites with React.js, Tailwind CSS, and modern web technologies.</p>
      <div className="flex items-center justify-center md:justify-start gap-2 cursor-pointer text-center">
      <button className=" text-white cursor-pointer"><span className="text-lg">C</span>ontact Me</button>
      <FaArrowRight  className="hover:border hover:rounded-full hover:border-white transition-all duration-200 hover:p-1 "/>
      </div>
   </div>
         {/* right column */}
     <div className="w-[80%] sm:w-[70%] md:w-[40%] h-[70%] sm:h-[80%]">
     <img src={img} alt=""className="rounded-full  shadow-md shadow-purple-500 hover:shadow-sm " />
     </div>
    </section>
   </div>
  )
}

export default Hero
