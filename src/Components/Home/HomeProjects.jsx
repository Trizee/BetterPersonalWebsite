import { useNavigate } from "react-router-dom"

export default function HomeProjects(){

    let nav = useNavigate()

    return(
        <>
        <div className="w-full h-20 rounded-lg hover:bg-gray transition-all duration-300 cursor-pointer mb-1"
        onClick={()=>nav('/projectpage')}
        >

        </div>
        <div className="w-full h-20 rounded-lg hover:bg-gray transition-all duration-300 cursor-pointer mb-1">

        </div>
        <div className="w-full h-20 rounded-lg hover:bg-gray transition-all duration-300 cursor-pointer mb-1">

        </div>
        </>
    )
}