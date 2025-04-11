import React from "react";
import {RxCross2} from "react-icons/rx";

const Favourite = ({favouriteItem, handleRemoveItem}) => {
  return (
    <div>
      {favouriteItem.map((item) => {
        return (
          <div key={item.id}>
            <div className="px-2 py-2 flex flex-col lg:flex-row items-center gap-2 md:gap-4 border-b border-[#DCE5F3]">
              <img className="w-13 h-13 rounded-lg object-cover" src={item.image} alt="" />
              <div>
                <h2 className="text-[#0E2954] font-medium">{item.title}</h2>
                <div className="flex mt-2 gap-4">
                  <span className="text-[#0E2954]">
                    ${item.currentBidPrice}
                  </span>
                  <span className="text-[#0E2954]">
                    Bids:{item.bidsCount}
                  </span>
                </div>
              </div>
              <div>
                <button onClick={() => handleRemoveItem(item.id)}>
                  <RxCross2 className="cursor-pointer text-xl font-semibold" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favourite;
