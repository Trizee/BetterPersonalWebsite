import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Rootlayout(){
    return(
        <>
            <Navbar />
            <Outlet />
        </>
    )
}