import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useLocation } from 'react-router-dom';

import Rootlayout from './Components/Layout/Rootlayout';


import Home from './Components/Home/Home';
import Project from './Components/Projects/Project';
// import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import Stack from './Components/Stack/Stack';

import html from "./Components/Icon/html.png"
import css from "./Components/Icon/css-3.png"
import js from "./Components/Icon/js.png"
import reactIcon from "./Components/Icon/physics.png"
import tailwind from "./Components/Icon/tailwind.svg"
import bootstrap from "./Components/Icon/bootstrap.png"
import python from "./Components/Icon/python.png"
import sql from "./Components/Icon/sql-server.png"
import figma from "./Components/Icon/figma.png"
import vscode from "./Components/Icon/vscode.png"

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
  // Icons

  let stackIcons = [
    {icon:html, title: "HTML" ,des: "Frontend"},
    {icon:css, title: "CSS",des: "Frontend"},
    {icon:js, title: "JavaScript",des: "Progamming Language"},
    {icon:reactIcon, title: "React",des: "JavaScript Framwork"},
    {icon:tailwind, title: "TailwindCSS",des: "CSS Framework"},
    {icon:bootstrap,title: "BootStrap",des: "CSS Framework"},
    {icon:python,title: "Python",des: "Progamming Language"},
    {icon:sql,title: "SQL",des: "Backend"},
    {icon:figma,title: "Figma",des: "Design Tool"},
    {icon:vscode, title: "VScode",des: "IDE"}
  ]

  
  // Routes

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout handleClick={handleClick}/>}>
        <Route index element= { <Home theme={theme} stackIcons={stackIcons}/> } />
        <Route path='/projects' element={<Project />} />
        {/* <Route path='/blog' element={<Blog />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/stack' element={<Stack stackIcons={stackIcons}/>} />
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
