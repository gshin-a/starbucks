// prettier-ignore
"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function UtilNav() {
  return <div></div>;
}

function Header() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header>
      <div className="fixed top-0 left-0 w-full bg-[#f6f5ef] border-b-[0.0625rem] border-b-solid border-b-[#e5e5e5] border-t-[0.125rem] border-t-solid border-t-black screen1:h-[7.5rem] screen1:z-[999]">
        <div className="relative my-0 mx-auto screen1:w-[68.75rem] screen1:h-[7.5rem] screen2:w-full screen2:h-[7.5rem]">
          <h1 className="absolute left-0 screen1:w-[4.6875rem] screen1:h-[4.6875rem] screen1:top-[1.375rem] screen1:z-[12] screen2:w-[4.6875rem] screen2:h-[4.6875rem] screen2:top-[1.375rem] screen2:left-5">
            <Link
              href="/"
              className="block w-full h-full overflow-hidden indent-[-100rem] bg-[url('/assets/img/home/logo.png')]"
            >
              스타벅스 코리아
            </Link>
          </h1>
          <nav
            className={`block absolute bg-[url('/assets/img/home/sdown_util_sep.png')] screen1:w-[29rem] screen1:h-5 screen1:top-[0.9375rem] screen1:right-[5.8125rem] ${
              showSearch ? "screen1:right-[14.5rem]" : ""
            }`}
          >
            <ul className="flex">
              <li className="text-center screen1:w-[4.75rem] screen1:h-5 ">
                <a
                  href="/login"
                  className="block text-[0.8125rem] text-[#555] screen1:leading-5"
                >
                  Sign In
                </a>
              </li>
              <li className="text-center screen1:w-[6.6875rem] screen1:h-5 screen1:ml-[0.0625rem] ">
                <a
                  href="/login"
                  className="block text-[0.8125rem] text-[#555] screen1:leading-5"
                >
                  My Starbucks
                </a>
              </li>
              <li className="text-center screen1:w-[11.3125rem] screen1:h-5 screen1:ml-[0.0625rem] ">
                <a
                  href="/login"
                  className="block text-[0.8125rem] text-[#555] screen1:leading-5"
                >
                  Customer Service & Ideas
                </a>
              </li>
              <li className="text-center screen1:w-[6.0625rem] screen1:h-5 screen1:ml-[0.0625rem] ">
                <a
                  href="/login"
                  className="block text-[0.8125rem] text-[#555] screen1:leading-5"
                >
                  Find a Store
                </a>
              </li>
            </ul>
          </nav>{" "}
          <div
            className={`absolute bg-white border-[0.0625rem] border-solid border-[#ccc] rounded-[0.3125rem] screen1:w-8 screen1:h-8 screen1:top-[0.5625rem] screen1:right-[3.375rem] ${
              showSearch ? "screen1:bg-white screen1:w-[11.25rem]" : ""
            }`}
          >
            <button
              onClick={() => setShowSearch(true)}
              className="block absolute right-0 top-0 screen1:h-[2.125rem] screen1:w-[2.125rem]"
            >
              <Image
                src="/assets/img/home/icon_magnifier_black.png"
                alt="icon_magnifier_black"
                width="20"
                height="21"
                className="absolute align-top max-w-full z-[1] screen1:right-[0.4375rem] screen1:top-[0.375rem]"
              />
            </button>
            {showSearch && (
              <input
                type="text"
                placeholder="통합검색"
                className="block absolute top-[0.3125rem] w-[7.6875rem] bg-none border-none text-[#777] text-[0.75rem] h-[1.375rem] left-0 py-0 px-[0.625rem] screen1:bg-none screen1:border-none screen1:text-[#777] screen1:block screen1:text-[0.75rem] screen1:h-[1.375rem] screen1:left-0 screen1:py-0 screen1:px-[0.625rem] screen1:absolute screen1:top-[0.3125rem] screen1:w-[7.6875rem]"
              />
            )}
          </div>
        </div>
        <nav className="absolute left-0 w-full z-[11] screen1:h-[4.125rem] screen1:top-[3.375rem]">
          <div className="flex justify-end my-0 mx-auto screen1:h-[4.125rem] screen1:w-[68.75rem] screen2:h-[4.125rem] screen2:w-full">
            <ul className="flex">
              <li className="w-[5.5625rem]">
                <a
                  href="/coffee"
                  className="text-[#333] block text-[0.8125rem] text-center w-full screen1:h-[3.5rem] leading-5 pt-[0.625rem]"
                >
                  COFFEE
                </a>
              </li>
              <li className="w-[4.5625rem]">
                <a
                  href="/menu"
                  className="text-[#333] block text-[0.8125rem] text-center w-full screen1:h-[3.5rem] leading-5 pt-[0.625rem]"
                >
                  MENU
                </a>
              </li>
              <li className="w-[4.9375rem]">
                <a
                  href="/store"
                  className="text-[#333] block text-[0.8125rem] text-center w-full screen1:h-[3.5rem] leading-5 pt-[0.625rem]"
                >
                  STORE
                </a>
              </li>
              <li className="w-[9.5625rem]">
                <a
                  href="/responsibility"
                  className="text-[#333] block text-[0.8125rem] text-center w-full screen1:h-[3.5rem] leading-5 pt-[0.625rem]"
                >
                  RESPONSIBILITY
                </a>
              </li>
              <li className="w-[12.5rem]">
                <a
                  href="/reward"
                  className="text-[#333] block text-[0.8125rem] text-center w-full screen1:h-[3.5rem] leading-5 pt-[0.625rem]"
                >
                  STARBUCKS REWARDS
                </a>
              </li>
              <li className="w-[10.625rem]">
                <a
                  href="/sales"
                  className="text-[#333] block text-[0.8125rem] text-center w-full screen1:h-[3.5rem] leading-5 pt-[0.625rem]"
                >
                  CORPORATE SALES
                </a>
              </li>
              <li className="w-[8.1875rem]">
                <a
                  href="/new"
                  className="text-[#333] block text-[0.8125rem] text-center w-full screen1:h-[3.5rem] leading-5 pt-[0.625rem]"
                >
                  WHAT'S NEW
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
