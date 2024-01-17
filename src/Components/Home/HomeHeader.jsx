import { motion } from "framer-motion"
import { useEffect,useState } from "react"

export default function HomeHeader(){

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
        <p className="text-xl text-space dark:text-gray">I'm Tri Hoang, a passionate Software Engineer living in Denver, Colorado. Always striving to improve and learn. </p>
        </>
    )
}