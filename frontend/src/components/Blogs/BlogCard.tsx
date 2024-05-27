import { Link } from "react-router-dom"

interface BlogCardProps {
    authorName: string,
    title: string,
    content : string,
    published: string,
    id: string
}

export const BlogCard = ({
    authorName,
    title,
    content,
    published,
    id
}:BlogCardProps) => {
    return (
    <Link to={`/blog/${id}`}>
        <div className="p-4 cursor-pointer">
            <div className="flex pb-4 min-w-lg">
                <div className="flex justify-center flex-col">
                    <Avatar name={authorName} />
                </div>
                <div className="font-semibold pl-2">
                    {authorName}
                </div>
                <div className="flex">
                    <div className="ml-2 text-[8px] text-gray-400 flex justify-center flex-col">
                        &#9679;
                    </div>
                </div>
                <div className="pl-2 font-thin text-gray-500">
                    {published}
                </div>
            </div>
                <div className="text-xl font-semibold">
                    {title}
                </div>
            <div className="text-md font-thin">
                {content.slice(0,100) + "..."}
            </div>
            <div className="text-gray-400 text-sm pt-4 font-thin pb-2">
                {`${Math.ceil(content.length / 100)} min read`}
            </div>
            <div className="border-b  border-gray-400/95">

            </div>
        </div>
    </Link>
    )
}

export function Avatar({name, size = "small"}: { name: string, size?:"small" | "big"}) {
    return <div className={`${size === "small" ? "w-6 h-6" : "w-10 h-10"} relative inline-flex items-center justify-center  overflow-hidden bg-gray-600 rounded-full dark:bg-gray-600`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-bold text-gray-100 dark:text-gray-300`}>{
        name.charAt(0).toUpperCase()
    }</span>
</div>
}