import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useLocation } from 'react-router-dom';

import Rootlayout from './Components/Layout/Rootlayout';


import Home from './Components/Home/Home';
import Project from './Components/Projects/Project';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import Stack from './Components/Stack/Stack';


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

  
  // Routes

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout handleClick={handleClick}/>}>
        <Route index element= { <Home theme={theme}/> } />
        <Route path='/projects' element={<Project />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/stack' element={<Stack />} />
      </Route>
    )
  )

  

  return (
    <div className='font-inter bg-white dark:bg-space transition-all text-black dark:text-white min-h-screen pt-10 md:pt-6 pb-20'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
