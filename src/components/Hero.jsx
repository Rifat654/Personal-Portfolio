import img from "../assets/rifat.jpg"
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import resume from "../assets/resume.pdf"

const Hero = () => {
  return (
    <div id="home" className="w-full  h-full pt-20 flex items-center justify-end ">
      <section className="flex flex-col-reverse md:flex-row justify-between w-3/4 mx-auto items-center">
        {/* left column */}
        <div className="w-full md:w-1/2 mt-4 md:mt container mx-auto md:mx-0 text-center md:text-left text-white">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-sm">Hi I&lsquo;m Rifat Rahman</h1>
          <h1 className="text-center md:text-start sm:text-2xl pt-1 text-slate-200">Frontend WebDeveloper</h1>
          <p className="text-[10px] md:text-sm  my-4 text-slate-300"><span className="font-bold">As</span> a frontend developer i provide professional frontend development services, creating responsive, user-friendly websites with React.js, Tailwind CSS, and modern web technologies.</p>
          <div className="flex items-center justify-center md:justify-start gap-2 cursor-pointer text-center">
            <a className="hover:text-white cursor-pointer text-slate-300 " href={resume} download="resume"><span className="text-lg ">Download</span> CV </a>
            <FaArrowRight className="hover:border hover:rounded-full hover:border-white transition-all duration-200 hover:p-1 " />
          </div>
          <div className="social flex items-center gap-4 pt-5 cursor-pointer justify-center sm:justify-start sm:text-xl">
            <a href="https://www.facebook.com/ijack.rifat"> <FaFacebookSquare /></a>
            <a href="https://github.com/Rifat654"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/rifat654/"><GrLinkedin /></a>
          </div>
        </div>
        {/* right column */}
        <div className="w-[80%] sm:w-[70%] md:w-[40%] h-[70%] sm:h-[80%]">
          <img src={img} alt="" className="rounded-full  shadow-md shadow-purple-500 hover:shadow-sm " />
        </div>
      </section>
    </div>
  )
}

export default Hero
