import { useNavigate } from "react-router-dom"

export default function ProjectContent(){

    let nav = useNavigate()

    let filler = "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww"

    return(
        <div className="grid grid-cols-2 w-full gap-4">

            <div className="col-span-2 w-full py-4">
                <div className="flex justify-between text-gray pb-2 text-sm">
                    <p>Coding Tool</p>
                    <p> 2023</p>
                </div>
                
                <div className="cursor-pointer" onClick={()=>nav("/projectpage")}>
                <div
                class="relative  overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light">
                    <img src={filler} alt=""/>
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

                <div className="cursor-pointer" onClick={()=>nav("/projectpage")}>
                <div
                class="relative  overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light">
                    <img src={filler} alt=""/>
                    <div
                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    </div>
                </div>
                <p className="pt-2">Game</p>
                </div>

            </div>

            <div className="col-span-1 w-full py-4">
                <div className="flex justify-between text-gray pb-2 text-sm ">
                    <p>E-Commerce</p>
                    <p> 2023</p>
                </div>
                
                <div className="cursor-pointer" onClick={()=>nav("/projectpage")}>
                <div
                class="relative  overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light">
                    <img src={filler} alt=""/>
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