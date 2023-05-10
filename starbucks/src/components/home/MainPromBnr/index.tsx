import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import delay from "@/utils/delay";
import {
  BnrSlideProps,
  ControllerProps,
  MakeSrcIdxProps,
  BnrSlideItemProps,
  ControllerButtonProps,
} from "@/interfaces/home";
import { mainBnrList } from "@/constants/home";

import { useRecoilState } from "recoil";
import { bnrState, animateCloseBnrState } from "@/recoil/states";

function makeSrcIdx({ idx, curItem }: MakeSrcIdxProps) {
  switch (idx) {
    case 1:
    case 4:
    case 7:
      return curItem;
    case 2:
    case 5:
      return curItem === 2 ? 0 : curItem + 1;
    default:
      return curItem === 0 ? 2 : curItem - 1;
  }
}

function BnrSlideItem({
  setMouseOver,
  curItem,
  idx,
  setCurItem,
  setDiffX,
  setStopSlide,
  setTouchEnd,
  setButtonState,
}: BnrSlideItemProps) {
  const [curX, setCurX] = useState(0);
  return (
    <li
      className={`relative screen16:w-[31.25rem] screen16:my-0 screen16:mx-[0.3125rem] screen19:w-[31.25rem] screen19:my-0 screen19:mx-[0.3125rem] screen18:w-[100vw] ${
        idx === 4 ? "opacity-1" : "opacity-[0.4]"
      } screen1:my-0 screen1:mx-[0.3125rem]`}
      onMouseEnter={() => idx === 4 && setMouseOver(true)}
      onMouseLeave={() => idx === 4 && setMouseOver(false)}
      onTouchStart={(e) => {
        if (idx === 4) {
          setCurX(e.touches[0].pageX);
        }
      }}
      onTouchEnd={async (e) => {
        if (idx === 4) {
          setTouchEnd(true);
          let itemWidth = -1 as number | string;
          if (screen.width > 960) {
            itemWidth = 829;
          } else if (screen.width > 481) {
            itemWidth = 510;
          } else {
            itemWidth = "100vw";
          }

          if (e.changedTouches[0].pageX - curX < 0) {
            setDiffX(
              typeof itemWidth === "string" ? `-${itemWidth}` : -itemWidth
            );
            setButtonState(curItem === 2 ? 0 : curItem + 1);
            await delay(1);
            setCurItem(curItem === 2 ? 0 : curItem + 1);
          } else if (e.changedTouches[0].pageX - curX > 0) {
            setDiffX(itemWidth);
            setButtonState(curItem === 0 ? 2 : curItem - 1);
            await delay(1);
            setCurItem(curItem === 0 ? 2 : curItem - 1);
          }

          setTouchEnd(false);
          setDiffX(0);
        }
      }}
      onTouchMove={(e) => {
        if (idx === 4) {
          setStopSlide(true);
          const diffX = e.changedTouches[0].pageX - curX;
          setDiffX(diffX);
        }
      }}
    >
      <Image
        src={mainBnrList[makeSrcIdx({ idx, curItem })]}
        alt="mainprombnr"
        width={819}
        height={553}
      />
      <Link
        href="#"
        className="relative block border-[0.125rem] border-solid border-[#222] rounded-[0.1875rem] text-[#222] text-[0.875rem] w-[7.5625rem] h-[2.125rem] leading-[2.125rem] mt-[-3.125rem] mx-auto mb-0 text-center transition-colors duration-700 hover:bg-[#222] hover:text-white hover:rounded-[0.1875rem] hover:font-bold screen16:-mt-[1.875rem] screen16:mx-auto screen16:mb-0 screen19:-mt-[1.875rem] screen19:mx-auto screen19:mb-0 screen18:mt-[0.3125rem] screen18:mx-auto screen18:mb-0"
      >
        자세히 보기
      </Link>
    </li>
  );
}

