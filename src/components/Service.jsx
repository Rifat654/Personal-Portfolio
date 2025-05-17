import { LuEyeClosed } from "react-icons/lu";
import { MdRemoveRedEye } from "react-icons/md";
import { data } from "../Data"
import { useState } from "react";
const Service = () => {

  const [show, setShow] = useState(false)

  const click = (id) => {
    setShow(id)

  }
  return (
    <div id="services" className="py-16 ">
      <h2 className="text-3xl font-bold text-center mb-6"> Services</h2>
      <div className="w-full px-4 sm:px-0 sm:w-[70%] container flex flex-col items-center justify-center mx-auto gap-6">
        {
          data.map((item) => {
            return (
              <div onClick={() => click(item.id)} key={item.id} className="w-full sm:w-[600px] p-5 rounded-lg  border">
                <div className="flex items-center justify-between ">
                  <h2>{item.question}</h2>
                  <span>{show === item.id ? <MdRemoveRedEye /> : <LuEyeClosed />}</span>
                </div>
                {
                  show === item.id ?
                    <p>{item.answer}</p> : null
                }

              </div>

            )
          })
        }
      </div>
    </div>
  )
}

export default Service
