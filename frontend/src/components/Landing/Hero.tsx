export const Hero = ()  => {
    return (
        <div>
            <div className="grid grid-cols-12 ">
                <div className="col-span-8 ml-10">
                    <div className="flex flex-col cols-1 max-w-[80%]">
                        <div className="text-8xl font-serif tracking-tighter">
                            Human stories & ideas
                        </div>
                        <div className="mt-8 font-serif text-lg md:text-xl">
                        A place to read, write, and deepen your understanding
                        </div>
                    </div>
                    </div>
                    <div className="invisible md:visible md:col-span-4">
                        <div className="w-80 absolute h-48 right-4">
                            <img src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"/>
                        </div>
                    </div>
            </div>
        </div>
    )
}