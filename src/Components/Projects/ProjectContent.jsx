import { useNavigate } from "react-router-dom"

import ecom1 from "./Pictures/ecom1.png"
import code1 from "./Pictures/code1.png"
import game1 from "./Pictures/game1.png"

export default function ProjectContent(){

    let nav = useNavigate()

    return(
        <div className="grid grid-cols-2 w-full gap-4">

            <div className="col-span-2 w-full py-4">
                <div className="flex justify-between text-gray pb-2 text-sm">
                    <p>Coding Tool</p>
                    <p> 2023</p>
                </div>
                
                <div className="cursor-pointer" onClick={()=>nav("/projects/codehesive")}>
                <div
                class="relative  overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light">
                    <img src={code1} alt="codehesiveIcon"/>
                    <div
                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    </div>
                </div>
                <p className="pt-2 ">Codehesive</p>
                </div>

            </div>

            <div className="col-span-1 w-full py-4">
                <div className="flex justify-between text-gray pb-2 text-sm ">
                    <p> Python CLI</p>
                    <p> 2023</p>
                </div>

                <div className="cursor-pointer" onClick={()=>nav("/projects/game")}>
                <div
                class="relative  overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light">
                    <img src={game1} alt="Game Icon"/>
                    <div
                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    </div>
                </div>
                <p className="pt-2">Retro Game</p>
                </div>

            </div>

            <div className="col-span-1  w-full py-4">
                <div className="flex justify-between text-gray pb-2 text-sm ">
                    <p>E-Commerce</p>
                    <p> 2023</p>
                </div>
                
                <div className="cursor-pointer" onClick={()=>nav("/projects/ecommerce")}>
                <div
                class="relative overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light">
                    <img src={ecom1} alt=""/>
                    <div
                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    </div>
                </div>
                <p className="pt-2">TriEmulation</p>
                </div>

            </div>
        </div>
    )
}