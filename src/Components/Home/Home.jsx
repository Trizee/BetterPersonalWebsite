import { motion } from "framer-motion"

export default function Home(){
    return(
        <motion.div 
            className=""
            initial={{width: "90%", opacity:0}}
            animate={{width: "100%", opacity:1}}
            exit={{x: window.innerWidth, opacity:1, transition:{duration:0.2}}}
            >
                <p className="text-center ">Home</p>
        </motion.div>
    )
}