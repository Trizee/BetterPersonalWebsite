import { useNavigate } from "react-router-dom"
import { IoChevronForward } from "react-icons/io5";

import codehesive from "./codehesive.svg"
import game from "./game.svg"
import jump from "./jump.png"

export default function HomeProjects(){

    let nav = useNavigate()

    let filler = "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww"

    return(
        <>
        <div className="w-full h-[4.5rem] rounded-lg hover:bg-lightGray transition-all duration-300 cursor-pointer mb-1 flex items-center gap-4 group"
        onClick={()=>nav('/projects/codehesive')}
        >
            <img src={codehesive} className="h-14 w-14 rounded-full p-2" alt="Codehesive Icon" />
            <div>
                <p className="group-hover:text-white">Codehesive</p>
                <p className="text-gray">Coding Tool</p>
            </div>
            <p className="ml-auto pr-2 opacity-0 group-hover:opacity-80 transition-all"><IoChevronForward size={"2rem"}/></p>
        </div>
        <div className="w-full h-[4.5rem] rounded-lg hover:bg-lightGray transition-all duration-300 cursor-pointer mb-1 flex items-center gap-4 group"
        onClick={()=>nav('/projects/game')}>
            <img src={jump} className="h-14 w-14 rounded-full p-2" alt="Game Icon" />
            <div>
                <p className="group-hover:text-white">Retro Game</p>
                <p className="text-gray">Python CLI</p>
            </div>
            <p className="ml-auto pr-2 opacity-0 group-hover:opacity-80 transition-all"><IoChevronForward size={"2rem"}/></p>
        </div>
        <div className="w-full h-[4.5rem] rounded-lg hover:bg-lightGray transition-all duration-300 cursor-pointer mb-1 flex items-center gap-4 group"
        onClick={()=>nav('/projects/ecommerce')}>
            <img src={game} className="h-14 w-14 rounded-full p-1" alt="Store Icon" />
            <div>
                <p className="group-hover:text-white">TriEmulation</p>
                <p className="text-gray">E-Commerce</p>
            </div>
            <p className="ml-auto pr-2 opacity-0 group-hover:opacity-80 transition-all"><IoChevronForward size={"2rem"}/></p>
        </div>
        </>
    )
}