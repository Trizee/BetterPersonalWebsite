import { motion } from "framer-motion"
import PDFViewer from "./ResumeDisplay"

export default function Resume(){
    return(
        <>
        <motion.div 
                className=" w-full justify-center flex px-4 md:px-0"
                initial={{y: -90, opacity:0}}
                animate={{y: 0, opacity:1}}
                exit={{x: window.innerWidth, opacity:1, transition:{duration:0.4}}}
                >
                <div className="flex w-full md:w-[30rem] items-center text-black dark:text-white">
                    <p >Resume</p>
                </div>
        </motion.div>

        <motion.div 
            className=" w-full justify-center flex px-4 md:mx-0"
            initial={{y: 90, opacity:0}}
            animate={{y: 0, opacity:1}}
            exit={{x: window.innerWidth, opacity:1, transition:{duration:0.4}}}
            >
                <div className="w-full md:w-[30rem] py-6">
                    {/* Content Here */}
                    <PDFViewer />
                </div>
        </motion.div>
    </>
    )
}