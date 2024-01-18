import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

export default function Rootlayout({handleClick,theme}){

    let location = useLocation()

    return(
        <>
            <Navbar handleClick={handleClick} theme={theme}/>
            <AnimatePresence >
                <Outlet location={location} key={location}/>
            </AnimatePresence>
        </>
    )
}