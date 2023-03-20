import { LeftSideIcon , RightSideIcon } from "./components/Icon";
let Hero = () => {
    return (
        <div className="container mx-auto mt-4">
            <div className="relative overflow-hidden">
                <img src="./assets/hero-banner.png" className="w-full" />
                <div className="absolute w-full h-full top-0 left-0 text-2xl">
                    <div className="absolute left-0 top-0 top-[50%] translate-y-[-50%] hover:pr-4 w-10 h-10 bg-gray-800 hover:bg-gray-600 transation-all duration-[0.2s] cursor-pointer  rounded-r-full flex items-center justify-center">
                        <LeftSideIcon />
                    </div>
                    <div className="absolute right-0 top-[50%] translate-y-[-50%] hover:pl-4 w-10 h-10 bg-gray-800 hover:bg-gray-600 transation-all duration-[0.2s] cursor-pointer  rounded-l-full flex items-center justify-center">
                        <RightSideIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero ; 