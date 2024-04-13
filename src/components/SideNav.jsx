import React from "react";
import { Link } from "react-router-dom";
import {
  LoginBackIcon,
  CollectionIcon,
  LiveTVIcon,
  HelpOutlineIcon,
  TextSMSIcon,
} from "../assets/icons";

const SideNav = () => {
  return (
    <div className="__sideNav__section__ max-sm:hidden min-w-[4%] max-lg:min-w-[6%] border-r h-screen sticky top-0">
      <div className="__sidebar__content__section flex flex-col justify-between items-center h-screen py-5">
        <div className="__loginback__section">
          <Link to="#">
            <img
              src={LoginBackIcon}
              alt="login_back_Icon"
              className="w-[32px] h-[32px] md:w-[25px] md:h-[25px]"
            />
          </Link>
        </div>

        <div className="__entertainment__section flex flex-col gap-[20px]">
          <Link to="#">
            <img
              src={CollectionIcon}
              alt="collection__icon"
              className="w-[32px] h-[32px] md:w-[25px] md:h-[25px]"
            />
          </Link>
          <Link to="#">
            <div className="relative">
              <img
                src={LiveTVIcon}
                alt="liveTV_Icon"
                className="w-[32px] h-[32px] md:w-[25px] md:h-[25px]"
              />
              <span className="text-[40px] text-[#EA0000] absolute top-[-45px] right-[-7px]">
                .
              </span>
            </div>
          </Link>
          <Link to="#">
            <img
              src={HelpOutlineIcon}
              alt="help_Icon"
              className="w-[32px] h-[32px] md:w-[25px] md:h-[25px]"
            />
          </Link>
        </div>

        <div className="__message__section">
          <Link>
            <img
              src={TextSMSIcon}
              alt="textSMSIcon"
              className="w-[32px] h-[32px] md:w-[25px] md:h-[25px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
