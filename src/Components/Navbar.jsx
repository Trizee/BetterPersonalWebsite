import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useState,useEffect } from "react";
import { GoHomeFill } from "react-icons/go";
import { FaCode } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";

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
        <div className="h-screen w-16 fixed z-10 top-0 left-0 flex flex-col content-center items-center justify-center">
                <div className="p-1 shadow-md rounded-md bg-sky-900 transition-all ease-linear duration-500 h-1/4 justify-evenly flex flex-col">
                <GoHomeFill size="3rem"/>
                <FaCode size="3rem"/>
                <IoInformationCircle size="3rem"/>
                {theme === "dark" ? <MdLightMode style={style} size="3rem" onClick={()=>{setTheme("light")}} /> : <MdDarkMode style={style} size="3rem" onClick={()=>{setTheme("dark")}}/>}
                </div>
        </div>
        </>
    )

}