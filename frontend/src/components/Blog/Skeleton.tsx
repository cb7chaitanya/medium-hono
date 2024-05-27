
export const Skeleton = () => {
    return (
    <div>
        <div className="animate-pulse">
        <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl">
            <div className="col-span-8">
                <div className="text-5xl font-extrabold">
                    <div className="h-4 w-80 bg-gray-200 rounded-full mb-4"></div>
                </div>
                <div className="text-gray-400 mt-1">
                <div className="h-4 w-96 bg-gray-200 rounded-full mb-4"></div>
                </div>
                <div className="mt-3 text-gray-600">
                <div className="h-4 w-48 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-4 w-52 bg-gray-200 rounded-full mb-4"></div>
                </div>
            </div>
            <div className="col-span-4">
                <div className="text-gray-400 text-md pb-4">
                <div className="h-4 w-24 bg-gray-200 rounded-full mb-4"></div>
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col justify-center pr-4">
                    <div className="h-8 w-8 bg-gray-200 rounded-full mb-4"></div>
                    </div>
                    <div>
                        <div className="font-bold text-xl">
                        <div className="h-4 w-60 bg-gray-200 rounded-full mb-4"></div>
                        </div>
                        <div className="pt-2 text-gray-400">
                        <div className="h-4 w-48 bg-gray-200 rounded-full mb-4"></div>
                        <div className="h-4 w-32 bg-gray-200 rounded-full mb-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
)}