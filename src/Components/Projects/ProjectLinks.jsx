import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function ProjectLinks({you,git}){
    return(
        <div className="flex gap-2 ">
            <a href={git} target="_blank">
                <p className="py-2 px-5 rounded-lg bg-darkGray flex items-center justify-evenly cursor-pointer text-white hover:bg-lightGray transition-all gap-3">
                <span className="text-white"><FaGithub /></span>Code</p>
            </a>
               <a href={you} target="_blank">
                    <p className="py-2 px-5 rounded-lg bg-darkGray flex items-center justify-evenly cursor-pointer text-white hover:bg-lightGray transition-all gap-3">
                    <span className="text-white"><FaYoutube /></span>Demo</p>
                </a>         
        </div>
    )
}