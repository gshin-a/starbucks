import Image from "next/image";
import Link from "next/link";

function Reserve() {
  return (
    <div className="relative h-[25rem] bg-[url('/assets/img/home/230418_pc_reserve_bg.jpg')] bg-[center_top] bg-cover overflow-hidden screen10:h-[22.3125rem] screen26:h-[22.3125rem] screen27:h-full">
      <div className="relative w-full h-full my-0 mx-auto">
        <div className="relative z-10 pt-[4.25rem] max-w-[67.5rem] w-full ml-auto mr-auto box-border screen10:max-w-none screen10:mr-0 screen10:ml-0 screen10:pt-[3.125rem] screen10:pl-[17.5%] screen26:max-w-none screen26:mr-0 screen26:ml-0 screen26:pt-[3.125rem] screen26:pl-[17.5%] screen27:hidden">
          <Image
            src="/assets/img/home/230418_pc_reserve_logo.png"
            alt="title"
            width={309}
            height={168}
            className=" align-top max-w-full translate-x-[10.0625rem] screen10:transform-none"
          />
        </div>
        <div className="block absolute right-0 bottom-0 screen38:right-[-4%] screen37:right-[-8%] screen36:right-[-12%] screen35:right-[-16%] screen34:right-[-19%] screen33:right-[-24%] screen32:right-[-33%] screen31:right-[-44%] screen30:bottom-[-6%] screen30:right-[-42%] screen29:right-[-42%] screen28:-right-1/2 screen27:bottom-0 screen27:right-auto screen27:w-full screen27:relative \">
          <Image
            src="/assets/img/home/230418_pc_reserve_coffee_bg.png"
            width={2000}
            height={400}
            alt="pc"
            className="block screen27:hidden max-w-none"
          />
          <Image
            src="/assets/img/home/230418_m_reserve_bg.jpg"
            width={640}
            height={1056}
            alt="m"
            className="hidden screen27:block max-w-none w-full"
          />
        </div>
        <div className="relative z-10 max-w-[67.5rem] mt-[1.875rem] mr-auto ml-auto pl-[15.875rem] box-border screen10:ml-0 screen10:max-w-none screen26:w-2/5 screen26:pl-[25.5%] screen27:static screen27:w-auto screen27:mt-0 screen27:pl-0">
          <div className="w-[7.8125rem] h-[2.375rem] screen27:absolute screen27:z-10 screen27:w-[35.8%] screen27:h-[6.2%] screen27:left-[32%] screen27:bottom-[9.5%]">
            <Link
              href="#"
              className="block w-full h-full text-white text-[0.875rem] leading-[2.25rem] text-center border-[0.125rem] border-solid border-white rounded-[0.3125rem] box-border transition-colors duration-700 hover:text-black hover:bg-white screen39:text-[1.375rem] screen27:leading-[10vw] screen18:text-[0.8125rem]"
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
