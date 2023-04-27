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
  nextSliding: boolean;
  setMouseOver: React.Dispatch<SetStateAction<boolean>>;
}

function BnrSlide({
  curItem,
  preSliding,
  nextSliding,
  setMouseOver,
}: BnrSlide) {
  return (
    <ul
      id="bnrslide"
      className={`relative flex w-[500%] left-[-95.15625rem] ${
        preSliding ? "animate-prevSlide" : ""
      } ${nextSliding ? "animate-nextSlide" : ""}`}
    >
      <li className="relative opacity-[0.4] screen1:my-0 screen1:mx-[0.3125rem]">
        <Image
          src={curItem === 2 ? mainBnrList[0] : mainBnrList[curItem + 1]}
          alt="mainprombnr3"
          width={819}
          height={553}
        />
      </li>
      <li className="relative opacity-[0.4] screen1:my-0 screen1:mx-[0.3125rem]">
        <Image
          src={curItem === 0 ? mainBnrList[2] : mainBnrList[curItem - 1]}
          alt="mainprombnr1"
          width={819}
          height={553}
        />
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
      </li>
    </ul>
  );
}

function MainPromBnr() {
  const [curItem, setCurItem] = useState(1);
  const [preSliding, setPreSliding] = useState(false);
  const [nextSliding, setNextSliding] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  async function prevSlide() {
    setPreSliding(true);
    await delay(1);
    setPreSliding(false);
    setCurItem(curItem === 0 ? 2 : curItem - 1);
  }

  async function nextSlide() {
    setNextSliding(true);
    await delay(1);
    setNextSliding(false);
    setCurItem(curItem === 2 ? 0 : curItem + 1);
  }

  useEffect(() => {
    let showSlide = setInterval(() => {
      nextSlide();
    }, 2000);
    if (mouseOver) clearInterval(showSlide);
    return () => clearInterval(showSlide);
  }, [nextSlide, mouseOver]);

  return (
    <div className="w-full z-10 relative bg-[#f6f5ef] border-t-[0.0625rem] border-solid border-[#f6f5ef] overflow-hidden screen1:h-[41.125rem] ">
      <div className="relative text-center left-1/2 screen1:w-[68.75rem] screen1:h-[34.5625rem] screen1:mt-[2.4375rem] screen1:ml-[-34.375rem]">
        <div className="relative mt-0 mx-auto mb-[3.75rem] max-w-full">
          <div className="w-full overflow-hidden relative h-[33.8125rem] screen1:overflow-visible">
            <BnrSlide
              curItem={curItem}
              preSliding={preSliding}
              nextSliding={nextSliding}
              setMouseOver={setMouseOver}
            />
          </div>
        </div>
        <p className="absolute left-[3%] top-[14.0625rem] z-[2001]">
          <button
            className={`block w-[3.1875rem] h-[3.1875rem] border-[0.125rem] border-solid border-[#222] rounded-[1.71875rem]  bg-[url('/assets/img/home/arrow_left_on.png')] bg-center bg-no-repeat  hover:bg-white transition-colors`}
            onClick={prevSlide}
            disabled={preSliding || nextSliding}
          ></button>
        </p>
        <p className="absolute right-[3%] top-[14.0625rem] z-[2001]">
          <button
            className={`block w-[3.1875rem] h-[3.1875rem] border-[0.125rem] border-solid border-[#222] rounded-[1.71875rem]  bg-[url('/assets/img/home/arrow_right_on.png')] bg-center bg-no-repeat  hover:bg-white transition-colors`}
            onClick={nextSlide}
            disabled={preSliding || nextSliding}
          ></button>
        </p>
      </div>
    </div>
  );
}

export default MainPromBnr;
