import { useState } from "react"
import { SlClock } from "react-icons/sl";

export default function ContactForm(){

    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [message,setMessage] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`The name you entered was: ${name}`)
            setName("")
            setEmail("")
            setMessage("")
    }

    return(
        <form action="submit" onSubmit={handleSubmit}>
            <div className="flex gap-3 pt-4">
             
                    <input
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-9 w-1/2 bg-lightGray rounded-lg px-3 text-white"
                    placeholder="Name"
                    />
                
                
                    <input
                    type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-9 w-1/2 bg-lightGray rounded-lg px-3 text-white"
                    placeholder="Email"
                    />
                
            </div>

            <textarea
                    type="text" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="h-52 w-full bg-lightGray rounded-lg mt-3 px-3 pt-3 text-white"
                    placeholder="Message"
            />

            <button type="submit" className="w-full h-9 dark:bg-white mt-4 text-white dark:text-space bg-space rounded-lg flex items-center justify-center hover:bg-lightGray dark:hover:bg-darkGray dark:hover:text-white transition-all">
                <p className=" text-lg ">Send</p>
            </button>

            <div className="py-6 flex items-center gap-4">
            <   SlClock />
                <p className="">Avg. response</p>
                <p className="text-gray text-sm">12 Hours</p>
            </div>

        </form>
    )
}