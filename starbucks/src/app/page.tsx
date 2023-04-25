import Image from "next/image";

function LayerFloating() {
  return (
    <div className="fixed top-[9.625rem] left-[54.5%] w-[8.75rem] ml-[30.3125rem] z-[999] screen1:left-auto screen1:right-[1%]">
      <div>
        <a href="#" className="block w-full h-full">
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
        </a>
      </div>
      <div>
        <a href="#" className="block w-full h-full">
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
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <LayerFloating />
      <div className="relative h-[32vw] bg-center bg-no-repeat bg-cover bg-[url('/assets/img/home/2023_spring2_promotion_bg_1.jpg')]">
        <div className="absolute w-[19%] left-[13.3%] top-[37%]">
          <Image
            src="/assets/img/home/2023_spring2_top_logo.png"
            alt="pc-slogan"
            width={199}
            height={46}
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
          <div className="absolute z-[9] top-[10.8%] left-[49.5%] w-[15.8%]">
            <Image
              src="/assets/img/home/2023_spring2_top_drink1.png"
              alt="pc-drink"
              width={165}
              height={265}
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
          <div className="absolute z-[9] top-[10.8%] left-[49.5%] w-[15.8%]">
            <Image
              src="/assets/img/home/2023_spring2_top_drink1.png"
              alt="pc-drink"
              width={165}
              height={265}
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
          <div className="absolute z-[9] top-[10.8%] left-[49.5%] w-[15.8%]">
            <Image
              src="/assets/img/home/2023_spring2_top_drink1.png"
              alt="pc-drink"
              width={165}
              height={265}
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
        </div>
      </div>
    </div>
  );
}
