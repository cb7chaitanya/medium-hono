import { SignupInput } from "@cb7chaitanya/common-medium"
import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"

export function AuthForm({type}: {type: "signin" | "signup"}) {
    const postInputs = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })
    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div className="text-3xl font-extrabold">
                    Create an account
                </div>
                <div className="text-slate-400">
                    Already have an account? 
                    <Link className="underline" to="/signin">Login</Link>
                </div>                
            </div> 
            <Input label="Name" placeholder="Enter your name" onChange={(e)=>{

            }}/>
        </div>
    )
}

interface inputProps {
    label: string,
    placeholder: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function Input({ label, placeholder, onChange }: inputProps) {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} onChange={onChange} />
        </div>
    )

}