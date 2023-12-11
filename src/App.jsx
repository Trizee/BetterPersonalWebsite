import { useState,useEffect } from 'react'
import Hero from './Components/Hero';
import NavBar from './Components/Navbar';

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
    <div className='bg-gray-200 dark:bg-gray-950'>
    <NavBar theme={theme} setTheme={setTheme}/>
    <div className='transition-all duration-1000 grid grid-cols-6 grid-flow-col'>
      {/* <button className="border-l-neutral-800 bg-red-700 rounded-full p-2 flex justify-center m-auto animate-pulse" onClick={handleClick}> darkmode</button> */}
      <div className='col-span-6 md:col-span-2'>
        <Hero theme={theme} />
      </div>
    </div>
    </div>
  )
}

export default App
