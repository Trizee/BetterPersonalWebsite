import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useState,useEffect } from "react";
import { IoTriangle } from "react-icons/io5";

export default function NavBar({theme,setTheme}){

    const [style,setStyle] = useState({})
    
    useEffect(()=>{
        if (theme === "dark"){
            setStyle({ color: "#e5e7eb", })
        } else {
            setStyle({ color: "#1f2937", })
        }
    },[theme])

    console.log(theme)

    return (
        <>
        <div className="transition-all duration-1000 flex w-full bg-sky-900 p-2 top-0 relative">
            <IoTriangle className="mr-auto" size="2rem"/>
            <div className="flex items-center">
                <p className="font-bold text-gray-950 dark:text-gray-200 mx-10 cursor-pointer hover:underline-offset-4 underline">ABOUT</p>
                <p className="font-bold text-gray-950 dark:text-gray-200 mx-10 cursor-pointer">PROJECTS</p>
                <p className="font-bold text-gray-950 dark:text-gray-200 mx-10 cursor-pointer">RESUME</p>
            </div>
            <div className="ml-auto cursor-pointer">
            {theme === "dark" ? <MdLightMode style={style} size="2rem" onClick={()=>{setTheme("light")}} /> : <MdDarkMode style={style} size="2rem" onClick={()=>{setTheme("dark")}}/>}
            </div>
        </div>
        </>
    )

}