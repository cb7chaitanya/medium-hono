export const Skeleton = () => {
    return (
    <div role="status" className="animate-pulse">
        <div className="p-4 cursor-pointer">
            <div className="flex pb-4 min-w-lg">
                <div className="flex justify-center flex-col">
                    <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
                </div>
                <div className="font-semibold pl-2">
                    <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                </div>
                <div className="flex">
                    <div className="ml-2 text-[8px] text-gray-400 flex justify-center flex-col">
                        <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                    </div>
                </div>
                <div className="pl-2 font-thin text-gray-500">
                    <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                </div>
            </div>
                <div className="text-xl font-semibold">
                    <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                </div>
            <div className="text-md font-thin">
                <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
            </div>
            <div className="text-gray-400 text-sm pt-4 font-thin pb-2">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="border-b  border-gray-400/95">

            </div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>
    )
}