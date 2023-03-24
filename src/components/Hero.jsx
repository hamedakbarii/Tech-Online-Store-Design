import { LeftSideIcon , RightSideIcon } from "./Icon";
let Hero = () => {
    return (
        <div className="container mx-auto mt-4 px-4 tablet:px-0">
            <div className="relative overflow-hidden">
                <img src="./assets/hero-banner.png" className="w-full" />
                <div className="absolute w-full h-full top-0 left-0 text-2xl">
                    <div className="absolute left-0 top-[50%] translate-y-[-50%] hover:pr-2 px-3 py-4 bg-[#252931] hover:bg-[#56595F] transation-all duration-[0.2s] cursor-pointer  rounded-r-full flex items-center justify-center">
                        <LeftSideIcon color="white" />
                    </div>
                    <div className="absolute right-0 top-[50%] translate-y-[-50%] hover:pr-2 px-3 py-4 bg-[#252931] hover:bg-[#56595F] transation-all duration-[0.2s] cursor-pointer  rounded-l-full flex items-center justify-center">
                        <RightSideIcon color="white" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero ; 