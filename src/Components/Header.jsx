import React from "react";
import logo from "../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiPlus,
} from "react-icons/hi2";
import HeaderItem from "./HeaderItem";

function Header() {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex items-center p-5 justify-between">
      <div className="flex gap-8 items-center">
        <img
          src={logo}
          className="w-[80px] 
        md:w-[115px] object-cover"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full"
      />
    </div>
  );
}

export default Header;
