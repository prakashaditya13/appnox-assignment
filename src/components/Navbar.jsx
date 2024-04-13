import React from "react";
import { Link } from "react-router-dom";
import {
  DownArrow,
  SearchIcon,
  LoginBackIcon,
  HamburgerIcon,
} from "../assets/icons";

const Navbar = () => {
  return (
    <>
      {/* Desktop Navabr Section */}
      <div className="__navabr__container__main desktop__navbar max-sm:hidden flex items-baseline justify-between w-full border-b h-fit px-12 py-2">
        {/* Logo Section */}
        <div className="__logo__section">
          <h4 className="text-[28px] text-[#111111] font-medium font-serif">
            Mediartrade
          </h4>
        </div>

        {/* Menu Section */}
        <div className="__menu__section">
          <ul className="flex gap-[24px] font-medium text-[15px] [&>li]:hover:cursor-pointer">
            <li>Prossime Aste</li>
            <li>Private Sale</li>
            <li>Accedi</li>
            <li className="flex items-baseline gap-[6px]">
              <span>IT</span>
              <img
                src={DownArrow}
                alt="downArrow"
                className="max-w-[10px] max-h-[9px]"
              />
            </li>
            <li className="pt-1">
              <Link to="/">
                <img
                  src={SearchIcon}
                  alt="searchIcon"
                  className="max-w-[18px] max-h-[18px]"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Navabr Section */}
      <div className="__navabr__container__main mobile__navbar lg:hidden md:hidden flex items-baseline justify-between w-full border-b h-fit px-4 py-2">
        {/* Logo Section */}
        <div className="__logo__section">
          <h4 className="text-xl text-[#111111] font-medium font-serif">
            Mediartrade
          </h4>
        </div>

        {/* Menu Section */}
        <div className="__menu__section">
          <ul className="flex gap-[24px] font-medium text-[15px] [&>li]:hover:cursor-pointer">
            <li className="pt-1">
              <Link to="/">
                <img
                  src={LoginBackIcon}
                  alt="loginBackIcon"
                  className="max-w-[18px] max-h-[18px]"
                />
              </Link>
            </li>
            <li className="pt-1">
              <Link to="/">
                <img
                  src={SearchIcon}
                  alt="searchIcon"
                  className="max-w-[18px] max-h-[18px]"
                />
              </Link>
            </li>

            <li className="pt-1">
              <Link to="/">
                <img
                  src={HamburgerIcon}
                  alt="hamburgerMenu"
                  className="max-w-[18px] max-h-[18px]"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
