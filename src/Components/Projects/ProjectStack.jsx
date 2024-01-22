

export default function ProjectStack({stack}){
    return(
        <>
        <p className="text-xl ml-1 py-2 font-semibold pt-4">Built With</p>
        <div className="flex flex-wrap gap-2">
            {stack.map((s)=><p className="text-sm px-4 flex items-center justify-center py-1 rounded-full border-2 border-lightGray opacity-70">{s}</p>)}
        </div>
        <p className="w-full h-[1px] bg-lightGray mt-10 mb-2 opacity-70"></p>
        </>
    )
}