function BnrSlide({
  curItem,
  slidingState,
  setMouseOver,
  setCurItem,
  setStopSlide,
  setButtonState,
}: BnrSlideProps) {
  const [diffX, setDiffX] = useState<string | number>(0);
  const [touchEnd, setTouchEnd] = useState(false);

  return (
    <ul
      id="bnrslide"
      className={`relative flex w-[1000%] left-[-146.96875rem] screen16:left-[-92.1875rem] screen19:left-[-92.1875rem] screen18:left-[-300vw] ${
        touchEnd ? "transition-[margin] duration-500" : ""
      } ${
        slidingState === "prev"
          ? "animate-prevSlide screen16:animate-prevSlideT screen19:animate-prevSlideT screen18:animate-prevSlideM"
          : ""
      } ${
        slidingState === "prev2"
          ? "animate-prevSlide2 screen16:animate-prevSlide2T screen19:animate-prevSlide2T screen18:animate-prevSlide2M"
          : ""
      } ${
        slidingState === "next"
          ? "animate-nextSlide screen16:animate-nextSlideT screen19:animate-nextSlideT screen18:animate-nextSlideM"
          : ""
      } ${
        slidingState === "next2"
          ? "animate-nextSlide2 screen16:animate-nextSlide2T screen19:animate-nextSlide2T screen18:animate-nextSlide2M"
          : ""
      }`}
      style={{ marginLeft: diffX }}
    >
      {[1, 2, 3, 4, 5, 6, 7].map((e) => (
        <BnrSlideItem
          key={e}
          setMouseOver={setMouseOver}
          curItem={curItem}
          idx={e}
          setCurItem={setCurItem}
          setDiffX={setDiffX}
          setStopSlide={setStopSlide}
          setTouchEnd={setTouchEnd}
          setButtonState={setButtonState}
        />
      ))}
    </ul>
  );
}

function ControllerButton({
  buttonState,
  curbuttonNum,
  clickControlButton,
  isDisabled,
}: ControllerButtonProps) {
  return (
    <div className="inline-block h-3">
      <button
        className={`ml-[0.625rem] ${
          buttonState === curbuttonNum
            ? `bg-[url('/assets/img/home/main_prom_on.png')]`
            : "bg-[url('/assets/img/home/main_prom_off.png')]"
        } w-[0.8125rem] h-3`}
        onClick={() => clickControlButton(curbuttonNum)}
        disabled={isDisabled}
      ></button>
    </div>
  );
}

function Controller({
  stopSlide,
  setStopSlide,
  buttonState,
  clickControlButton,
  isDisabled,
}: ControllerProps) {
  return (
    <div className="absolute w-full h-3 text-center z-[9999] bottom-[-1.875rem] screen16:bottom-[1.875rem] screen19:bottom-[1.875rem] screen18:bottom-[1.875rem]">
      <button
        className={`inline-block relative w-[0.5625rem] h-3 ${
          stopSlide
            ? `bg-[url('/assets/img/home/main_prom_play.png')]`
            : "bg-[url('/assets/img/home/main_prom_stop.png')]"
        }`}
        onClick={() => setStopSlide(!stopSlide)}
        disabled={isDisabled}
      ></button>
      {[0, 1, 2].map((e) => (
        <ControllerButton
          key={e}
          buttonState={buttonState}
          curbuttonNum={e}
          clickControlButton={clickControlButton}
          isDisabled={isDisabled}
        />
      ))}
    </div>
  );
}

