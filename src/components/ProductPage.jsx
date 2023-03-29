import Banner from "./Banner";
import { Comparison, HeartLike, NovelLetter, ZipIcon } from "./Icon";

const ProductPage =() => {
    return (
        <div className="flex flex-col container mx-auto mt-4">
            <div className="block relative flex flex-col items-center justify-center">
                <img src="./assets/CustomBuilds/case-2.png" className="object-cover object-center " />
                <div className="absolute top-2 left-4 flex flex-col items-center gap-2">
                    <HeartLike />
                    <Comparison />
                    <NovelLetter />
                </div>
                <div className="flex items-center gap-2 mt-4">
                    <ZipIcon />
                    <a className="max-w-[12rem] text-sm leading-5 flex items-center before:h-7 before:mr-2 before:block before:content-[''] before:border before:rounded-full before:border-secondaryBlue ">
                        <span>own it now, up to 6 months interest free <span>learn more</span></span>
                    </a>
                </div>

            </div>
            {/*
                about product section
            */}
        </div>
    )
}
export default ProductPage ; 