import React from "react";
import {FaHeart, FaRegHeart} from "react-icons/fa";
const Item = ({item, handleBid, selectedItemIds}) => {
  const {image, title, currentBidPrice, timeLeft} = item;
  return (
    <tr className="border-b border-[#DCE5F3]">
      <td className="p-4">
        <div className="flex items-center gap-4">
          <img
            className="w-12 h-12 object-cover"
            src={image}
            alt="Vintage Leica M3 Camera"
          />
          <span>{title}</span>
        </div>
      </td>
      <td className="p-4 font-semibold">${currentBidPrice}</td>
      <td className="p-4 text-gray-600">{timeLeft}</td>
      <td className="p-4">
        <div className="flex justify-center items-center">

                    
          <button
            onClick={() => handleBid(item)}
            disabled={selectedItemIds.includes(item.id)}
            className={`${
              selectedItemIds.includes(item.id)
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            {selectedItemIds.includes(item.id) ? (
              <FaHeart className="scale-110 text-center text-2xl text-red-500" />
            ) : (
              <FaRegHeart className=" text-center text-2xl" />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Item;
