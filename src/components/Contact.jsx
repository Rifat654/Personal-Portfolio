import { useState } from "react";
import Swal from 'sweetalert2'
const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5d705292-a25d-437b-a237-481802e55ace");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        Swal.fire({
            title: "Success!",
            text: "You clicked in mail",
            icon: "success"
          });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <section id="contact" className="py-10 flex items-center justify-center">
        <form onSubmit={onSubmit} className=" rounded-xl w-full mx-5 sm:mx-0 sm:w-[370px] h-[300px] flex flex-col items-center justify-center border border-gray-700 shadow-md shadow-purple-800" >
            <h1 className="text-3xl py-3">Login</h1>
            <div className="flex flex-col gap-3 w-full">
               <input type="text" name="name" required placeholder="Full Name"className="border  w-[80%] container mx-auto  p-2 md:p-1 rounded-3xl" /> 
               <input type="email" name="email" required id="" placeholder="Email"className="border w-[80%] container mx-auto  p-2 md:p-1 rounded-3xl"/>
               <div className="text-center">
               <input type="submit" value="Submit" className="border border-slate-300 py-1 px-10 rounded-2xl cursor-pointer hover:shadow-md duration-300 hover:border-green-700 hover:shadow-purple-700" />
               </div>
            </div>
        </form>
        <span>{result}</span>
    </section>
  )
}

export default Contact
