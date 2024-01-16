import { motion } from "framer-motion"

export default function Project(){
    return(
        <motion.div 
            className=""
            initial={{translateX: -50, opacity:0}}
            animate={{translateX: 0, opacity:1}}
            exit={{translateX: 50, opacity:0}}
            >
                <p className="text-center ">Projects</p>
        </motion.div>
    )
}