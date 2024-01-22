import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { IoChevronBack } from "react-icons/io5";
import ProjectLinks from "./ProjectLinks";
import ProjectStack from "./ProjectStack";

import { IoChevronForward } from "react-icons/io5";

import code from "../Home/codehesive.svg"
import jump from "../Home/jump.png"

export default function EcomPage(){

    let nav = useNavigate()

    let stack = [
        "React",
        "BootStrapCSS",
        "MaterialUI",
        "JSON", 
        "React-Router",
        "Vite"
    ]

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
                    <p className="text-2xl pt-6 font-semibold">TriEmulation</p>
                    <p className="text-gray py-1 text-xl">E-commerce Storefront</p>
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
                    <ProjectLinks git={"https://github.com/Trizee/phase-2-project"} you={'https://www.youtube.com/watch?v=tneO4KbpzTM'}/>
                    <p className="w-full h-[1px] bg-lightGray mt-10 mb-2"></p>

                    <ProjectStack stack={stack}/>
                    <p className="text-xl ml-1 py-2 font-semibold">More Projects</p>
                    <div className="w-full h-[4.5rem] rounded-lg hover:bg-lightGray transition-all duration-300 cursor-pointer mb-1 flex items-center gap-4 group"
                    onClick={()=>nav('/projects/ecommerce')}
                    >
                        <img src={code} className="h-14 w-14 rounded-full p-2 bg-darkGray ml-1" alt="Codehesive Icon" />
                        <div>
                            <p className="group-hover:text-white">Codehesive</p>
                            <p className="text-gray">Coding Tool</p>
                        </div>
                        <p className="ml-auto pr-2 opacity-0 group-hover:opacity-80 transition-all"><IoChevronForward size={"2rem"}/></p>
                    </div>
                    <div className="w-full h-[4.5rem] rounded-lg hover:bg-lightGray transition-all duration-300 cursor-pointer mb-1 flex items-center gap-4 group"
                    onClick={()=>nav('/projects/game')}>
                        <img src={jump} className="h-14 w-14 rounded-full p-2 bg-darkGray ml-1" alt="Game Icon" />
                        <div>
                            <p className="group-hover:text-white">Retro Game</p>
                            <p className="text-gray">Python CLI</p>
                        </div>
                        <p className="ml-auto pr-2 opacity-0 group-hover:opacity-80 transition-all"><IoChevronForward size={"2rem"}/></p>
                    </div>
                </div>
        </motion.div>
        </>
    )
}