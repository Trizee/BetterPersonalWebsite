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

    useEffect(() => {

        let currentIndex = 0;

        const interval = setInterval(() => {
            setQuote(quotes[currentIndex]);
            currentIndex = (currentIndex + 1) % quotes.length;
      
            // Check if it has looped through all quotes
            // if (currentIndex === 0) {
            //   // Optionally add additional logic when it completes a loop
            // }
        }, 1000);
        return () => clearInterval(interval);
      }, [quote]);


    return(
        <>
        <p className="text-3xl text-darkGray dark:text-gray py-8 flex">
        I build
        <motion.p
        // initial={{y: 90, opacity:0}}
        animate={{y: 0, opacity:1}}
        exit={{x: window.innerWidth, opacity:1, transition:{duration:0.4}}}
        className="px-2 text-black dark:text-white"
        >
            {quote}
        </motion.p>
        </p>
        <p className="text-xl text-darkGray dark:text-gray">I'm Tri Hoang, a passionate Software Engineer living in Denver, Colorado. Always striving to improve and learn. </p>
        </>
    )
}