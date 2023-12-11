import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useState,useEffect } from "react";

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
        <div className="transition-all duration-1000 w-screen flex justify-end">
            {theme === "dark" ? <MdLightMode style={style} size="2rem" onClick={()=>{setTheme("light")}} /> : <MdDarkMode style={style} size="2rem" onClick={()=>{setTheme("dark")}}/>}
        </div>
        </>
    )

}