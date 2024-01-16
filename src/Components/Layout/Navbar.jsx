import { GoHome } from "react-icons/go";
import { PiCursorClick } from "react-icons/pi";
import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import { GoStack } from "react-icons/go";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { AiOutlineFile } from "react-icons/ai";

export default function Navbar(){

    let iconSize = "1.75rem" 

    let icons = [
    {icon:<GoHome size={iconSize}/> , text:"Home"},
    {icon:<PiCursorClick size={iconSize}/> ,text:"Projects"},
    {icon:<PiPencilSimpleLineDuotone size={iconSize}/>,text:"Blog"},
    {icon:<GoStack size={iconSize}/>,text:"Stack"},
    {icon:<PiPaperPlaneTilt size={iconSize}/>,text:"Contact"},
    {icon:<AiOutlineFile size={iconSize}/>,text:"Resume"}]

    let displayIcons = icons.map(i => {return(
        <div className="h-8 w-8 flex justify-center p-1 items-center group cursor-pointer">
            <p className="absolute text-xs -top-6 bg-white rounded-full px-1 hidden group-hover:block">{i.text}</p>
            <p className="text-gray rounded-full hover:bg-gray hover:text-black p-1">{i.icon}</p>
        </div>
    )
    })

    return(
        <div className="z-50 flex w-full justify-center">
            <div className="flex justify-between items-center fixed bottom-4 w-[28rem] h-14 bg-darkGray rounded-full px-2">
                {displayIcons}
            </div>
        </div>
    )
}