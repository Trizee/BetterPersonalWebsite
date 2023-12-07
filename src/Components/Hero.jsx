import { useState,useEffect } from "react"

export default function Hero(){
    
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        const timer = setTimeout(() => {
            setLoaded(true);
          }, 500);
          return () => clearTimeout(timer)
    },[])


    return(
        <>
        <div className= {loaded ? "opacity-100 transition-all duration-1000" : "opacity-0 transition-all duration-1000"}>
         <p className="text-8xl font-semibold p-2 ml-20 text-gray-800 dark:text-gray-200 transtion-all duration-700 hero:scale-700">HELLO</p>
         <p className="text-8xl font-semibold p-2 ml-20 text-gray-800 dark:text-gray-200 transtion-all duration-500">I AM</p>
         <p className="text-8xl font-semibold p-2 ml-20 text-gray-800 dark:text-gray-200 transtion-all duration-300">TRI</p>
        </div>
        <button onClick={()=>{setLoaded(!loaded)}}>class</button>
        </>
    )

}

