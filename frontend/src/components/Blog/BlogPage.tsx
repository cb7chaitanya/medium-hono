import { Appbar } from "../Blogs/Appbar"
import { Blog } from "../../hooks"
import { Avatar } from "../Blogs/BlogCard"

export const BlogPage = ({blog}: {blog: Blog}) => {
    return(
    <div>
        <Appbar />
        <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl">
            <div className="col-span-8">
                <div className="text-5xl font-extrabold">
                    {blog.title}
                </div>
                <div className="text-gray-400 mt-1">
                    Published on December 28, 2024 
                </div>
                <div className="mt-3 text-gray-600">
                    {blog.content}
                </div>
            </div>
            <div className="col-span-4">
                <div className="text-gray-400 text-md pb-4">
                    Author
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col justify-center pr-4">
                        <Avatar size="big" name={blog.author.name || "Anonymous"}/>
                    </div>
                    <div>
                        <div className="font-bold text-xl">
                            {blog.author.name || "Anonymous"}
                        </div>
                        <div className="pt-2 text-gray-400">
                            User Bio Probably
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}