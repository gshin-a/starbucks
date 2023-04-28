import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import delay from "@/utils/delay";
import {
  BnrSlideProps,
  ControllerProps,
  MainPromBnrProps,
  MakeSrcIdxProps,
  BnrSlideItemProps,
} from "@/interfaces/home";
import { mainBnrList } from "@/constants/home";

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

function BnrSlideItem({ setMouseOver, curItem, idx }: BnrSlideItemProps) {
  return (
    <li
      className={`relative ${
        idx === 4 ? "opacity-1" : "opacity-[0.4]"
      } screen1:my-0 screen1:mx-[0.3125rem]`}
      onMouseEnter={() => idx === 4 && setMouseOver(true)}
      onMouseLeave={() => idx === 4 && setMouseOver(false)}
    >
      <Image
        src={mainBnrList[makeSrcIdx({ idx, curItem })]}
        alt="mainprombnr"
        width={819}
        height={553}
      />
      <Link
        href="#"
        className="relative block border-[0.125rem] border-solid border-[#222] rounded-[0.1875rem] text-[#222] text-[0.875rem] w-[7.5625rem] h-[2.125rem] leading-[2.125rem] mt-[-3.125rem] mx-auto mb-0 text-center transition-colors duration-700 hover:bg-[#222] hover:text-white hover:rounded-[0.1875rem] hover:font-bold"
      >
        자세히 보기
      </Link>
    </li>
  );
}

function BnrSlide({ curItem, slidingState, setMouseOver }: BnrSlideProps) {
  return (
    <ul
      id="bnrslide"
      className={`relative flex w-[600%] left-[-146.96875rem] ${
        slidingState === "prev" ? "animate-prevSlide" : ""
      } ${slidingState === "prev2" ? "animate-prevSlide2" : ""} ${
        slidingState === "next" ? "animate-nextSlide" : ""
      } ${slidingState === "next2" ? "animate-nextSlide2" : ""}`}
    >
      {[1, 2, 3, 4, 5, 6, 7].map((e) => (
        <BnrSlideItem
          key={e}
          setMouseOver={setMouseOver}
          curItem={curItem}
          idx={e}
        />
      ))}
    </ul>
  );
}

interface ControllerButtonProps {
  buttonState: number;
  curbuttonNum: number;
  clickControlButton: (nextItem: number) => void;
  isDisabled: boolean;
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
    <div className="absolute w-full h-3 text-center z-[9999] bottom-[-1.875rem]">
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

function MainPromBnr({ animateCloseBnr }: MainPromBnrProps) {
  const [curItem, setCurItem] = useState(0);
  const [slidingState, setSlidingState] = useState("default");
  const [mouseOver, setMouseOver] = useState(false);
  const [stopSlide, setStopSlide] = useState(false);
  const [buttonState, setButtonState] = useState(0);

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
      className={`w-full z-10 relative bg-[#f6f5ef] border-t-[0.0625rem] border-solid border-[#f6f5ef] overflow-hidden screen1:h-[41.125rem]  ${
        animateCloseBnr
          ? "screen1:animate-closeMainSlide"
          : "screen1:animate-showMainSlide"
      }`}
    >
      <div className="relative text-center left-1/2 screen1:w-[68.75rem] screen1:h-[34.5625rem] screen1:mt-[2.4375rem] screen1:ml-[-34.375rem]">
        <div className="relative mt-0 mx-auto mb-[3.75rem] max-w-full">
          <div className="w-full overflow-hidden relative h-[33.8125rem] screen1:overflow-visible">
            <BnrSlide
              curItem={curItem}
              slidingState={slidingState}
              setMouseOver={setMouseOver}
            />
          </div>
        </div>
        <p className="absolute left-[3%] top-[14.0625rem] z-[2001]">
          <button
            className={`block w-[3.1875rem] h-[3.1875rem] border-[0.125rem] border-solid border-[#222] rounded-[1.71875rem]  bg-[url('/assets/img/home/arrow_left_on.png')] bg-center bg-no-repeat  hover:bg-white transition-colors`}
            onClick={() => slide("prev")}
            disabled={slidingState !== "default"}
          ></button>
        </p>
        <p className="absolute right-[3%] top-[14.0625rem] z-[2001]">
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
