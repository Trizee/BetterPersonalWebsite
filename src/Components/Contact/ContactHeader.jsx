import { motion } from "framer-motion"
import { useEffect,useState } from "react"
import { AiOutlineCalendar } from "react-icons/ai";

export default function ContactHeader(){


    let quotes = [
        "hey.",
        "hello.",
        "hola.",
    ]

    let [quote,setQuote] = useState(quotes[0])
    let [index,setIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setQuote(quotes[index])
            if(index === 2){
                setIndex(0)
            } else {
                setIndex(index + 1)
            }
        }, 2500);
        return () => clearInterval(interval);
      }, [index]);


    return(
        <>
        <p className="text-3xl text-darkGray dark:text-gray py-6 flex">
        Say
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
        <p className="text-xl text-space dark:text-gray">Looking to start a project, connect or just chat? Reach Out. </p>

        <div className="py-6 flex items-center gap-4">
                <p className="h-2 w-2 bg-green rounded-full animate-pulse"></p>
                <p className="text-sm text-space dark:text-gray">Available for new opportunities</p>
        </div>

        <div className="py-2 pb-6">
            <a target="_blank" href="https://calendly.com/trihoang09">
            <div className="h-9 w-40  rounded-lg bg-darkGray flex items-center justify-evenly cursor-pointer text-white hover:bg-lightGray transition-all">
                <AiOutlineCalendar size={"1.12rem"}/>
                <p>Book a Call</p>
            </div>
            </a>
        </div>

        <p className="w-full h-[1px] bg-lightGray mt-10 mb-2"></p>
           
        </>
    )
}