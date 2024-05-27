import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Appbar } from "../components/Landing/Appbar"
import { Hero } from "../components/Landing/Hero"

export const Landing = () => {
    const token = localStorage.getItem("Authorization") || ""
    const navigate = useNavigate()
    useEffect(() => {
      if(token){
        navigate("/blogs")
      }  
    })
    return (
        <div className="w-full h-screen bg-[#f7f4ed]">
            <div>
                <Appbar />
            </div>
            <div className="mt-4 md:mt-12">
                <Hero />
            </div>
        </div>
    )
}