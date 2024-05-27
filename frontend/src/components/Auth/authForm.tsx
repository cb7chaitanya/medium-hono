import { SignupInput } from "@cb7chaitanya/common-medium"
import { ChangeEvent, useState } from "react"
import { toast } from "react-toastify"
import { baseUrl } from "../../config"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

export function AuthForm({type}: {type: "signin" | "signup"}) {
    const navigate = useNavigate()
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })
    const handleClick = async() => {
        try{
            const response = await axios.post(`${baseUrl}/api/v1/user/${type}`, postInputs)
            const jwt = response.data.jwt
            localStorage.setItem("Authorization", jwt)
            navigate('/blogs')
        } catch(e : any){
           toast.error(e) 
        }  
    }
    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Create an account
                        </div>
                        <div className="text-slate-400">
                            {type==="signup" ? "Already have an account?" : "Don't have an account?"}
                            <Link className="pl-2 underline" to={type==="signup"? "/signin" : "/signup"}>{type==="signup"? "Sign In" : "Sign Up"}</Link>
                        </div>                
                    </div> 
                    <div className="pt-4">
                        {type === "signup" ? <Input type="text" label="Name" placeholder="Enter your name" onChange={(e)=>{
                            setPostInputs(({
                                ...postInputs,
                                name: e.target.value
                            }))
                        }}/> : null}
                        <Input label="Email" type={"email"} placeholder="Enter your Email" onChange={(e)=>{
                            setPostInputs(({
                                ...postInputs,
                                email: e.target.value
                            }))
                        }}/>
                        <Input label="Password" type={"password"} placeholder="Enter your password" onChange={(e)=>{
                            setPostInputs(({
                                ...postInputs,
                                password: e.target.value
                            }))
                        }}/>
                    </div>
                    <button onClick={handleClick} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl w-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign In"}</button>
                </div>
            </div>
        </div>
    )
}

interface inputProps {
    label: string,
    placeholder: string,
    type: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function Input({ label, placeholder, onChange, type }: inputProps) {
    return (
        <div className="pb-4">
            <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">{label}</label>
            <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} onChange={onChange} />
        </div>
    )

}