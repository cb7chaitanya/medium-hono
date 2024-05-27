import { Appbar } from "../components/Blogs/Appbar"
import { BlogCard } from "../components/Blogs/BlogCard"
import { Skeleton } from "../components/Blogs/Skeleton"
import { useBlogs } from "../hooks"

export function Blogs() {
    const { loading, blogs } = useBlogs()
    if(loading){
        return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="max-w-xl w-full">
                    <Skeleton />
                    <Skeleton />
                </div>
            </div>
        </div>
    )}

    return (
    <div>
            <Appbar />
        <div className="flex justify-center">
            <div className="max-w-xl w-full">
                {blogs.map((blog) => (
                    <BlogCard
                        id={blog.id}
                        authorName={blog.author.name}
                        title={blog.title}
                        content={blog.content}
                        published={"today"}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}
