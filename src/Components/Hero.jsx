import { useState,useEffect } from "react"

export default function Hero(){
    
    const [loaded, setLoaded] = useState(false);
    const [loaded1, setLoaded1] = useState(false);
    const [loaded2, setLoaded2] = useState(false);
    const [loaded3, setLoaded3] = useState(false);

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


    return(
        <>
        <div className= {loaded ? "opacity-100 transition-all duration-1000" : "opacity-0 transition-all duration-1000"}>
            <p className="text-8xl font-semibold p-2 text-gray-800 dark:text-gray-200 transtion-all duration-700 hero:scale-700">HELLO  I'M</p>
        </div>
        <div className= {loaded1 ? "opacity-100 transition-all duration-1000" : "opacity-0 transition-all duration-1000"}>
            <p className="text-8xl font-semibold p-2 text-gray-800 dark:text-gray-200 transtion-all duration-500">TRI HOANG</p>
        </div>
        <div className= {loaded2 ? "opacity-100 transition-all duration-1000" : "opacity-0 transition-all duration-1000"}>
            <p className="text-8xl font-semibold p-2 text-gray-600 dark:text-gray-400 transtion-all duration-300">SOFTWARE</p>
        </div>
        <div className= {loaded3 ? "opacity-100 transition-all duration-1000" : "opacity-0 transition-all duration-1000"}>
            <p className="text-8xl font-semibold p-2 text-gray-600 dark:text-gray-400 transtion-all duration-300">ENGINEER</p>
        </div>
        </>
    )

}

