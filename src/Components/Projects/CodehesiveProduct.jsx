import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { IoChevronBack } from "react-icons/io5";
import Carousel from "./Caro";

import ProjectLinks from "./ProjectLinks";



export default function CodePage(){

    let nav = useNavigate()

    let slides = [
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
      ];


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
                    <p className="text-2xl pt-6 font-semibold">Codehesive</p>
                    <p className="text-gray py-1 text-xl">Collaberative Coding Tool</p>
                </div>
        </motion.div>

        <div className=" w-full justify-center flex px-4 md:px-0 py-6">
            <div className="flex w-full md:w-[44rem] items-center">
                <Carousel slides={slides} />
            </div>
        </div>

        <motion.div 
            className=" w-full justify-center flex px-4 md:mx-0"
            initial={{y: 90, opacity:0}}
            animate={{y: 0, opacity:1}}
            exit={{x: window.innerWidth, opacity:1, transition:{duration:0.4}}}
            >
                <div className="w-full md:w-[30rem] py-6 text-black dark:text-white">
                    {/* Content Here */}
                    <ProjectLinks you={"https://www.youtube.com/watch?v=jCIInz3PokY"} git={"https://github.com/Trizee/Tri-Phase-5"}/>
                </div>
        </motion.div>
        </>
    )
}