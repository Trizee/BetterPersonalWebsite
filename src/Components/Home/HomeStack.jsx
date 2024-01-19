import { motion } from "framer-motion"

export default function HomeStack({stackIcons}){

    const slashMotion = {
        rest: { opacity: 0, ease: "easeIn",type: "tween", duration: 0.1, y: -5,
        transitionEnd: {
            display: "none",
          },},
        hover: {
          opacity: 1,
          y: 0,
          display: "flex",
          transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeIn",
          },
        }
      };

    let display = stackIcons.map(i => {
        return(
        
        <div className="flex items center justify-center col-span-1 pt-6 md:pt-0">
        <motion.div 
        className="h-8 w-8 flex justify-center p-1 items-center cursor-pointer relative" initial="rest" whileHover="hover" animate="rest" key={i.title}>
            <a href={i.doc} target="_blank">
            <motion.p
            variants={slashMotion}
            className="absolute text-xs -top-7 bg-white rounded-full px-2 text-black">
                    {i.title}
            </motion.p>
            <img src={i.icon} alt="" className="hover:scale-125 transition-all"/>
            </a>
        </motion.div>
        </div>
        
        )
    })

    return(
        
        <div className="grid grid-cols-6 mx- md:flex  gap-3 md:justify-evenly md:py-6 w-full justify-center ">
            {display}
        </div>
        
    )
}