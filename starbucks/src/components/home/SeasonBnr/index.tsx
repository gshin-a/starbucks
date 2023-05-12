import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { addScrollEvent } from "@/utils/addScrollEvent";

function SeasonBnr() {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const [isVisible1, setIsVisible1] = useState(false);

  useEffect(() => {
    addScrollEvent({ scrollRef: scrollRef1, setIsVisible: setIsVisible1 });
  }, []);

  return (
    <div className="overflow-hidden bg-[url('/assets/img/home/2023_spring_promotion_bg.jpg')] bg-center bg-cover bg-no-repeat h-[35.8125rem] relative screen8:relative screen8:h-[31.25rem] screen8:screen7:h-[43vw] screen17:bg-[url('/assets/img/home/2023_m_summer1_promotion_bg_1.jpg')] screen17:h-[174vw]">
      <div className="relative max-w-[70.25rem] h-full my-0 mx-auto screen9:max-w-[70.25rem]">
        <div
          className={`absolute z-[9] w-[28%] top-1/2 left-[10.9%] translate-y-[-50%] screen8:left-[14%] screen17:z-10 screen17:top-[9.8%] screen17:left-[55.7%] screen17:w-[75.5%] screen17:-translate-x-1/2 screen17:translate-y-0`}
        >
          <Image
            src="/assets/img/home/2023_spring_promotion_img.png"
            alt="pc"
            width={382}
            height={591}
            className="block screen4:hidden w-full max-w-full align-top"
          />
          <Image
            src="/assets/img/home/2023_m_summer1_promotion_img.png"
            alt="m"
            width={483}
            height={657}
            className="hidden screen4:block w-full max-w-full align-top"
          />
        </div>
        <div
          ref={scrollRef1}
          className={`absolute z-[9] w-[37.63%] max-w-[21.1875rem] top-[32.8%] right-[12%] screen24:right-[15%] screen8:top-[35%] screen8:w-[30%] screen7:right-[14.7%] screen7:top-[34%] screen7:w-[32%] screen17:right-1/2 screen17:z-10 screen17:bottom-[10.4988%] screen17:top-[64.9%] screen17:w-[67%] screen17:translate-x-1/2 screen17:max-w-[26.6875rem] ${
            isVisible1
              ? "screen1:animate-movefromright15"
              : "screen1:animate-movetoright15"
          }`}
        >
          <Image
            src="/assets/img/home/2023_spring_promotion_txt_2.png"
            width={403}
            height={119}
            alt="pc"
            className="block screen4:hidden w-full max-w-full align-top"
          />
          <Image
            src="/assets/img/home/2023_m_summer_promotion_txt_2.png"
            width={427}
            height={164}
            alt="m"
            className="hidden screen4:block w-full max-w-full align-top"
          />
          <div className="w-[7.8125rem] h-[2.375rem] mt-[2.4375rem] screen17:mt-[9%] screen17:mx-auto screen17:mb-0 screen17:translate-y-5 screen17:w-[54%] screen17:h-auto">
            <Link
              href="#"
              className="block w-full h-full text-[0.9375rem] leading-[2.125rem] rounded-[0.3125rem] text-center box-border text-[#e54360] border-[0.125rem] border-solid border-[#e54360] transition-colors duration-700 hover:bg-[#e54360] hover:text-white screen17:text-[#816f41] screen17:border-[#816f41] screen17:rounded-[0.1875rem] screen17:leading-[10vw] screen25:text-[1.4375rem] screen17:font-bold screen18:text-[1rem]"
            >
              자세히 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeasonBnr;
