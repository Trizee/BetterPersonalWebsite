import { GoHome } from "react-icons/go";
import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { AiOutlineFile } from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";
import { LuShrink } from "react-icons/lu";
import { LuExpand } from "react-icons/lu";
import { BsCodeSlash } from "react-icons/bs";
import { GoStack } from "react-icons/go";

import { useState,useEffect } from "react";

import { useNavigate,useLocation } from "react-router-dom";

import { motion } from "framer-motion";

export default function Navbar({handleClick}){

    const [open,setOpen] = useState(true)
    const [page,setPage] = useState(null)

    let location = useLocation()
    let nav = useNavigate()

    useEffect(()=>{
        setPage(location.pathname)
    },[location])

    console.log(page)

    let iconSize = "1.5rem" 

    let icons = [
    {icon:<GoHome size={iconSize}/> , text:"Home", path:"/"},
    {icon:<BsCodeSlash size={iconSize}/> ,text:"Projects", path:"/projects"},
    {icon:<PiPencilSimpleLineDuotone size={iconSize}/>,text:"Blog", path:"/blog"},
    {icon:<GoStack size={iconSize}/>,text:"Stack", path:"/stack"},
    {icon:<PiPaperPlaneTilt size={iconSize}/>,text:"Contact", path:"/contact"},
    {icon:<AiOutlineFile size={iconSize}/>,text:"Resume", path:"/resume"}
    ]
    

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
        <motion.div 
        style={{display: open? "flex" : "none"}}
        className="h-4 w-4 md:h-8 md:w-8 flex justify-center p-1 items-center cursor-pointer" initial="rest" whileHover="hover" animate="rest" key={i.text}>
            <motion.p variants={slashMotion}
            className="absolute text-xs -top-6 bg-white rounded-full px-2 text-black">
                    {i.text}
            </motion.p>
            <motion.p 
            style={{backgroundColor: page === i.path? "#ffffff" : "" , color: page === i.path ? "#000000" : ""}}
            className="text-white rounded-full hover:bg-white hover:text-black p-2" onClick={()=>nav(i.path)}>{i.icon}</motion.p>
        </motion.div>
    )
    })

    function darkModeBtn(){
        return(
        <motion.div 
        style={{display: open? "flex" : "none"}}
        className="h-4 w-4 md:h-8 md:w-8 flex justify-center p-1 items-center cursor-pointer" initial="rest" whileHover="hover" animate="rest">
            <motion.p variants={slashMotion}
            className="absolute text-xs -top-6 bg-white rounded-full px-2 text-black">
                    Dark
            </motion.p>
            <motion.p className="text-white rounded-full hover:bg-white hover:text-black p-2"><MdOutlineDarkMode size={iconSize} onClick={()=>handleClick()}/></motion.p>
        </motion.div>
        )
    }


    function hideBtn(){
        return(
        <motion.div 
        className="h-4 w-4 md:h-8 md:w-8 flex justify-center p-1 items-center cursor-pointer" initial="rest" whileHover="hover" animate="rest">
            <motion.p variants={slashMotion}
            className="absolute text-xs -top-6 bg-white rounded-full px-2 text-black">
                    {open ? "Hide" : "Expand"}
            </motion.p>
            <motion.p
            initial={{ rotate: 0 }}
            animate={{ rotate: open ? 0 : 90 }}
            exit={{ rotate: open ? 0 : 90 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="text-white rounded-full hover:bg-white hover:text-black p-2" onClick={()=>setOpen(!open)}>
                {open ? <LuShrink size={iconSize}/> : <LuExpand size={iconSize}/>}
                </motion.p>
        </motion.div>
        )
    }

    // hide component
    

    return(
        <div className="z-50 flex w-full justify-center sticky bottom-3">
            <motion.div 
            layout
            initial={{translateY: 100,}}
            animate={{translateY: 0}}
            transition={{duration: 0.3, type: "spring" }}
            
            className={open ?
                "flex justify-evenly gap-4 items-center fixed bottom-3 w-[95%] md:w-[28rem]  h-14 bg-darkGray rounded-full px-2 shadow-md transition-all ":
                "flex justify-evenly gap-2 md:gap-6 items-center fixed bottom-3 w-14 h-14 bg-darkGray rounded-full px-2 shadow-md transition-all duration-300"
            }>
                    {displayIcons}
                    <motion.p 
                    style={{display: open? "flex" : "none"}}
                    className="h-[50%] w-[1px] bg-gray"></motion.p>
                    {darkModeBtn()}
                    {hideBtn()}
            </motion.div>
        </div>
    )
}