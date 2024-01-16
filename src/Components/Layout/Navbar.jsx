import { GoHome } from "react-icons/go";
import { PiCursorClick } from "react-icons/pi";
import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import { GoStack } from "react-icons/go";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { AiOutlineFile } from "react-icons/ai";

import { useState } from "react";

import { motion } from "framer-motion";

export default function Navbar(){

    let iconSize = "1.75rem" 

    let icons = [
    {icon:<GoHome size={iconSize}/> , text:"Home"},
    {icon:<PiCursorClick size={iconSize}/> ,text:"Projects"},
    {icon:<PiPencilSimpleLineDuotone size={iconSize}/>,text:"Blog"},
    {icon:<GoStack size={iconSize}/>,text:"Stack"},
    {icon:<PiPaperPlaneTilt size={iconSize}/>,text:"Contact"},
    {icon:<AiOutlineFile size={iconSize}/>,text:"Resume"}]

    const slashMotion = {
        rest: { opacity: 0, ease: "easeOut", duration: 0.2, y: -5 },
        hover: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: "easeOut"
          }
        }
      };

    let displayIcons = icons.map(i => {return(
        <motion.div className="h-6 w-6 md:h-8 md:w-8 flex justify-center p-1 items-center group cursor-pointer" initial="rest" whileHover="hover" animate="rest">
            <motion.p variants={slashMotion}
            className="absolute text-xs -top-6 bg-white rounded-full
            px-2 hidden
            group-hover:block">
                    {i.text}
            </motion.p>
            <p className="text-white rounded-full hover:bg-gray hover:text-black p-2">{i.icon}</p>
        </motion.div>
    )
    })

    

    return(
        <div className="z-50 flex w-full justify-center">
            <div className="flex justify-evenly md:justify-center gap-4 md:gap-8 items-center fixed bottom-4 w-[90%] md:w-[30rem] h-14 bg-darkGray rounded-full px-2">
                {displayIcons}
                <p className="h-[60%] w-[1px] bg-gray"></p>
            </div>
        </div>
    )
}