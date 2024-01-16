import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Rootlayout from './Components/Layout/Rootlayout';
import Landing from './Components/Landing/Landing';

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

  // Routes

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout/>}>
        <Route index element= { <Landing /> } />
      </Route>
    )
  )

  const handleClick = () => {
    setTheme(theme === "dark"? "light" : "dark")
  }

  return (
    <div className='font-inter bg-space'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
