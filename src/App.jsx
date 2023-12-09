import { useState,useEffect } from 'react'
import Hero from './Components/Hero';

function App() {
  
  // Theme Setter 
  const [theme,setTheme] = useState(null);

  // Theme Checker
  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme("dark")
    } else {
      setTheme("light")
    }
  },[])

  // Theme Toggle
  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    } 
  },[theme])

  const handleClick = () => {
    setTheme(theme === "dark"? "light" : "dark")
  }

  console.log(theme)

  return (
    <div className='h-screen bg-gray-200 dark:bg-gray-950 transition-all duration-1000'>
      {/* <button className="border-l-neutral-800 bg-red-700 rounded-full p-2 flex justify-center m-auto animate-pulse" onClick={handleClick}> darkmode</button> */}
      <Hero theme={theme}/>
    </div>
  )
}

export default App
