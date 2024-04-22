import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useLocation } from 'react-router-dom';

import Rootlayout from './Components/Layout/Rootlayout';


import Home from './Components/Home/Home';
import Project from './Components/Projects/Project';
// import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import Stack from './Components/Stack/Stack';

import CodePage from './Components/Projects/CodehesiveProduct';
import GamePage from './Components/Projects/GameProduct';
import EcomPage from './Components/Projects/EcomProejct';

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
import framer from "./Components/Icon/framer.png"

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
    {icon:html, title: "HTML" ,des: "Frontend",doc:"https://developer.mozilla.org/en-US/docs/Web/HTML"},
    {icon:css, title: "CSS",des: "Frontend",doc:"https://developer.mozilla.org/en-US/docs/Web/CSS"},
    {icon:js, title: "JavaScript",des: "Progamming Language",doc:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
    {icon:reactIcon, title: "React",des: "JavaScript Framework",doc:"https://react.dev/"},
    {icon:tailwind, title: "TailwindCSS",des: "CSS Framework",doc:"https://tailwindcss.com/"},
    {icon:bootstrap,title: "BootStrap",des: "CSS Framework",doc:"https://getbootstrap.com/"},
    {icon:python,title: "Python",des: "Progamming Language",doc:"https://docs.python.org/3/"},
    {icon:sql,title: "SQL",des: "Backend",doc:"https://developer.mozilla.org/en-US/docs/Glossary/SQL"},
    {icon:figma,title: "Figma",des: "Design Tool",doc:"https://www.figma.com/"},
    {icon:vscode, title: "VScode",des: "IDE",doc:"https://code.visualstudio.com/"},
    {icon:framer, title: "FramerMotion",des: "Animation Libary",doc:"https://www.framer.com/motion/"}
  ]

  
  // Routes

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout handleClick={handleClick} theme={theme}/>}>
        <Route index element= { <Home theme={theme} stackIcons={stackIcons}/> } />
        <Route path='/projects' element={<Project />} />
        {/* <Route path='/blog' element={<Blog />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/stack' element={<Stack stackIcons={stackIcons}/>} />
        <Route path='/projects/codehesive' element={<CodePage />} />
        <Route path='/projects/game' element={<GamePage />} />
        <Route path='/projects/ecommerce' element={<EcomPage />} />
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
