import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Rootlayout({handleClick}){
    return(
        <>
            <Navbar handleClick={handleClick}/>
            <Outlet />
        </>
    )
}