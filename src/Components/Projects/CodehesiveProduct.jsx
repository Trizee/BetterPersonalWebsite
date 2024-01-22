import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { IoChevronBack } from "react-icons/io5";
import Carousel from "./Caro";

import { IoChevronForward } from "react-icons/io5";

import ProjectLinks from "./ProjectLinks";

import code from "../Home/codehesive.svg"
import game from "../Home/game.svg"
import jump from "../Home/jump.png"


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
                    <p className="w-full h-[1px] bg-lightGray mt-10 mb-2 opacity-70"></p>
                    
                    
                    
                    <p className="text-xl ml-1 py-2 font-semibold">More Projects</p>
                    <div className="w-full h-[4.5rem] rounded-lg hover:bg-lightGray transition-all duration-300 cursor-pointer mb-1 flex items-center gap-4 group"
                    onClick={()=>nav('/projects/ecommerce')}
                    >
                        <img src={game} className="h-14 w-14 rounded-full p-2 bg-darkGray ml-1" alt="Codehesive Icon" />
                        <div>
                            <p className="group-hover:text-white">TriEmulation</p>
                            <p className="text-gray">ECommerce Storefront</p>
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