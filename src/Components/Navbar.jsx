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
        <div className=" md:w-16 md:h-screen md:fixed z-10 md:top-0 md:left-0 md:flex md:flex-col content-center md:items-center md:justify-center">
                <div className="p-5 pb-0 md:pb-5 border-gray-900 dark:border-gray-400 md:border-2 md:shadow-lg md:rounded-r-md transition-all duration-500 md:h-1/2 justify-center gap-8 md:justify-evenly flex flex-row md:flex-col dark:shadow-gray-900">
                    <div className="flex items-center group">
                        <GoHomeFill size="3rem" className="hover:scale-125 cursor-pointer" style={style}/>
                        <span className="hidden md:block text-gray-900 border-2 border-gray-900 dark:border-gray-200 dark:text-gray-200 absolute ml-20 p-4 w-32 text-center rounded-md font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200 ">HOME</span>
                    </div>
                    <div className="flex items-center group">
                        <FaLaptopCode size="3rem" className="hover:scale-125 cursor-pointer" style={style}/>
                        <span className="hidden md:block text-gray-900 border-2 border-gray-900 dark:border-gray-200 dark:text-gray-200 absolute ml-20 p-4 w-32 text-center rounded-md font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200">PROJECTS</span>
                    </div>
                    <div className="flex items-center group"> 
                        <IoInformationCircle size="3rem" className="hover:scale-125 cursor-pointer" style={style}/>
                        <span className="hidden md:block text-gray-900 border-2 border-gray-900 dark:border-gray-200 dark:text-gray-200 absolute ml-20 p-4 w-32 text-center rounded-md font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200">ABOUT</span>
                    </div>
                    <div className="flex items-center group">
                        {theme === "dark" ? <MdLightMode className="hover:scale-125 cursor-pointer" style={style} size="3rem" onClick={()=>{setTheme("light")}} /> : <MdDarkMode className="hover:scale-110 cursor-pointer" style={style} size="3rem" onClick={()=>{setTheme("dark")}}/>}
                        {theme === "dark" ? <span className="hidden md:block text-gray-900 border-2 border-gray-900 dark:border-gray-200 dark:text-gray-200 absolute ml-20 p-4 w-32 text-center rounded-md font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200">LIGHT</span> 
                        :<span className="hidden md:block text-gray-900 border-2 border-gray-900 dark:border-gray-200 dark:text-gray-200 absolute ml-20 p-4 w-32 text-center rounded-md font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200">DARK </span>}
                    </div>
                </div>
        </div>
        </>
    )

}