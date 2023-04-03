const AboutUs = () => {
    return(
        <div className="flex flex-col container mx-auto px-2">
            <div className="flex items-center gap-2">
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
            <h1 className="text-2xl font-bold mt-4">
                About Us
            </h1>
            <div className="grid grid-rows-[1fr_2fr] bg-gray-200">
                <div>
                    <img src="./assets/ShopTable.png" />
                </div>
                <div className="flex flex-col p-4 bg-black text-white">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-lg font-semibold max-w-[10rem]">
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
        </div>
    )
}
export default AboutUs ;