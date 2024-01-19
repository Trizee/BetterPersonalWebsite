import { useNavigate } from "react-router-dom"
import { IoChevronForward } from "react-icons/io5";

export default function HomeProjects(){

    let nav = useNavigate()

    let filler = "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww"

    return(
        <>
        <div className="w-full h-[4.5rem] rounded-lg hover:bg-lightGray transition-all duration-300 cursor-pointer mb-1 flex items-center gap-4 group"
        onClick={()=>nav('/projectpage')}
        >
            <img src={filler} className="h-14 w-14 rounded-full ml-2" alt="" />
            <div>
                <p className="group-hover:text-white">Codehesive</p>
                <p className="text-gray">Coding Tool</p>
            </div>
            <p className="ml-auto pr-2 opacity-0 group-hover:opacity-80 transition-all"><IoChevronForward size={"2rem"}/></p>
        </div>
        <div className="w-full h-[4.5rem] rounded-lg hover:bg-lightGray transition-all duration-300 cursor-pointer mb-1 flex items-center gap-4 group">
            <img src={filler} className="h-14 w-14 rounded-full ml-2" alt="" />
            <div>
                <p className="group-hover:text-white">Game</p>
                <p className="text-gray">Python CLI</p>
            </div>
            <p className="ml-auto pr-2 opacity-0 group-hover:opacity-80 transition-all"><IoChevronForward size={"2rem"}/></p>
        </div>
        <div className="w-full h-[4.5rem] rounded-lg hover:bg-lightGray transition-all duration-300 cursor-pointer mb-1 flex items-center gap-4 group">
        <   img src={filler} className="h-14 w-14 rounded-full ml-2" alt="" />
            <div>
                <p className="group-hover:text-white">TriEmulation</p>
                <p className="text-gray">E-Commerce</p>
            </div>
            <p className="ml-auto pr-2 opacity-0 group-hover:opacity-80 transition-all"><IoChevronForward size={"2rem"}/></p>
        </div>
        </>
    )
}