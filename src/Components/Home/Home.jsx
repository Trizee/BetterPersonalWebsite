import { motion } from "framer-motion"
import HomeHeader from "./HomeHeader"
import Links from "../Links"

export default function Home({theme}){

    let where = 
    [
        {head: "Linkedin" , ending: "Follow",link: ""},
        {head: "Youtube" , ending: "Follow",link: ""},
        {head: "Github" , ending: "Follow",link: ""},
        {head: "Medium" , ending: "Follow",link: ""},
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
                    <p className="text-lg py-6">Where</p>
                    {whereDisplay}
                  
                </div>
            </motion.div>

        </>
    )
}