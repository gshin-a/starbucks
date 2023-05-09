// prettier-ignore
"use client"

import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import Image from "next/image";
import delay from "@/utils/delay";
import { noticeList } from "@/constants/home";
import Link from "next/link";
import { bnrState, animateCloseBnrState } from "@/recoil/states";

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
      className="screen1:w-[45.625rem] screen1:h-full screen6:w-[55%] screen16:w-[55%] screen18:w-full screen18:h-1/2 screen19:w-full screen19:h-1/2"
    >
      <div className="flex justify-between screen1:w-[38.8125rem] screen1:mt-[0.8125rem] screen1:mr-0 screen1:mb-0 screen1:ml-[5.5625rem] screen1:h-[2.25rem] screen6:mt-[0.8125rem] screen6:mr-0 screen6:mb-0 screen6:ml-5 screen6:w-[84%] screen16:w-[90%] screen16:mt-[1.125rem] screen16:mr-0 screen16:mb-0 screen16:ml-5 screen16:h-[2.75rem] screen18:h-10 screen18:mt-[0.9375rem] screen18:mr-0 screen18:mb-0 screen18:ml-[0.3125rem] screen18:w-[90%] screen19:h-[3.4375rem] screen19:mt-[1.75rem] screen19:mr-0 screen19:mb-0 screen19:ml-5 screen19:w-[90%]">
        <div className="relative screen1:w-[30.875rem] h-[2.0625rem] screen6:w-[85%] screen16:w-[85%] screen16:h-[2.75rem] screen18:h-10 screen18:w-[85%] screen19:h-[3.4375rem] screen19:w-[85%]">
          <Image
            src="/assets/img/home/notice_ttl.png"
            alt="notice"
            width={65}
            height={17}
            className="block screen18:hidden screen19:hidden absolute overflow-hidden indent-[-20000px] top-2.5 left-0"
          />
          <Image
            src="/assets/img/home/icon_board_speaker.png"
            alt="notice"
            width={33}
            height={32}
            className="hidden screen18:block screen19:block absolute overflow-hidden indent-[-20000px] top-[0.3125rem] left-0 h-8 mx-4 w-[2.0625rem]"
          />
          <div className="absolute overflow-hidden indent-[15px] screen18:indent-0 screen19:indent-0 screen18: w-[32.5rem] h-6 top-[0.5625rem] left-[4.0625rem] screen18:w-[25rem] screen19:top-5">
            <ul className="noticelist">
              {noticeList.map(({ id, name }, idx) => (
                <li
                  key={id}
                  className={`noticelistItem h-6 leading-6 screen6:w-[55%] screen18:w-1/2 screen19:w-3/5 ${
                    idx === curNotice ? "animate-down overflow-hidden" : ""
                  } `}
                >
                  <Link
                    href="#"
                    className="text-white w-full overflow-hidden block h-full text-ellipsis whitespace-nowrap screen1:text-[0.875rem] text-[1rem] screen19:text-[1.125rem]"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative screen1:w-9 screen1:h-9  screen16:w-[2.6875rem] screen16:h-[2.75rem] screen18:h-10 screen18:w-10 screen19:w-[3.4375rem] screen19:h-[3.4375rem]">
          <span className="absolute bg-[url('/assets/img/home/btn_notice_plus.png')] bg-100auto bg-no-repeat h-9 w-9 left-0 top-0 screen16:bg-100auto screen16:h-[2.75rem] screen16:w-[2.6875rem] screen18:h-[1.875rem] screen18:w-[1.875rem] screen18:top-1 screen19:bg-100auto screen19:h-10 screen19:left-auto screen19:right-0 screen19:top-[0.4375rem] screen19:w-10">
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

function RightNoticeLine() {
  const [openBnr, setOpenBnr] = useRecoilState(bnrState);
  const [animateCloseBnr, setAnimateCloseBnr] =
    useRecoilState(animateCloseBnrState);

  async function closeBnr() {
    setAnimateCloseBnr(true);
    await delay(0.5);
    setOpenBnr(false);
    setAnimateCloseBnr(false);
  }

  return (
    <div className="relative screen1:w-[34.375rem] screen1:h-[3.875rem] screen1:z-10 screen6:w-[45%] screen16:h-20 screen16:w-[45%] screen18:w-full screen18:h-1/2 screen19:w-full screen19:h-1/2">
      <button
        className="absolute screen1:w-[14.625rem] screen1:h-9 screen1:top-[0.8125rem] screen1:left-[37%] screen6:left-[10%] screen16:h-[2.75rem] screen16:left-[10%] screen16:top-[1.125rem] screen16:w-[14.6875rem] screen18:h-10 screen18:left-1/2 screen18:-ml-[6.25rem] screen18:top-[0.875rem] screen18:w-[12.4375rem] screen19:h-[3.4375rem] screen19:left-1/2 screen19:-ml-40 screen19:top-[1.75rem] screen19:w-[18.875rem]"
        onClick={() => {
          openBnr ? closeBnr() : setOpenBnr(!openBnr);
        }}
      >
        <p className="absolute overflow-hidden bg-[url('/assets/img/home/prom_ttl_b.png')] bg-no-repeat screen1:w-[8.0625rem] screen1:h-[1.0625rem] screen1:top-[0.5625rem] screen1:left-0 screen1:bg-100auto screen16:h-[1.0625rem] screen16:left-0 screen16:top-[0.875rem] screen16:w-[8.0625rem] screen16:bg-100auto screen18:bg-100auto screen18:h-[1.125rem] screen18:left-0 screen18:top-3 screen18:w-[8.9375rem] screen19:bg-100auto screen19:h-[1.75rem] screen19:left-0 screen19:top-[0.8125rem] screen19:w-[13.8125rem]"></p>
        <span className="absolute overflow-hidden screen1:w-[2.1875rem] screen1:h-[2.1875rem] screen1:right-0 screen1:top-0 screen16:h-[2.6875rem] screen16:right-0 screen16:top-0 screen16:w-[2.6875rem] screen18:w-[1.875rem] screen18:h-[1.875rem] screen18:top-1 screen18:right-0 screen19:h-10 screen19:right-0 screen19:top-[0.4375rem] screen19:w-10">
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

export default function NoticeLine() {
  return (
    <div className="relative block w-full screen1:h-[3.875rem] screen16:h-20 screen18:h-[8.75rem] screen19:h-[13.75rem]">
      <div className="absolute top-0 left-0 bg-[#111] screen1:h-full screen1:w-1/2 screen16:h-20 screen16:w-[55%] screen18:h-[4.375rem] screen18:w-full screen19:w-full screen19:h-1/2"></div>
      <div className="absolute top-0 right-0 bg-[#f6f5ef] screen1:h-full screen1:w-1/2 screen16:h-20 screen16:w-[45%] screen18:h-[4.375rem] screen18:w-full screen18:top-[4.375rem]  screen19:w-full screen19:h-1/2 screen19:top-1/2"></div>
      <div className="absolute top-0 screen1:h-full screen1:w-[80rem] screen1:ml-[-40rem] screen1:bg-[url('/assets/img/home/line_notice_bg.jpg')] screen1:left-1/2 screen6:ml-[-30rem] screen6:w-[60rem] screen6:bg-none screen16:bg-none screen16:h-20 screen16:w-full screen18:w-full screen18:h-full  screen19:w-full screen19:h-full">
        <div className="flex w-full h-full screen18:flex-col screen19:flex-col">
          <LeftNoticeLine />
          <RightNoticeLine />
        </div>
      </div>
    </div>
  );
}
