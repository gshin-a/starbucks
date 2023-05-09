// prettier-ignore
"use client"

import Image from "next/image";
import Link from "next/link";

export default function MainVisual() {
  return (
    <div className="relative h-[32vw] bg-center bg-no-repeat bg-cover bg-[url('/assets/img/home/2023_spring2_promotion_bg_1.jpg')] screen17:w-auto screen17:h-[359vw] screen17:bg-[url('/assets/img/home/2023_m_summer1_promotion_bg_2_230426.jpg')]">
      <div className="absolute w-[19%] left-[13.3%] top-[37%] opacity-0  animate-show1 screen17:w-[49.4%] screen17:top-[5.5%] screen17:left-[15.5%]">
        <Image
          src="/assets/img/home/2023_spring2_top_logo.png"
          alt="pc-slogan"
          width={383}
          height={89}
          className="hidden screen1:block"
        />
        <Image
          src="/assets/img/home/2023_m_summer1_top_logo.png"
          alt="pc-slogan"
          width={316}
          height={121}
          className="hidden screen4:block w-full"
        />
      </div>
      <div className="h-full">
        <div className="absolute z-[9] top-[10.8%] left-[49.5%] w-[15.8%] opacity-0 animate-show2 screen17:bottom-auto screen17:m-0 screen17:z-[8] screen17:top-[15.3%] screen17:left-[15.5%] screen17:w-[73.6%] screen17:max-w-full screen17:overflow-hidden">
          <Image
            src="/assets/img/home/2023_spring2_top_drink1.png"
            alt="pc-drink"
            width={318}
            height={510}
            className="block screen4:hidden w-full"
          />
          <Image
            src="/assets/img/home/2023_m_summer1_top_drink1_1.png"
            alt="m-drink"
            width={471}
            height={397}
            className="hidden screen4:block w-full"
          />
        </div>
        <div className="absolute z-[8] top-[14%] left-[34.8%] w-[18%] opacity-0 animate-show3 screen17:bottom-auto screen17:m-0 screen17:z-[10] screen17:top-[33.3%] screen17:left-[11.8%] screen17:w-[81.9%] screen17:max-w-full">
          <Image
            src="/assets/img/home/2023_spring2_top_drink2.png"
            alt="pc-drink"
            width={365}
            height={421}
            className="block screen4:hidden w-full"
          />
          <Image
            src="/assets/img/home/2023_m_summer1_top_drink2_230426.png"
            alt="m-drink"
            width={524}
            height={397}
            className="hidden screen4:block w-full"
          />
        </div>
        <div className="absolute z-[10] top-[15.8%] right-[20.8%] w-[18.2%] opacity-0 animate-show4 screen17:bottom-auto screen17:m-0 screen17:z-[9] screen17:top-[51.3%] screen17:left-[15.9%] screen17:w-[71.9%] screen17:max-w-full">
          <Image
            src="/assets/img/home/2023_spring2_top_drink3.png"
            alt="pc-drink"
            width={369}
            height={410}
            className="block screen4:hidden w-full"
          />
          <Image
            src="/assets/img/home/2023_m_summer1_top_drink3.png"
            alt="m-drink"
            width={460}
            height={407}
            className="hidden screen4:block w-full"
          />
        </div>
        <div className="hidden screen4:block absolute z-[10] top-[69.2%] left-[15.8%] w-[78%] opacity-0 animate-show5 bottom-auto m-0 max-w-full">
          <Image
            src="/assets/img/home/2023_m_summer1_top_drink4_230426.png"
            alt="m-drink"
            width={499}
            height={407}
            className="block w-full"
          />
        </div>
      </div>
      <div className="absolute w-[19%] h-[2.375rem] top-[56%] left-[13.3%] z-10 text-center opacity-0 animate-show5 screen17:z-10 screen17:top-[91%] screen17:left-1/2 screen17:-translate-x-1/2 screen17:w-full screen17:my-0 screen17:mx-auto screen17:h-auto screen17:bottom-auto screen17:animate-show6">
        <Link
          href="#"
          className="block w-2/5 h-full leading-[2.125rem] my-0 mx-auto text-[#014938] border-[0.125rem] border-solid border-[#014938] rounded-[0.3125rem] box-border screen5:text-[0.8125rem] hover:bg-[#014938] hover:text-white transition-colors duration-300 screen17:border-white screen17:w-[36%] screen17:text-white screen17:leading-[10vw] screen17:text-[1.4375rem] screen17:font-bold screen17:rounded-[0.1875rem] screen17:hover:bg-white screen17:hover:text-black screen18:text-[1rem]"
        >
          자세히 보기
        </Link>
      </div>
    </div>
  );
}
