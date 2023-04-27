import { SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import delay from "@/utils/delay";

const mainBnrList = [
  "/assets/img/home/FbOy46_20230102123439782.jpg",
  "/assets/img/home/oJ7QKF_20230425084350288.jpg",
  "/assets/img/home/8akpfI_20230320084449571.jpg",
];
interface BnrSlide {
  curItem: number;
  preSliding: boolean;
  preSliding2: boolean;
  nextSliding: boolean;
  nextSliding2: boolean;
  setMouseOver: React.Dispatch<SetStateAction<boolean>>;
}

function BnrSlide({
  curItem,
  preSliding,
  preSliding2,
  nextSliding,
  nextSliding2,
  setMouseOver,
}: BnrSlide) {
  return (
    <ul
      id="bnrslide"
      className={`relative flex w-[600%] left-[-146.96875rem] ${
        preSliding ? "animate-prevSlide" : ""
      } ${preSliding2 ? "animate-prevSlide2" : ""} ${
        nextSliding ? "animate-nextSlide" : ""
      } ${nextSliding2 ? "animate-nextSlide2" : ""}`}
    >
      <li
        className="relative opacity-1 screen1:my-0 screen1:mx-[0.3125rem]"
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <Image
          src={mainBnrList[curItem]}
          alt="mainprombnr2"
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
      <li className="relative opacity-[0.4] screen1:my-0 screen1:mx-[0.3125rem]">
        <Image
          src={curItem === 2 ? mainBnrList[0] : mainBnrList[curItem + 1]}
          alt="mainprombnr3"
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
      <li className="relative opacity-[0.4] screen1:my-0 screen1:mx-[0.3125rem]">
        <Image
          src={curItem === 0 ? mainBnrList[2] : mainBnrList[curItem - 1]}
          alt="mainprombnr1"
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
      <li
        className="relative opacity-1 screen1:my-0 screen1:mx-[0.3125rem]"
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <Image
          src={mainBnrList[curItem]}
          alt="mainprombnr2"
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
      <li className="relative opacity-[0.4] screen1:my-0 screen1:mx-[0.3125rem]">
        <Image
          src={curItem === 2 ? mainBnrList[0] : mainBnrList[curItem + 1]}
          alt="mainprombnr3"
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
      <li className="relative opacity-[0.4] screen1:my-0 screen1:mx-[0.3125rem]">
        <Image
          src={curItem === 0 ? mainBnrList[2] : mainBnrList[curItem - 1]}
          alt="mainprombnr1"
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
      <li
        className="relative opacity-1 screen1:my-0 screen1:mx-[0.3125rem]"
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <Image
          src={mainBnrList[curItem]}
          alt="mainprombnr2"
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
    </ul>
  );
}

interface ControllerProps {
  stopSlide: boolean;
  setStopSlide: React.Dispatch<SetStateAction<boolean>>;
  buttonState: number;
  clickControlButton: (nextItem: number) => void;
  isDisabled: boolean;
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
      <div className="inline-block h-3">
        <button
          className={`ml-[0.625rem] ${
            buttonState === 0
              ? `bg-[url('/assets/img/home/main_prom_on.png')]`
              : "bg-[url('/assets/img/home/main_prom_off.png')]"
          } w-[0.8125rem] h-3`}
          onClick={() => clickControlButton(0)}
          disabled={isDisabled}
        ></button>
      </div>
      <div className="inline-block h-3">
        <button
          className={`ml-[0.625rem] ${
            buttonState === 1
              ? `bg-[url('/assets/img/home/main_prom_on.png')]`
              : "bg-[url('/assets/img/home/main_prom_off.png')]"
          } w-[0.8125rem] h-3`}
          onClick={() => clickControlButton(1)}
          disabled={isDisabled}
        ></button>
      </div>
      <div className="inline-block h-3">
        <button
          className={`ml-[0.625rem] ${
            buttonState === 2
              ? `bg-[url('/assets/img/home/main_prom_on.png')]`
              : "bg-[url('/assets/img/home/main_prom_off.png')]"
          } w-[0.8125rem] h-3`}
          onClick={() => clickControlButton(2)}
          disabled={isDisabled}
        ></button>
      </div>
    </div>
  );
}

interface MainPromBnrProps {
  animateCloseBnr: boolean;
}

