import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-[url(../public/Banner-min.jpg)] bg-right bg-cover bg-no-repeat text-white"
    
    >
        
        <div className="px-4 md:px-8 lg:px-30  hero-overlay flex items-center space-y-2">
            <div>
                <h1 className="text-5xl font-semibold leading-14">Bid on Unique Items from <br /> Around the World</h1>
                <p className="mt-3 font-light text-lg text-[#FFFFFF]">Discover rare collectibles, luxury goods, and vintage <br/> treasures in our curated auctions</p>
                <button className="hover:bg-blue hover:text-white border-transparent mt-5 py-6 px-8 btn rounded-3xl">Explore Auctions</button>
                
            </div>
            
        </div>
        
    </div>
  );
};

export default Hero;
