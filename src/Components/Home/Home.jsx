import { motion } from "framer-motion"
import HomeHeader from "./HomeHeader"
import Links from "../Links"
import HomeProjects from "./HomeProjects"
import HomeStack from "./HomeStack"

import { useNavigate } from "react-router-dom"

import { FaArrowRight } from "react-icons/fa";



export default function Home({theme,stackIcons}){

    let nav = useNavigate()

    let where = 
    [
        {head: "Linkedin" , ending: "Follow", link: "https://www.linkedin.com/in/tri-hoang-730602286/"},
        {head: "Youtube" , ending: "Follow",link: "https://www.youtube.com/channel/UCwnrINoaJPc_AyV4_12n2ug"},
        {head: "Github" , ending: "Follow",link: "https://github.com/Trizee"},
        {head: "Medium" , ending: "Follow",link: "https://medium.com/@trihoang09"},
    ]

    let whereDisplay = where.map(w => {
        return(
            <a target="_blank" href={w.link}>
                <Links theme={theme} head={w.head} end={w.ending}/>
            </a>
        )
    })

    return(
        <>
            <motion.div 
                className=" w-full justify-center flex px-4 md:px-0"
                initial={{y: -90, opacity:0}}
                animate={{y: 0, opacity:1}}
                exit={{x: window.innerWidth, opacity:1, transition:{duration:0.4}}}
                >
                <div className="flex w-full md:w-[30rem] items-center">
                    <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" className="h-14 w-14" alt="profile picture" />
                    <div className="px-6">
                        <p className="text-lg">Tri Hoang</p>
                        <p className="text-gray">Software Engineer</p>
                    </div>
                </div>
            </motion.div>

            <motion.div 
            className=" w-full justify-center flex px-4 md:mx-0"
            initial={{y: 90, opacity:0}}
            animate={{y: 0, opacity:1}}
            exit={{x: window.innerWidth, opacity:1, transition:{duration:0.4}}}
            >
                <div className="w-full md:w-[30rem] py-6">
                    <HomeHeader />
                    {/* Put Projects Here */}
                    
                    <div className="flex items-center justify-between pt-8">
                    <p className="text-lg py-4">Projects</p>
                    <p className="text-gray text-lg py-4 hover:text-white transition-all cursor-pointer flex gap-2 items-center" onClick={()=>nav('/projects')}>All<FaArrowRight size={".9rem"}/></p>
                    </div>

                    <HomeProjects />

                    <p className="text-lg py-4">Where</p>
                    {whereDisplay}

                    <div className="flex items-center justify-between pt-8">
                    <p className="text-lg py-4">Stack</p>
                    <p className="text-gray text-lg py-4 hover:text-white transition-all cursor-pointer flex gap-2 items-center" onClick={()=>nav('/stack')}>All<FaArrowRight size={".9rem"}/></p>
                    </div>

                    <HomeStack stackIcons={stackIcons}/>
                  
                </div>
            </motion.div>

        </>
    )
}