function MainPromBnr({ animateCloseBnr }: MainPromBnrProps) {
  const [curItem, setCurItem] = useState(0);
  const [prevSliding, setPrevSliding] = useState(false);
  const [prevSliding2, setPrevSliding2] = useState(false);
  const [nextSliding, setNextSliding] = useState(false);
  const [nextSliding2, setNextSliding2] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const [stopSlide, setStopSlide] = useState(false);
  const [buttonState, setButtonState] = useState(0);

  async function prevSlide() {
    setButtonState(curItem === 0 ? 2 : curItem - 1);
    setPrevSliding(true);
    await delay(0.5);
    setPrevSliding(false);
    setCurItem(curItem === 0 ? 2 : curItem - 1);
  }

  async function prevSlide2() {
    setButtonState(curItem === 2 ? 0 : curItem + 1);
    setPrevSliding2(true);
    await delay(0.5);
    setPrevSliding2(false);
    setCurItem(curItem === 2 ? 0 : curItem + 1);
  }

  async function nextSlide() {
    setButtonState(curItem === 2 ? 0 : curItem + 1);
    setNextSliding(true);
    await delay(0.5);
    setNextSliding(false);
    setCurItem(curItem === 2 ? 0 : curItem + 1);
  }

  async function nextSlide2() {
    setButtonState(curItem === 0 ? 2 : curItem - 1);
    setNextSliding2(true);
    await delay(0.5);
    setNextSliding2(false);
    setCurItem(curItem === 0 ? 2 : curItem - 1);
  }

  function clickControlButton(nextItem: number) {
    setStopSlide(true);
    switch (buttonState - nextItem) {
      case 1:
        prevSlide();
        return;
      case 2:
        prevSlide2();
        return;
      case -1:
        nextSlide();
        return;
      case -2:
        nextSlide2();
        return;
    }
  }

  useEffect(() => {
    let showSlide = setInterval(() => {
      nextSlide();
    }, 2000);
    if (mouseOver || stopSlide) clearInterval(showSlide);
    return () => clearInterval(showSlide);
  }, [nextSlide, mouseOver, stopSlide]);

  return (
    <div
      className={`w-full z-10 relative bg-[#f6f5ef] border-t-[0.0625rem] border-solid border-[#f6f5ef] overflow-hidden screen1:h-[41.125rem] screen1:animate-showMainSlide ${
        animateCloseBnr ? "screen1:animate-closeMainSlide" : ""
      }`}
    >
      <div className="relative text-center left-1/2 screen1:w-[68.75rem] screen1:h-[34.5625rem] screen1:mt-[2.4375rem] screen1:ml-[-34.375rem]">
        <div className="relative mt-0 mx-auto mb-[3.75rem] max-w-full">
          <div className="w-full overflow-hidden relative h-[33.8125rem] screen1:overflow-visible">
            <BnrSlide
              curItem={curItem}
              preSliding={prevSliding}
              preSliding2={prevSliding2}
              nextSliding={nextSliding}
              nextSliding2={nextSliding2}
              setMouseOver={setMouseOver}
            />
          </div>
        </div>
        <p className="absolute left-[3%] top-[14.0625rem] z-[2001]">
          <button
            className={`block w-[3.1875rem] h-[3.1875rem] border-[0.125rem] border-solid border-[#222] rounded-[1.71875rem]  bg-[url('/assets/img/home/arrow_left_on.png')] bg-center bg-no-repeat  hover:bg-white transition-colors`}
            onClick={prevSlide}
            disabled={
              prevSliding || nextSliding || prevSliding2 || nextSliding2
            }
          ></button>
        </p>
        <p className="absolute right-[3%] top-[14.0625rem] z-[2001]">
          <button
            className={`block w-[3.1875rem] h-[3.1875rem] border-[0.125rem] border-solid border-[#222] rounded-[1.71875rem]  bg-[url('/assets/img/home/arrow_right_on.png')] bg-center bg-no-repeat  hover:bg-white transition-colors`}
            onClick={nextSlide}
            disabled={
              prevSliding || nextSliding || prevSliding2 || nextSliding2
            }
          ></button>
        </p>
        <Controller
          stopSlide={stopSlide}
          setStopSlide={setStopSlide}
          buttonState={buttonState}
          clickControlButton={clickControlButton}
          isDisabled={
            prevSliding || nextSliding || prevSliding2 || nextSliding2
          }
        />
      </div>
    </div>
  );
}

export default MainPromBnr;
