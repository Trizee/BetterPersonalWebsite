import { motion } from "framer-motion"
import { useEffect,useState } from "react"
import { TfiEmail } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

import { AiOutlineFile } from "react-icons/ai";

export default function HomeHeader(){

    let nav = useNavigate()

    let quotes = [
        "websites.",
        "apps.",
        "APIs.",
        "experiences."
    ]

    let [quote,setQuote] = useState(quotes[0])
    let [index,setIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setQuote(quotes[index])
            if(index === 3){
                setIndex(0)
            } else {
                setIndex(index + 1)
            }
        }, 2500);
        return () => clearInterval(interval);
      }, [index]);

      
    //   <div className="my-6 h-9 w-40 rounded-lg bg-darkGray flex items-center justify-evenly cursor-pointer text-white hover:bg-lightGray transition-all">
    //                         <AiOutlineFile size={"1.12rem"}/>
    //                         <p>View Resume</p>
    //                     </div>


    return(
        <>
        <p className="text-3xl text-darkGray dark:text-gray py-8 flex">
        I build
        <motion.p
        initial={{y: -40, opacity:0, transitionDelay: 0.2}}
        animate={{y: 0, opacity:1}}
        exit={{y: 40, opacity:1, transition:{duration:0.2, delay: 0.2}}}
        className="px-2 text-black dark:text-white"
        key={quote}
        >
            {quote}
        </motion.p>
        </p>
        <p className="text-xl text-space dark:text-gray">I'm Tri Hoang, a Software Engineer living in Denver, Colorado. Always striving to learn and improve. </p>

        <div className="py-6 flex items-center gap-4">
                <p className="h-2 w-2 bg-green rounded-full"></p>
                <p className="text-sm text-space dark:text-gray">Available for new opportunities</p>
        </div>

        <div className="py-2 flex items center justify-between">
            <div className=" h-9 w-40 rounded-lg bg-darkGray flex items-center justify-evenly cursor-pointer text-white hover:bg-lightGray transition-all"
            onClick={()=>nav("/contact")}
            >
                <TfiEmail size={"1.12rem"}/>
                <p>Contact Me</p>
            </div>
            <div className="h-9 w-40 rounded-lg bg-darkGray flex items-center justify-evenly cursor-pointer text-white hover:bg-lightGray transition-all"
            onClick={()=>nav("/resume")}>
                <AiOutlineFile size={"1.12rem"}/>
                <p>View Resume</p>
            </div>
        </div>
           
        </>
    )
}