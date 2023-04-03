import { FillHeart, FillStar, Icon, Truck } from "./Icon";
import OurService from './OurServices' ; 
const AboutUs = () => {
    return(
        <div className="flex flex-col container mx-auto">
            <div className="flex items-center gap-2 px-2">
                <span className="block">Home</span>
                <span className="text-secondaryBlue font-semibold text-lg">
                    {
                        '>'
                    }
                </span>
                <span className="block">
                    About Us
                </span>
            </div>
            <h1 className="text-2xl font-bold mt-4 px-2">
                About Us
            </h1>
            <div className="grid grid-rows-[auto_1fr] bg-gray-200 mt-4">
                <div className="flex items-center justify-center h-full">
                    <img src="./assets/ShopTable.png" className="object-center object-cover"/>
                </div>
                <div className="flex flex-col p-4 px-6 bg-black text-white">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl font-semibold max-w-[12rem]">
                            A Family That Keeps On Growing
                        </h2>
                        <span className="font-[300]">
                            We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.
                        </span>
                        <span className="font-[300]">
                            Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.
                        </span>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-[auto_1fr]">
                <div className="flex items-center justify-center h-full">
                    <img src="./assets/KeyBoardShop.png" className="object-center object-cover"/>
                </div>
                <div className="flex flex-col p-4 px-6">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl font-semibold max-w-[12rem] flex flex-col ">
                            <div className="w-8 h-8 flex items-center justify-center bg-secondaryBlue rounded-[3rem_3rem_3rem_0]">
                                <Icon color='white' size="20" />
                            </div>
                            shop.com
                        </h2>
                        <span className="font-[300]">
                            Shop is a proudly Australian owned, Melbourne based supplier of I.T. goods and services, operating since 1991. Our client base encompasses individuals, small business, corporate and government organisations. We provide complete business IT solutions, centred on high quality hardware and exceptional customer service.
                        </span>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-[auto_1fr] bg-black pt-6">
                <div className="flex items-center justify-center h-full">
                    <img src="./assets/GreenCase.png" className="object-center object-cover"/>
                </div>
                <div className="flex flex-col p-4 px-6 text-white">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl font-semibold max-w-[12rem] flex flex-col">
                            <div className="w-8 h-8 flex items-center justify-center bg-secondaryBlue rounded-[3rem_3rem_3rem_0]">
                                <FillHeart color='white' size="15" />
                            </div>
                            You're In Safe Hands
                        </h2>
                        <span className="font-[300]">
                            Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
                        </span>
                        <span className="font-[300]">
                            *Performance compared to i7-9700. Specs varies by model.
                        </span>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-[auto_1fr]">
                <div className="flex items-center justify-center ">
                    <img src="./assets/RGBCase.png" className="object-center object-cover"/>
                </div>
                <div className="flex flex-col p-4 px-6">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl font-semibold max-w-[12rem] flex flex-col">
                            <div className="w-8 h-8 flex items-center justify-center bg-secondaryBlue rounded-[3rem_3rem_3rem_0]">
                                <FillStar color='white' size="15" />
                            </div>
                            The Highest Quality of Productsau
                        </h2>
                        <span className="font-[300]">
                            We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.
                        </span>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-[auto_1fr] bg-black pt-6">
                <div className="flex items-center justify-center h-full">
                    <img src="./assets/MostCreativeCase.png" className="object-center object-cover"/>
                </div>
                <div className="flex flex-col p-4 px-6 text-white">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl font-semibold max-w-[12rem] flex flex-col">
                            <div className="w-8 h-8 flex items-center justify-center bg-secondaryBlue rounded-[3rem_3rem_3rem_0]">
                                <Truck color='white' size="15" />
                            </div>
                            Delivery to All Regions
                        </h2>
                        <span className="font-[300]">
                            We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be.
                        </span>
                    </div>
                </div>
            </div>
            <OurService />
        </div>
    )
}
export default AboutUs ;