import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { IoChevronBack } from "react-icons/io5";

export default function EcomPage(){

    let nav = useNavigate()

    return(
        <>
        <motion.div 
                className=" w-full justify-center flex px-4 md:px-0"
                initial={{y: -90, opacity:0}}
                animate={{y: 0, opacity:1}}
                exit={{x: window.innerWidth, opacity:1, transition:{duration:0.4}}}
                >
                <div className="w-full md:w-[30rem] items-center  " >
                    <p className="pb-6 flex items-center gap-4 cursor-pointer" onClick={()=>nav("/projects")}>
                    <p className="rounded-full bg-gray dark:bg-darkGray p-1">
                    <IoChevronBack /></p>Game</p>
                    <p className="w-20  border-[1px] p-1 border-gray text-center rounded-lg mt-6 opacity-70 text-sm">Website</p>
                </div>
        </motion.div>

        <div className=" w-full justify-center flex px-4 md:px-0 py-6">
        <motion.img 
                className="flex w-full md:w-[38rem] items-center"
                initial={{scale: 0.2, opacity:0, transition:{duration:0.2}}}
                animate={{scale: 1, opacity:1,transition:{duration:0.2}}}
                exit={{scale: 0, opacity:1, transition:{duration:0.2}}}
                src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww"
        />
        </div>

        <motion.div 
            className=" w-full justify-center flex px-4 md:mx-0"
            initial={{y: 90, opacity:0}}
            animate={{y: 0, opacity:1}}
            exit={{x: window.innerWidth, opacity:1, transition:{duration:0.4}}}
            >
                <div className="w-full md:w-[30rem] py-6 text-black dark:text-white">
                    {/* Content Here */}
                </div>
        </motion.div>
        </>
    )
}