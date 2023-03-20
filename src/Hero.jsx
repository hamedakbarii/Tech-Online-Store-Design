let Hero = () => {
    return (
        <div className="container mx-auto mt-4">
            <div className="relative ">
                <img src="./assets/hero-banner.png" />
                <div className="absolute w-full h-full top-0 left-0 text-2xl">
                    <div className="absolute left-0 top-0 top-[50%] translate-y-[-50%] w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <p>
                            1
                        </p>
                    </div>
                    <div className="absolute right-0 top-[50%] translate-y-[-50%] w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <p>
                            2
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero ; 