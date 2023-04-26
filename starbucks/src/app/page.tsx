// prettier-ignore
"use client"

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

function MainVisual() {
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
        <a
          href="#"
          className="block w-2/5 h-full leading-[2.125rem] my-0 mx-auto text-[#014938] border-[0.125rem] border-solid border-[#014938] rounded-[0.3125rem] box-border screen5:text-[0.8125rem] hover:bg-[#014938] hover:text-white transition-colors duration-300"
        >
          자세히 보기
        </a>
      </div>
    </div>
  );
}

const noticeList = [
  {
    id: 1,
    name: "개인정보처리방침 개정 안내",
  },
  {
    id: 2,
    name: "시스템 개선 및 서비스 점검 안내",
  },
  {
    id: 3,
    name: "금융상품 판매대리·중개업무 위탁 확인증서 게시",
  },
  {
    id: 4,
    name: "위치정보 이용약관 개정안내",
  },
  {
    id: 5,
    name: "시스템 개선 및 서비스 점검 안내",
  },
];

function NoticeLine() {
  return (
    <div className="relative block w-full screen1:h-[3.875rem]">
      <div className="absolute top-0 left-0 bg-[#111] screen1:h-full screen1:w-1/2"></div>
      <div className="absolute top-0 right-0 bg-[#f6f5ef] screen1:h-full screen1:w-1/2"></div>
      <div className="absolute top-0 screen1:h-full screen1:w-[80rem] screen1:ml-[-40rem] screen1:left-1/2 screen6:ml-[-30rem] screen6:w-[60rem]">
        <div className="absolute screen1:w-[45.625rem] screen1:h-full screen6:w-[55%]">
          <div className="screen1:w-[38.8125rem] screen1:mt-[0.8125rem] screen1:mr-0 screen1:mb-0 screen1:ml-[5.5625rem] screen1:h-[2.25rem] screen6:mt-[0.8125rem] screen6:mr-0 screen6:mb-0 screen6:ml-5 screen6:w-[84%]">
            <div className="relative screen1:w-[30.875rem] h-[2.0625rem] screen6:w-[85%]">
              <Image
                src="/assets/img/home/notice_ttl.png"
                alt="notice"
                width={65}
                height={17}
                className="block absolute overflow-hidden indent-[-20000px] top-2.5 left-0"
              />
              <div className="absolute overflow-hidden indent-[15px] w-[32.5rem] h-6 top-[0.5625rem] left-[4.0625rem]">
                <ul
                  className="noticelist text-[0.8125rem] text-white"
                  onClick={() => {
                    let firstItem = document.querySelector(
                      ".noticelistItem"
                    ) as Element;
                    console.log(firstItem);
                    let list = document.querySelector(".noticelist");
                    list?.removeChild(firstItem);
                    list?.appendChild(firstItem);
                  }}
                >
                  {noticeList.map(({ id, name }) => (
                    <li
                      key={id}
                      className="noticelistItem h-6 leading-6 screen6:w-[55%]"
                    >
                      <a
                        href="#"
                        className="text-white w-full overflow-hidden block h-full text-ellipsis whitespace-nowrap screen1:text-[0.875rem]"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <LayerFloating />
      <MainVisual />
      <NoticeLine />
    </div>
  );
}

export default Home;
