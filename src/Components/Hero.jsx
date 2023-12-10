import { useState,useEffect } from "react"
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { IoLogoGithub } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

export default function Hero({theme}){
    
    const [loaded, setLoaded] = useState(false);
    const [loaded1, setLoaded1] = useState(false);
    const [loaded2, setLoaded2] = useState(false);
    const [loaded3, setLoaded3] = useState(false);
    const [loaded4, setLoaded4] = useState(false);

    useEffect(()=>{
        const timer = setTimeout(() => {
            setLoaded(true);
          }, 500);
          return () => clearTimeout(timer)
    },[])

    useEffect(()=>{
        const timer = setTimeout(() => {
            setLoaded1(true);
          }, 1000);
          return () => clearTimeout(timer)
    },[])

    useEffect(()=>{
        const timer = setTimeout(() => {
            setLoaded2(true);
          }, 1500);
          return () => clearTimeout(timer)
    },[])

    useEffect(()=>{
        const timer = setTimeout(() => {
            setLoaded3(true);
          }, 2000);
          return () => clearTimeout(timer)
    },[])

    useEffect(()=>{
        const timer = setTimeout(() => {
            setLoaded4(true);
          }, 2500);
          return () => clearTimeout(timer)
    },[])

    // Making styling for the react-icons
    const [style,setStyle] = useState({ color: "#e5e7eb", })

    // setting theme for icons 

    useEffect(()=>{
        if (theme === "dark"){
            setStyle({ color: "#e5e7eb", })
        } else {
            setStyle({ color: "#1f2937", })
        }
    },[theme])

    const arrowStyle = {margin:"auto" }

    return(
        <div className="p-5 md:p-20 h-screen flex flex-col">
            <div className= {loaded ? "opacity-100 transition-all duration-1000 text-center md:text-left" : "opacity-0 transition-all duration-1000"}>
                <p className="text-6xl md:text-8xl font-semibold p-2 text-gray-800 dark:text-gray-200 transtion-all duration-700 hero:scale-700">HELLO  I'M</p>
            </div>
            <div className= {loaded1 ? "opacity-100 transition-all duration-1000 text-center md:text-left" : "opacity-0 transition-all duration-1000"}>
                <p className="text-6xl md:text-8xl font-semibold p-2 text-gray-800 dark:text-gray-200 transtion-all duration-500">TRI HOANG</p>
            </div>
            <div className= {loaded2 ? "opacity-100 transition-all duration-1000 text-center md:text-left" : "opacity-0 transition-all duration-1000"}>
                <p className="text-6xl md:text-8xl font-semibold p-2 text-gray-600 dark:text-gray-400 transtion-all duration-300">SOFTWARE</p>
            </div>
            <div className= {loaded3 ? "opacity-100 transition-all duration-1000 text-center md:text-left" : "opacity-0 transition-all duration-1000"}>
                <p className="text-6xl md:text-8xl font-semibold p-2 text-gray-600 dark:text-gray-400 transtion-all duration-300">ENGINEER</p>
            </div>
            <div className={loaded4? "my-auto transition-all duration-1000" : "opacity-0"}>
            <button class="bg-gray-200 hover:bg-transparent hover:text-gray-200 transition-all duration-75 text-gray-800 font-bold py-2 px-3 ml-3 hover:border-2 border-gray-700 hover:border-gray-500 flex gap-3">
                Let's Connect <FaArrowRight size={"1rem"} style={arrowStyle}/>
            </button>
            </div>
            <div className={loaded4 ? "transition-all duration-1000 gap-8 flex mt-auto justify-center pb-3 md:justify-normal" : " -translate-x-full transition-all duration-1000 opacity-0 "}>
                <div className="inline-block p-1 md:p-7 rounded-full hover:scale-110 transition-all duration-75 cursor-pointer"> <SlSocialInstagram style={style} size="3rem"/> </div> 
                <div className="inline-block p-1 md:p-7 rounded-full hover:scale-110 transition-all duration-75 cursor-pointer"> <SlSocialLinkedin style={style} size="3rem"/> </div> 
                <div className="inline-block p-1 md:p-7 rounded-full hover:scale-110 transition-all duration-75 cursor-pointer"> <IoLogoGithub style={style} size="3rem"/> </div>
                <div className="inline-block p-1 md:p-7 rounded-full hover:scale-110 transition-all duration-75 cursor-pointer"> <SlSocialGoogle style={style} size="3rem"/> </div> 
            </div>
        </div>
    )
// flex w-full gap-4 mt-auto
}

