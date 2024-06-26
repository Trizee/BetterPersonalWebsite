import { motion } from "framer-motion";


export default function Links({theme,head,end}){

    const rightMotion = {
        rest: {backgroundColor:theme === "dark"? "#ffffff" : "#000000", width: "0", ease: "easeIn",type: "tween", duration: 0.2},
        hover: {
        backgroundColor: theme === "dark"? "#ffffff" : "#000000",
          width: "100%",
          transition: {
            duration: 0.2,
            ease: "linear",
          },
        }
    };

    const endMotion = {
      rest: {color: "#818181"},
      hover:{
        color: theme === "dark"? "#ffffff" : "#000000",
        transition: {
          duration: 0.3,
          ease: "linear",
          delay: 0.2
        },
      }
    }


    return(
        <motion.div
        className="text-gray flex w-full items-center cursor-pointer py-2 group"
        initial="rest" whileHover="hover" animate="rest"
        >
            <motion.p className="group-hover:text-black dark:group-hover:text-white" >{head}</motion.p>
            <div className="w-full mx-4 relative">
            <motion.p  
              variants={rightMotion}
              className="bg-gray w-full h-[2px] absolute z-20"></motion.p>
              <p className="bg-gray w-full h-[2px] absolute z-10"></p>
              <p className="opacity-0 w-full h-[2px] "></p>
            </div>
            <motion.p variants={endMotion} >{end}</motion.p>
        </motion.div>
    )
}