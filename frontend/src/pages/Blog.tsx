import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { BlogPage } from "../components/Blog/BlogPage"
import { Skeleton } from "../components/Blog/Skeleton"
import { Appbar } from "../components/Blogs/Appbar"

export function Blog() {
    const { id } = useParams()
    const { loading, blog } = useBlog({
        id : id || ""
    })
    if(loading || !blog) {
        return (
            <div>
                <Appbar />
                <div>
                    <Skeleton />
                </div>
            </div>
        )
    }

    return (
        <div>
            <BlogPage blog={blog}/>
        </div>
    )
}