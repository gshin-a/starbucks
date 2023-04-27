// prettier-ignore
"use client"

import Image from "next/image";
import Link from "next/link";

export default function MainVisual() {
  return (
    <div className="relative h-[32vw] bg-center bg-no-repeat bg-cover bg-[url('/assets/img/home/2023_spring2_promotion_bg_1.jpg')]">
      <div className="absolute w-[19%] left-[13.3%] top-[37%] opacity-0  animate-show1">
        <Image
          src="/assets/img/home/2023_spring2_top_logo.png"
          alt="pc-slogan"
          width={383}
          height={89}
          className="hidden screen1:block"
        />
        <Image
          src="/assets/img/home/2023_m_spring2_top_logo.png"
          alt="pc-slogan"
          width={305}
          height={71}
          className="hidden screen4:block"
        />
      </div>
      <div className="h-full">
        <div className="absolute z-[9] top-[10.8%] left-[49.5%] w-[15.8%] opacity-0 animate-show2">
          <Image
            src="/assets/img/home/2023_spring2_top_drink1.png"
            alt="pc-drink"
            width={318}
            height={510}
            className="w-full"
          />
          <Image
            src="/assets/img/home/2023_m_spring2_top_drink1.png"
            alt="m-drink"
            width={478}
            height={486}
            className="hidden screen4:block w-full"
          />
        </div>
        <div className="absolute z-[8] top-[14%] left-[34.8%] w-[18%] opacity-0 animate-show3">
          <Image
            src="/assets/img/home/2023_spring2_top_drink2.png"
            alt="pc-drink"
            width={365}
            height={421}
            className="w-full"
          />
          <Image
            src="/assets/img/home/2023_m_spring2_top_drink2.png"
            alt="m-drink"
            width={548}
            height={414}
            className="hidden screen4:block w-full"
          />
        </div>
        <div className="absolute z-[10] top-[15.8%] right-[20.8%] w-[18.2%] opacity-0 animate-show4">
          <Image
            src="/assets/img/home/2023_spring2_top_drink3.png"
            alt="pc-drink"
            width={369}
            height={410}
            className="w-full"
          />
          <Image
            src="/assets/img/home/2023_m_spring2_top_drink3.png"
            alt="m-drink"
            width={472}
            height={401}
            className="hidden screen4:block w-full"
          />
        </div>
      </div>
      <div className="absolute w-[19%] h-[2.375rem] top-[56%] left-[13.3%] z-10 text-center opacity-0 animate-show5">
        <Link
          href="#"
          className="block w-2/5 h-full leading-[2.125rem] my-0 mx-auto text-[#014938] border-[0.125rem] border-solid border-[#014938] rounded-[0.3125rem] box-border screen5:text-[0.8125rem] hover:bg-[#014938] hover:text-white transition-colors duration-300"
        >
          자세히 보기
        </Link>
      </div>
    </div>
  );
}
