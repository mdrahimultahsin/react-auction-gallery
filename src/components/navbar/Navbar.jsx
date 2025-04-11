import React from "react";
import {IoMdMenu, IoMdNotificationsOutline} from "react-icons/io";
import {RxCross2} from "react-icons/rx";
import { handleHideMenu, handleShowMenu } from "./navbarFn";

export const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-4 bg-white px-4 md:px-8 lg:px-20">
        <div>
          <h2>
            <a className="text-blue text-xl" href="index.html">
              Auction<span className="text-yellow font-bold">Gallery</span>
            </a>
          </h2>
        </div>
        <div>
          <ul className={`hidden md:flex items-center gap-8 md:gap-14`}>
            <li>
              <a className="text-lg md:text-xl hover:text-blue" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-lg md:text-xl hover:text-blue" href="#">
                Auctions
              </a>
            </li>
            <li>
              <a className="text-lg md:text-xl hover:text-blue" href="#">
                Categories
              </a>
            </li>
            <li>
              <a className="text-lg md:text-xl hover:text-blue" href="#">
                How to works
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <div className="indicator bg-[#EBF0F5] p-2 rounded-full">
            <IoMdNotificationsOutline className="text-blue text-2xl" />
            <span className="rounded-full p-1 badge badge-sm bg-[#0E2954] text-white font-bold indicator-item">
              7
            </span>
          </div>

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          <IoMdMenu
            id="menubarIcon"
            onClick={handleShowMenu}
            className="md:hidden text-2xl "
          />
          <RxCross2
            id="menuCloseIcon"
            onClick={handleHideMenu}
            className="hidden text-2xl "
          />
        </div>
      </div>

      <ul
        id="mobileMenu"
        className="hidden md:hidden flex-col items-center gap-2 absolute z-1 bg-[#EBF0F5] right-0 top-18 p-4"
      >
        <li>
          <a className="text-lg md:text-xl hover:text-blue" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="text-lg md:text-xl hover:text-blue" href="#">
            Auctions
          </a>
        </li>
        <li>
          <a className="text-lg md:text-xl hover:text-blue" href="#">
            Categories
          </a>
        </li>
        <li>
          <a className="text-lg md:text-xl hover:text-blue" href="#">
            How to works
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
