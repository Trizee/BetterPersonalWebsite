import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useState,useEffect } from "react";
import { GoHomeFill } from "react-icons/go";
import { FaLaptopCode } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";

export default function NavBar({theme,setTheme}){

    const [style,setStyle] = useState({})
    
    useEffect(()=>{
        if (theme === "dark"){
            setStyle({ color: "#e5e7eb", transition: 'transform 0.3s ease-in-out'})
        } else {
            setStyle({ color: "#1f2937",transition: 'transform 0.3s ease-in-out' })
        }
    },[theme])

    console.log(theme)

    return (
        <>
        <div className=" md:w-16 relative md:h-screen md:fixed z-10 top-0 left-0 flex flex-col content-center md:items-center md:justify-center">
                <div className="p-3 border-gray-900 dark:border-gray-400 md:border-2 md:shadow-lg md:rounded-r-lg transition-all duration-500 md:h-1/2 justify-center gap-8 md:justify-evenly flex flex-row md:flex-col dark:shadow-gray-900">
                <GoHomeFill size="3rem" className="hover:scale-125 cursor-pointer" style={style}/>
                <FaLaptopCode size="3rem" className="hover:scale-125 cursor-pointer" style={style}/>
                <IoInformationCircle size="3rem" className="hover:scale-125 cursor-pointer" style={style}/>
                {theme === "dark" ? <MdLightMode className="hover:scale-125 cursor-pointer" style={style} size="3rem" onClick={()=>{setTheme("light")}} /> : <MdDarkMode className="hover:scale-110 cursor-pointer" style={style} size="3rem" onClick={()=>{setTheme("dark")}}/>}
                </div>
        </div>
        </>
    )

}