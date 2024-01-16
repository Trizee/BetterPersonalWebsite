import { motion } from "framer-motion"

export default function Resume(){
    return(
        <motion.div 
            className=""
            initial={{translateX: -50, opacity:0}}
            animate={{translateX: 0, opacity:1}}
            exit={{translateX: 50, opacity:0}}
            >
                <p className="text-center ">Resume</p>
        </motion.div>
    )
}