import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white py-13 space-y-2">
      <h2>
        <a className="text-blue text-xl" href="index.html">
          Auction<span className="text-yellow font-bold">Gallery</span>
        </a>
      </h2>
      <ul className="flex gap-2">
        <li className="font-medium">Bid.</li>
        <li className="font-medium">Win.</li>
        <li className="font-medium">Own.</li>
      </ul>
      <ul className="flex items-center gap-8 md:gap-14 mt-2">
          <li>
            <a className="text-lg hover:text-blue" href="#">Home</a>
          </li>
          <li>
            <a className="text-lg hover:text-blue" href="#">Auctions</a>
          </li>
          <li>
            <a className="text-lg hover:text-blue" href="#">Categories</a>
          </li>
          <li>
            <a className="text-lg hover:text-blue" href="#">How to works</a>
          </li>
          
        </ul>
        <h2 className="mt-4">© 2025 AuctionHub. All rights reserved.</h2>
    </div>
  );
};

export default Footer;
