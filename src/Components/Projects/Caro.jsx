import { useState } from "react"
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward} from "react-icons/io5";
import { motion } from "framer-motion"

export default function Carousel({slides}) {

    const [curr, setCurr] = useState(0)
  
    const prev = () =>
      setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  
    return (
    <motion.div
    initial={{scale: 0.2, opacity:0, transition:{duration:0.3}}}
    animate={{scale: 1, opacity:1,transition:{duration:0.3}}}
    exit={{scale: 0, opacity:1, transition:{duration:0.3}}}
    className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map(s => {return(<img className="flex w-full md:w-[38rem] items-center" src={s} /> 
          )})}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full opacity-70 bg-gray hover:bg-white dark:hover:bg-lightGray transition-all"
          >
            <IoChevronBack />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full opacity-70 bg-gray hover:bg-white dark:hover:bg-lightGray transition-all"
          >
          <IoChevronForward />
          </button>
        </div>
      </motion.div>
    )
}