// prettier-ignore
"use client"

import Image from "next/image";
import Link from "next/link";

export default function LayerFloating() {
  return (
    <div className="fixed top-[9.625rem] left-[54.5%] w-[8.75rem] ml-[30.3125rem] z-[999] screen1:left-auto screen1:right-[1%]">
      <div>
        <Link href="#" className="block w-full h-full">
          <Image
            src="/assets/img/home/gq5gfg_20230407112627089.png"
            alt="pc-badge"
            width={140}
            height={96}
            className="hidden screen1:block"
          />
          <Image
            src="/assets/img/home/gq5gfg_20230407112635659.png"
            alt="mobile-badge"
            width={166}
            height={116}
            className="hidden screen4:block"
          />
        </Link>
      </div>
      <div>
        <Link href="#" className="block w-full h-full">
          <Image
            src="/assets/img/home/Mn0ecH_20220711153123340.png"
            alt="pc-badge"
            width={140}
            height={96}
            className="hidden screen1:block"
          />
          <Image
            src="/assets/img/home/Mn0ecH_20220711153127215.png"
            alt="mobile-badge"
            width={166}
            height={116}
            className="hidden screen4:block"
          />
        </Link>
      </div>
    </div>
  );
}
