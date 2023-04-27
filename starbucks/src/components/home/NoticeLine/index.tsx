// prettier-ignore
"use client"

import { useState, useEffect, SetStateAction } from "react";
import Image from "next/image";
import delay from "@/utils/delay";
import { noticeList } from "@/constants/home";
import Link from "next/link";

function LeftNoticeLine() {
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
    <div
      id="leftnoticeline"
      className="screen1:w-[45.625rem] screen1:h-full screen6:w-[55%]"
    >
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
                  <Link
                    href="#"
                    className="text-white w-full overflow-hidden block h-full text-ellipsis whitespace-nowrap screen1:text-[0.875rem]"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative screen1:w-9 screen1:h-9">
          <span className="absolute bg-[url('/assets/img/home/btn_notice_plus.png')] bg-cover h-9 w-9 left-0 top-0 ">
            <Link
              href="#"
              className="cursor-pointer text-[0.875rem] block h-full w-full overflow-hidden"
            ></Link>
          </span>
        </div>
      </div>
    </div>
  );
}

interface NoticeLineProps {
  openBnr: boolean;
  setOpenBnr: React.Dispatch<SetStateAction<boolean>>;
  closeBnr: () => void;
}

function RightNoticeLine({ openBnr, setOpenBnr, closeBnr }: NoticeLineProps) {
  return (
    <div className="relative screen1:w-[34.375rem] screen1:h-[3.875rem] screen1:z-10 screen6:w-[45%]">
      <button
        className="absolute screen1:w-[14.625rem] screen1:h-9 screen1:top-[0.8125rem] screen1:left-[37%] screen6:left-[10%]"
        onClick={() => {
          openBnr ? closeBnr() : setOpenBnr(!openBnr);
        }}
      >
        <p className="absolute overflow-hidden bg-[url('/assets/img/home/prom_ttl_b.png')] screen1:w-[8.0625rem] screen1:h-[1.0625rem] screen1:top-[0.5625rem] screen1:left-0 bg-100auto"></p>
        <span className="absolute overflow-hidden screen1:w-[2.1875rem] screen1:h-[2.1875rem] screen1:right-0 screen1:top-0">
          <Image
            src={
              openBnr
                ? "/assets/img/home/btn_prom_up.png"
                : "/assets/img/home/btn_prom_down.png"
            }
            alt="btn_prom_down"
            className="max-w-full"
            width={36}
            height={36}
          />
        </span>
      </button>
    </div>
  );
}

export default function NoticeLine({
  openBnr,
  setOpenBnr,
  closeBnr,
}: NoticeLineProps) {
  return (
    <div className="relative block w-full screen1:h-[3.875rem]">
      <div className="absolute top-0 left-0 bg-[#111] screen1:h-full screen1:w-1/2"></div>
      <div className="absolute top-0 right-0 bg-[#f6f5ef] screen1:h-full screen1:w-1/2"></div>
      <div className="absolute top-0 screen1:h-full screen1:w-[80rem] screen1:ml-[-40rem] screen1:bg-[url('/assets/img/home/line_notice_bg.jpg')] screen1:left-1/2 screen6:ml-[-30rem] screen6:w-[60rem] screen6:bg-none">
        <div className="flex w-full h-full">
          <LeftNoticeLine />
          <RightNoticeLine
            openBnr={openBnr}
            setOpenBnr={setOpenBnr}
            closeBnr={closeBnr}
          />
        </div>
      </div>
    </div>
  );
}