function MainPromBnr() {
  const [curItem, setCurItem] = useState(0);
  const [slidingState, setSlidingState] = useState("default");
  const [mouseOver, setMouseOver] = useState(false);
  const [stopSlide, setStopSlide] = useState(false);
  const [buttonState, setButtonState] = useState(0);

  const [openBnr] = useRecoilState(bnrState);
  const [animateCloseBnr] = useRecoilState(animateCloseBnrState);

  async function slide(type: string) {
    const nextState =
      type === "prev" || type === "next2"
        ? curItem === 0
          ? 2
          : curItem - 1
        : curItem === 2
        ? 0
        : curItem + 1;
    setButtonState(nextState);
    setSlidingState(type);
    await delay(0.5);
    setSlidingState("default");
    setCurItem(nextState);
  }

  function clickControlButton(nextItem: number) {
    setStopSlide(true);
    switch (buttonState - nextItem) {
      case 1:
        slide("prev");
        return;
      case 2:
        slide("prev2");
        return;
      case -1:
        slide("next");
        return;
      case -2:
        slide("next2");
        return;
    }
  }

  useEffect(() => {
    let showSlide = setInterval(() => {
      slide("next");
    }, 2000);
    if (mouseOver || stopSlide) clearInterval(showSlide);
    return () => clearInterval(showSlide);
  }, [slide, mouseOver, stopSlide]);

  return (
    <div
      className={`${
        openBnr ? "block" : "hidden"
      } w-full z-10 relative bg-[#f6f5ef] border-t-[0.0625rem] border-solid border-[#f6f5ef] overflow-hidden screen1:h-[41.125rem] screen16:h-[27.875rem] screen19:h-[27.875rem] screen20:h-[27.875rem] screen21:h-[23.125rem]  ${
        animateCloseBnr
          ? "screen1:animate-closeMainSlide screen16:animate-closeMainSlideT screen19:animate-closeMainSlideT screen20:animate-closeMainSlideT screen21:animate-closeMainSlideM"
          : "screen1:animate-showMainSlide screen16:animate-showMainSlideT screen19:animate-showMainSlideT screen20:animate-showMainSlideT screen21:animate-showMainSlideM"
      }`}
    >
      <div className="relative text-center left-1/2 screen1:w-[68.75rem] screen1:h-[34.5625rem] screen1:mt-[2.4375rem] screen1:ml-[-34.375rem] screen16:h-[26.3125rem] screen16:mt-[1.5625rem] screen16:-ml-[19.375rem] screen16:w-[38.75rem] screen19:h-[26.3125rem] screen19:mt-[1.5625rem] screen19:-ml-[19.375rem] screen19:w-[38.75rem] screen20:h-[26.3125rem] screen20:mt-[1.5625rem] screen20:-ml-[49%] screen20:w-[98%] screen21:h-[21.25rem] screen21:mt-[1.5625rem] screen21:-ml-[49%] screen21:w-[98%]">
        <div className="relative mt-0 mx-auto mb-[3.75rem] max-w-full">
          <div className="w-full overflow-hidden relative h-[33.8125rem] screen1:overflow-visible screen16:h-[21.625rem] screen19:h-[21.625rem] screen20:h-[18.75rem] screen21:h-[17.1875rem] screen18:overflow-visible">
            <BnrSlide
              curItem={curItem}
              slidingState={slidingState}
              setMouseOver={setMouseOver}
              setCurItem={setCurItem}
              setStopSlide={setStopSlide}
              setButtonState={setButtonState}
            />
          </div>
        </div>
        <p className="absolute left-[3%] top-[14.0625rem] z-[2001] screen20:hidden screen21:hidden">
          <button
            className={`block w-[3.1875rem] h-[3.1875rem] border-[0.125rem] border-solid border-[#222] rounded-[1.71875rem]  bg-[url('/assets/img/home/arrow_left_on.png')] bg-center bg-no-repeat  hover:bg-white transition-colors`}
            onClick={() => slide("prev")}
            disabled={slidingState !== "default"}
          ></button>
        </p>
        <p className="absolute right-[3%] top-[14.0625rem] z-[2001] screen20:hidden screen21:hidden">
          <button
            className={`block w-[3.1875rem] h-[3.1875rem] border-[0.125rem] border-solid border-[#222] rounded-[1.71875rem]  bg-[url('/assets/img/home/arrow_right_on.png')] bg-center bg-no-repeat  hover:bg-white transition-colors`}
            onClick={() => slide("next")}
            disabled={slidingState !== "default"}
          ></button>
        </p>
        <Controller
          stopSlide={stopSlide}
          setStopSlide={setStopSlide}
          buttonState={buttonState}
          clickControlButton={clickControlButton}
          isDisabled={slidingState !== "default"}
        />
      </div>
    </div>
  );
}

export default MainPromBnr;
