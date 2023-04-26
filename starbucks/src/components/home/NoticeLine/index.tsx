// prettier-ignore
"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import delay from "@/utils/delay";
import { noticeList } from "@/constants/home";

export default function NoticeLine() {
  const [curNotice, setCurNotice] = useState(-1);

  async function autoSlide() {
    setCurNotice(curNotice === 4 ? 0 : curNotice + 1);

    await delay(1);
    let firstItem = document.querySelector(".noticelistItem") as Element;
    let list = document.querySelector(".noticelist");
    list?.removeChild(firstItem);
    list?.appendChild(firstItem);
  }

  useEffect(() => {
    let noticeSlide = setInterval(() => {
      autoSlide();
    }, 2500);
    return () => clearInterval(noticeSlide);
  }, [autoSlide]);

  return (
    <div className="relative block w-full screen1:h-[3.875rem]">
      <div className="absolute top-0 left-0 bg-[#111] screen1:h-full screen1:w-1/2"></div>
      <div className="absolute top-0 right-0 bg-[#f6f5ef] screen1:h-full screen1:w-1/2"></div>
      <div className="absolute top-0 screen1:h-full screen1:w-[80rem] screen1:ml-[-40rem] screen1:left-1/2 screen6:ml-[-30rem] screen6:w-[60rem]">
        <div className="absolute screen1:w-[45.625rem] screen1:h-full screen6:w-[55%]">
          <div className="flex justify-between screen1:w-[38.8125rem] screen1:mt-[0.8125rem] screen1:mr-0 screen1:mb-0 screen1:ml-[5.5625rem] screen1:h-[2.25rem] screen6:mt-[0.8125rem] screen6:mr-0 screen6:mb-0 screen6:ml-5 screen6:w-[84%]">
            <div className="relative screen1:w-[30.875rem] h-[2.0625rem] screen6:w-[85%]">
              <Image
                src="/assets/img/home/notice_ttl.png"
                alt="notice"
                width={65}
                height={17}
                className="block absolute overflow-hidden indent-[-20000px] top-2.5 left-0"
              />
              <div className="absolute overflow-hidden indent-[15px] w-[32.5rem] h-6 top-[0.5625rem] left-[4.0625rem]">
                <ul className="noticelist text-[0.8125rem] text-white">
                  {noticeList.map(({ id, name }, idx) => (
                    <li
                      key={id}
                      className={`noticelistItem h-6 leading-6 screen6:w-[55%] ${
                        idx === curNotice ? "animate-down overflow-hidden" : ""
                      } `}
                    >
                      <a
                        href="#"
                        className="text-white w-full overflow-hidden block h-full text-ellipsis whitespace-nowrap screen1:text-[0.875rem]"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative screen1:w-9 screen1:h-9">
              <span className="absolute bg-[url('/assets/img/home/btn_notice_plus.png')] bg-cover h-9 w-9 left-0 top-0 ">
                <a href="#" className="cursor-pointer"></a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
