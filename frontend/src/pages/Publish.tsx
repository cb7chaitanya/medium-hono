import { useState } from "react"
import { Appbar } from "../components/Blogs/Appbar"
import { CreateBlogInput } from "@cb7chaitanya/common-medium"
import { toast } from "react-toastify"
import { baseUrl } from "../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Publish =  () => {
    const [postBlogInputs, setPostBlogInputs] = useState<CreateBlogInput>({
        title: "",
        content: ""
    })
    const navigate = useNavigate()
    const postBlog = async() => {
        try {
            const response = await axios.post(`${baseUrl}/api/v1/blog`, postBlogInputs, {
                headers : {
                    "Authorization": `${localStorage.getItem("Authorization")}`
                }
            })
            const id = response.data.id
            navigate(`/blog/${id}`)
        } catch(e : any) {
            toast.error(e)
        }
    }
    return (
        <div>
            <Appbar />
            <div className="flex justify-center w-full mt-12">
                <div className="max-w-screen-lg w-full">
                    <div className="mb-4 px-2">
                        <input type="text" placeholder="Title..." className="h-full w-full py-4 px-2 text-gray-900 rounded-lg text-3xl outline-none focus:bg-gray-50" onChange={(e) => setPostBlogInputs({...postBlogInputs, title: e.target.value})} />
                    </div>
                    <div className="mb-4 px-2">
                        <textarea rows={10} className="py-4 px-2 w-full text-sm outline-none text-gray-900 rounded-lg focus:bg-gray-50" placeholder="Write your thoughts here..." onChange={(e) => setPostBlogInputs({...postBlogInputs, content: e.target.value})}/>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-3xl" onClick={postBlog}>Publish</button>
                </div>
            </div>
        </div>
    )
}