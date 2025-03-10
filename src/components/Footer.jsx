import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
const Footer = () => {

  return (
    <div className="pt-16 text-center">
      <h1 className="text-center text-2xl font-[15px]">Thank You For Visiting</h1>
      <div className="flex items-center justify-center pt-5 gap-4">
        <a href="https://www.facebook.com/ijack.rifat"> <FaFacebookSquare /></a>
        <a href="https://github.com/Rifat654"><FaGithub /></a>
        <a href="https://mail.google.com/mail/u/0/#inbox"><GrLinkedin /></a>
      </div>
      <p className="text-sm text-slate-400">Copy right by:2025</p>
    </div>
  )
}

export default Footer
