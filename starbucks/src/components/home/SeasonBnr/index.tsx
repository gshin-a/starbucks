import Image from "next/image";
import Link from "next/link";

function SeasonBnr() {
  return (
    <div className="overflow-hidden bg-[url('/assets/img/home/2023_spring_promotion_bg.jpg')] bg-center bg-cover bg-no-repeat h-[35.8125rem] relative screen8:relative screen8:h-[31.25rem] screen8:screen7:h-[43vw]">
      <div className="relative max-w-[70.25rem] h-full my-0 mx-auto screen9:max-w-[70.25rem]">
        <div className="absolute z-[9] w-[28%] top-1/2 left-[10.9%] translate-y-[-50%] screen8:left-[14%]">
          <Image
            src="/assets/img/home/2023_spring_promotion_img.png"
            alt="pc"
            width={382}
            height={591}
            className="block screen4:hidden w-full max-w-full align-top"
          />
          <Image
            src="/assets/img/home/2023_m_spring_promotion_img.png"
            alt="m"
            width={382}
            height={591}
            className="hidden screen4:block w-full max-w-full align-top"
          />
        </div>
        <div className="absolute z-[9] w-[37.63%] max-w-[21.1875rem] top-[32.8%] right-[8.4% screen8:right-[15%] screen8:top-[35%] screen8:w-[30%] screen7:right-[14.7%] screen7:top-[34%] screen7:w-[32%]">
          <Image
            src="/assets/img/home/2023_spring_promotion_txt_2.png"
            width={403}
            height={119}
            alt="pc"
            className="block screen4:hidden w-full max-w-full align-top"
          />
          <Image
            src="/assets/img/home/2023_m_spring_promotion_txt_2.png"
            width={392}
            height={197}
            alt="m"
            className="hidden screen4:block w-full max-w-full align-top"
          />
          <div className="w-[7.8125rem] h-[2.375rem] mt-[2.4375rem]">
            <Link
              href="#"
              className="block w-full h-full text-[0.9375rem] leading-[2.125rem] rounded-[0.3125rem] text-center box-border text-[#e54360] border-[0.125rem] border-solid border-[#e54360] transition-colors duration-700 hover:bg-[#e54360] hover:text-white"
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
