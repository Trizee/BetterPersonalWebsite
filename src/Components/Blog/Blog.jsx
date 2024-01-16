import { motion } from "framer-motion"

export default function Blog(){
    return(
        <motion.div 
            className=""
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity:0}}
            >
                <p className="text-center ">Blog</p>
        </motion.div>
    )
}