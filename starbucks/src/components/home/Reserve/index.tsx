import Image from "next/image";
import Link from "next/link";

function Reserve() {
  return (
    <div className="relative h-[25rem] bg-[url('/assets/img/home/230418_pc_reserve_bg.jpg')] bg-[center_top] bg-cover overflow-hidden screen10:h-[22.3125rem]">
      <div className="relative w-full h-full my-0 mx-auto">
        <div className="relative z-10 pt-[4.25rem] max-w-[67.5rem] w-full ml-auto mr-auto box-border screen10:max-w-none screen10:mr-0 screen10:ml-0 screen10:pt-[3.125rem] screen10:pl-[17.5%]">
          <Image
            src="/assets/img/home/230418_pc_reserve_logo.png"
            alt="title"
            width={309}
            height={168}
            className=" align-top max-w-full translate-x-[10.0625rem] screen10:transform-none"
          />
        </div>
        <div className="block absolute right-0 bottom-0 screen15:right-[-4%] screen15:screen14:right-[-8%] screen15:screen14:screen9:right-[-12%] screen15:screen14:screen9:screen13:right-[-16%] screen15:screen14:screen9:screen13:screen8:right-[-19%] screen15:screen14:screen9:screen13:screen8:screen12:right-[-24%] screen15:screen14:screen9:screen13:screen8:screen12:screen11:right-[-33%] screen15:screen14:screen9:screen13:screen8:screen12:screen11:screen7:right-[-44%] screen15:screen14:screen9:screen13:screen8:screen12:screen11:screen7:screen10:bottom-[-6%] screen10:right-[-42%] \">
          <Image
            src="/assets/img/home/230418_pc_reserve_coffee_bg.png"
            width={2000}
            height={400}
            alt="pc"
            className="block screen4:hidden max-w-none"
          />
          <Image
            src="/assets/img/home/230418_m_reserve_bg.jpg"
            width={640}
            height={1056}
            alt="m"
            className="hidden screen4:block max-w-none"
          />
        </div>
        <div className="relative z-10 max-w-[67.5rem] mt-[1.875rem] mr-auto ml-auto pl-[15.875rem] box-border screen10:max-w-none screen10:w-2/5 screen10:ml-0 screen10:pl-[25.5%]">
          <div className="w-[7.8125rem] h-[2.375rem]">
            <Link
              href="#"
              className="block w-full h-full text-white text-[0.875rem] leading-[2.25rem] text-center border-[0.125rem] border-solid border-white rounded-[0.3125rem] box-border transition-colors duration-700 hover:text-black hover:bg-white"
            >
              자세히 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
