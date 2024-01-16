import { motion } from "framer-motion"

export default function Blog(){
    return(
        <motion.div 
            className=""
            initial={{translateX: -50, opacity:0}}
            animate={{translateX: 0, opacity:1}}
            exit={{translateX: 50, opacity:0}}
            >
                <p className="text-center ">Blog</p>
        </motion.div>
    )
}