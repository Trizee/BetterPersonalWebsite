import { motion } from "framer-motion"


export default function Stack({stackIcons}){

    
    let display = stackIcons.map(p => {
        return(
            <a href={p.doc} target="_blank">
            <div className="w-full col-span-1 h-16 rounded-lg hover:border-2 dark:hover:border-none hover:border-gray dark:hover:bg-lightGray transition-all cursor-pointer">
                <div className="flex items-center h-full  ">
                    <img src={p.icon} alt="" className="h-16 w-16 rounded-lg p-4"/>
                    <div>
                        <p>{p.title}</p>
                        <p className="text-gray text-sm">{p.des}</p>
                    </div>
                </div>
            </div>
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
                        <p >Stack</p>
                    </div>
            </motion.div>

            <motion.div 
                className=" w-full justify-center flex px-4 md:mx-0"
                initial={{y: 90, opacity:0}}
                animate={{y: 0, opacity:1}}
                exit={{x: window.innerWidth, opacity:1, transition:{duration:0.4}}}
                >
                    <div className="w-full md:w-[30rem] py-6">

                        <p className="py-6 text-2xl text-gray">Things I <span className="text-black dark:text-white">use.</span></p>

                        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[30rem] gap-4 py-6">
                        {display}
                        </div>
                        
                    </div>

                    

            </motion.div>
        </>
    )
}