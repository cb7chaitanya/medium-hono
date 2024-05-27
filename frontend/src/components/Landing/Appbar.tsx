import { Link } from "react-router-dom"

export const Appbar = () => {
    return (
        <div className="border-b border-b-zinc-800 flex justify-between px-10 py-4 bg-[#f7f4ed]">
            <div className="text-2xl font-semibold flex-col font-serif justify-center flex">
                Medium
            </div>
            <div className="inline-flex">  
                <Link to="/signup"><button type="button" className="mr-8 focus:outline-none text-white bg-zinc-800 hover:bg-zinc-700 duration-300 focus:ring-4 focus:ring-green-300 font-medium rounded-3xl text-sm px-3 py-1 me-1.5 mb-2">Sign up</button></Link> 
                <Link to="/signin"><button type="button" className="mr-8 focus:outline-none text-white bg-zinc-800 hover:bg-zinc-700 duration-300 focus:ring-4 focus:ring-green-300 font-medium rounded-3xl text-sm px-3 py-1 me-1.5 mb-2">Sign in</button></Link> 
            </div>
        </div>
    )
}