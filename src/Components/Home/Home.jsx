import { motion } from "framer-motion"

export default function Home(){
    return(
        <motion.div 
            className=""
            initial={{translateX: -50, opacity:0}}
            animate={{translateX: 0, opacity:1}}
            exit={{translateX: 50, opacity:0}}
            >
                <p className="text-center ">Home</p>
        </motion.div>
    )
}