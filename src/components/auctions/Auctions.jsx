import React, {useEffect, useState} from "react";
import Favourite from "../favourite/Favourite";
import Item from "../item/Item";
import {FaRegHeart} from "react-icons/fa";
import {toast} from "react-toastify";
// import { getFavItemFromStorage,addFavItemToStorage } from "../../localStorage";

const Auctions = () => {
  const addedItemToast = () =>
    toast.success("🚀 Item added to the Favourite", {
      theme: "light",
      autoClose: 3000,
    });
  const removeItemToast = () =>
    toast.warn("Item removed From Favourite", {
      theme: "colored",
      autoClose: 2000,
    });
    
  const [items, setItems] = useState([]);
  const [favouriteItem, setFavouriteItem] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedItemIds, setSelectedItemIds] =useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleBid = (item) => {

    setFavouriteItem([...favouriteItem, item]);
    setSelectedItemIds([...selectedItemIds,item.id])
    
    let currentPrice = Number(item.currentBidPrice.split(",").join(""));
    setTotalAmount((prev) => prev + currentPrice);

    // addFavItemToStorage(item.id)

    addedItemToast();
  };
  
  // useEffect(()=> {
  //   const newItems =[]
  //   const storedItemIds = getFavItemFromStorage();
  //   for(const id of storedItemIds){
  //     const storedItem = items.find(item=> item.id=== id);
  //     if(storedItem){
  //       newItems.push(storedItem)
  //     }
  //     setFavouriteItem(newItems)
  //   }
  // },[items])
  const handleRemoveItem = (id) => {
    const itemToRemove = favouriteItem.find((item) => item.id === id);

    const remainingItems = favouriteItem.filter((item) => item.id !== id);
    setFavouriteItem(remainingItems);

    const price = parseInt(itemToRemove.currentBidPrice.split(",").join(""));

    setTotalAmount(totalAmount - price);
    removeItemToast();
    const remaningSelectedIds = selectedItemIds.filter(selectedId=> selectedId!==itemToRemove.id)
    setSelectedItemIds(remaningSelectedIds)
  };




  return (
    <div className="mt-25 px-4 md:px-8 lg:px-20 pb-20">
      <h1 className="font-medium text-3xl text-blue">Active Auctions</h1>
      <p className="text-lg mt-1">Discover and bid on extraordinary items</p>
      <div className="mt-4 grid grid-cols-4 gap-5 items-start">
        <div
          className="col-span-3 bg-white rounded-xl pt
        -2"
        >
          <table className="w-full rounded-xl table-auto text-left border-collapse">
            <thead className="border-b rounded-xl  border-[#DCE5F3] bg-gray-50">
              <tr className="rounded-xl">
                <th className="p-4 font-medium rounded-xl ">Items</th>
                <th className="p-4 font-medium">Current Bid</th>
                <th className="p-4 font-medium">Time Left</th>
                <th className="p-4 font-medium rounded-xl">Bid Now</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <Item
                  selectedItemIds={selectedItemIds}
                  handleBid={handleBid}
                  key={item.id}
                  item={item}
                ></Item>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col justify-between p-4 col-span-1 bg-white rounded-xl">
          <div>
            <h2 className="flex justify-center gap-2 items-center py-4 border-b border-[#DCE5F3] text-center text-[#0E2954] text-xl">
              <FaRegHeart />
              Favorite Items
            </h2>
          </div>

          {favouriteItem.length === 0 ? (
            <div className="py-5 flex justify-center items-center flex-col text-center border-b border-[#DCE5F3] flex-1">
              <h3 className="font-medium text-xl">No favourtie yet</h3>
              <p className="mt-2 text-sm px-4">
                Click the heart icon on any item to add it to your favorites
              </p>
            </div>
          ) : (
            <Favourite
              handleRemoveItem={handleRemoveItem}
              favouriteItem={favouriteItem}
            ></Favourite>
          )}

          <div className="pt-4 flex justify-between items-center">
            <h2 className="text-lg font-medium">Total Bid Amount:</h2>{" "}
            <span className="text-lg font-medium">
              ${totalAmount == 0 ? "0000" : totalAmount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auctions;
