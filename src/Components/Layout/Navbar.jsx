import { GoHome } from "react-icons/go";
import { PiCursorClick } from "react-icons/pi";
import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { AiOutlineFile } from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";
import { LuShrink } from "react-icons/lu";

import { useState } from "react";

import { motion } from "framer-motion";

export default function Navbar({handleClick}){

    let iconSize = "1.5rem" 

    let icons = [
    {icon:<GoHome size={iconSize}/> , text:"Home"},
    {icon:<PiCursorClick size={iconSize}/> ,text:"Projects"},
    {icon:<PiPencilSimpleLineDuotone size={iconSize}/>,text:"Blog"},
    {icon:<PiPaperPlaneTilt size={iconSize}/>,text:"Contact"},
    {icon:<AiOutlineFile size={iconSize}/>,text:"Resume"}]

    const slashMotion = {
        rest: { opacity: 0, ease: "easeIn",type: "tween", duration: 0.1, y: -5,
        transitionEnd: {
            display: "none",
          },},
        hover: {
          opacity: 1,
          y: 0,
          display: "flex",
          transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeIn",
          },
        }
      };

    let displayIcons = icons.map(i => {return(
        <motion.div className="h-4 w-4 md:h-8 md:w-8 flex justify-center p-1 items-center cursor-pointer" initial="rest" whileHover="hover" animate="rest" key={i.text}>
            <motion.p variants={slashMotion}
            className="absolute text-xs -top-6 bg-white rounded-full px-2">
                    {i.text}
            </motion.p>
            <motion.p className="text-white rounded-full hover:bg-white hover:text-black p-2">{i.icon}</motion.p>
        </motion.div>
    )
    })

    function darkModeBtn(){
        return(
        <motion.div className="h-4 w-4 md:h-8 md:w-8 flex justify-center p-1 items-center cursor-pointer" initial="rest" whileHover="hover" animate="rest">
            <motion.p variants={slashMotion}
            className="absolute text-xs -top-6 bg-white rounded-full px-2">
                    Dark
            </motion.p>
            <motion.p className="text-white rounded-full hover:bg-white hover:text-black p-2"><MdOutlineDarkMode size={iconSize} onClick={()=>handleClick()}/></motion.p>
        </motion.div>
        )
    }

    function hideBtn(){
        return(
        <motion.div className="h-4 w-4 md:h-8 md:w-8 flex justify-center p-1 items-center cursor-pointer" initial="rest" whileHover="hover" animate="rest">
            <motion.p variants={slashMotion}
            className="absolute text-xs -top-6 bg-white rounded-full px-2">
                    Hide
            </motion.p>
            <motion.p className="text-white rounded-full hover:bg-white hover:text-black p-2"><LuShrink size={iconSize}/></motion.p>
        </motion.div>
        )
    }

    

    return(
        <div className="z-50 flex w-full justify-center">
            <div className="flex justify-evenly gap-2 md:gap-6 items-center fixed bottom-2 md:bottom-4 w-[95%] md:w-[28rem]  h-12 md:h-14 bg-darkGray rounded-full px-2 shadow-md">
                {displayIcons}
                <p className="h-[50%] w-[1px] bg-gray"></p>
                {darkModeBtn()}
                {hideBtn()}
            </div>
        </div>
    )
}