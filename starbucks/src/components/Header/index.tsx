// prettier-ignore
"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  UtilNavProps,
  SearchBtnProps,
  GnbSubItemProps,
  GnbSubProps,
} from "@/interfaces/header";
import { utilnavList, gnbsubList, gnbsubitemList } from "@/constants/header";

function UtilNav({ showSearch }: UtilNavProps) {
  return (
    <nav
      className={`block absolute bg-[url('/assets/img/header/sdown_util_sep.png')] transition-all screen1:w-[29rem] screen1:h-5 screen1:top-[0.9375rem] ${
        showSearch ? "screen1:right-[14.5rem]" : "screen1:right-[5.8125rem]"
      }`}
    >
      <ul className="flex">
        {utilnavList.map(({ id, name, link, w }) => (
          <li
            key={id}
            className={`text-center screen1:h-5 ${
              id !== 1 ? "screen1:ml-[0.0625rem]" : ""
            }`}
            style={{ width: `${w}rem` }}
          >
            <a
              href={link}
              className="block text-[0.8125rem] text-[#555] font-avenir screen1:leading-5"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SearchBtn({ showSearch, setShowSearch }: SearchBtnProps) {
  return (
    <div
      className={`absolute bg-white border-[0.0625rem] border-solid border-[#ccc] rounded-[0.3125rem] overflow-hidden transition-all screen1:w-8 screen1:h-8 screen1:top-[0.5625rem] screen1:right-[3.375rem] ${
        showSearch ? "screen1:bg-white screen1:w-[11.25rem]" : ""
      }`}
    >
      <button
        onClick={() => setShowSearch(true)}
        className="block absolute right-0 top-0 screen1:h-[2.125rem] screen1:w-[2.125rem]"
      >
        <Image
          src="/assets/img/header/icon_magnifier_black.png"
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
  );
}

function GnbSubItem({ gnbsubitemList, isLast }: GnbSubItemProps) {
  return (
    <ul
      className={`${
        isLast ? "basis-full pt-[1.875rem]" : ""
      } screen1:w-[13.75rem] screen2:w-[13.75rem]`}
    >
      <li className="w-full screen1:py-[0.1875rem] screen1:px-0 screen1:pb-3">
        <a
          href={gnbsubitemList[0].link}
          className="screen1:text-white screen1:text-[0.875rem] font-normal"
        >
          {gnbsubitemList[0].name}
        </a>
      </li>

      {gnbsubitemList.map(
        ({ id, name, link }) =>
          id !== 1 && (
            <li key={id} className="w-full screen1:py-[0.1875rem] screen1:px-0">
              <a href={link} className="text-[#999] text-[0.75rem]">
                {name}
              </a>
            </li>
          )
      )}
    </ul>
  );
}

function GnbSub({ gnbsubList }: GnbSubProps) {
  return (
    <nav className="absolute left-0 w-full z-[11] screen1:h-[4.125rem] screen1:top-[3.375rem]">
      <div className="flex justify-end my-0 mx-auto screen1:h-[4.125rem] screen1:w-[68.75rem] screen2:h-[4.125rem] screen2:w-full">
        <ul className="flex">
          {gnbsubList.map(({ id, name, link, w, eng }) => (
            <li key={id} style={{ width: `${w}rem` }} className="group">
              <a
                href={link}
                className="text-[#333] block text-[0.8125rem] text-center w-full font-avenir screen1:h-[3.5rem] leading-5 pt-[0.625rem] group-hover:bg-[#2C2A29] group-hover:text-[#669900]"
              >
                {name}
              </a>

              <div className="max-h-0 overflow-hidden group-hover:max-h-[100vh] w-full bg-[#2C2A29] absolute transition-all duration-500 screen1:left-0 screen1:top-[4.125rem]">
                <div className="inline-block w-full screen1:py-5 ">
                  <div className="flex flex-wrap relative left-1/2 screen1:w-[68.75rem] screen1:ml-[-34.375rem] screen2:left-5 screen2:ml-0 screen2:relative screen2:w-full">
                    {gnbsubitemList[eng as keyof typeof gnbsubitemList].map(
                      (e, idx) => (
                        <GnbSubItem
                          key={idx}
                          gnbsubitemList={e}
                          isLast={
                            idx ===
                              gnbsubitemList[eng as keyof typeof gnbsubitemList]
                                .length -
                                1 && idx >= 4
                          }
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Header() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="relative h-[7.5rem]">
      <div className="fixed top-0 left-0 w-full bg-[#f6f5ef] border-b-[0.0625rem] border-b-solid border-b-[#e5e5e5] border-t-[0.125rem] border-t-solid border-t-black screen1:h-[7.5rem] screen1:z-[999]">
        <div className="relative my-0 mx-auto screen1:w-[68.75rem] screen1:h-[7.5rem] screen2:w-full screen2:h-[7.5rem]">
          <h1 className="absolute left-0 screen1:w-[4.6875rem] screen1:h-[4.6875rem] screen1:top-[1.375rem] screen1:z-[12] screen2:w-[4.6875rem] screen2:h-[4.6875rem] screen2:top-[1.375rem] screen2:left-5">
            <Link
              href="/"
              className="block w-full h-full overflow-hidden indent-[-100rem] bg-[url('/assets/img/header/logo.png')]"
            >
              스타벅스 코리아
            </Link>
          </h1>
          <UtilNav showSearch={showSearch} />
          <SearchBtn showSearch={showSearch} setShowSearch={setShowSearch} />
        </div>
        <GnbSub gnbsubList={gnbsubList} />
      </div>
    </header>
  );
}

export default Header;
