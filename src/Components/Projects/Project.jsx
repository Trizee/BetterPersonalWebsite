import { motion } from "framer-motion"

export default function Project(){
    return(
        <motion.div 
            className=""
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity:0}}
            >
                <p className="text-center ">Home</p>
        </motion.div>
    )
}