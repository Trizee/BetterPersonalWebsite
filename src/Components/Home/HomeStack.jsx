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
        <a href={i.doc} target="_blank">
        <motion.div 
        className="h-4 w-4 md:h-8 md:w-8 flex justify-center p-1 items-center cursor-pointer relative" initial="rest" whileHover="hover" animate="rest" key={i.title}>
            <motion.p
            variants={slashMotion}
            className="absolute text-xs -top-7 bg-white rounded-full px-2 text-black">
                    {i.title}
            </motion.p>
            <img src={i.icon} alt="" className="hover:scale-125 transition-all"/>
        </motion.div>
        </a>
        )
    })

    return(
        <div className="flex gap-3 justify-evenly py-6">
            {display}
        </div>
    )
}