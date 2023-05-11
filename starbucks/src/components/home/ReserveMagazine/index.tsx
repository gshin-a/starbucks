import Image from "next/image";
import Link from "next/link";

function ReserveMagazine() {
  return (
    <div className="relative overflow-hidden bg-[url('/assets/img/home/reserve_bg_pc.png')] bg-no-repeat bg-[50%_100%] h-[25rem] screen2:h-[23.4375rem] screen2:bg-[length:auto_21.125rem] screen2:bg-[53%_100%] screen26:h-[23.4375rem] screen26:bg-[length:auto_21.125rem] screen26:bg-[53%_100%] screen27:h-auto screen27:bg-none">
      <div className="relative w-full h-full my-0 mx-auto">
        <div className="relative z-10 pt-[8.4375rem] pl-[3.4375rem] max-w-[68.75rem] w-full my-0 mx-auto box-border screen2:pt-[7.1875rem] screen2:px-[2.8125rem] pb-0 screen26:pt-[7.1875rem] screen26:mx-[2.8125rem] screen26:mb-0 screen27:hidden">
          <Image
            src="/assets/img/home/reserve_text_pc.png"
            alt="reserve_text_pc"
            width={588}
            height={96}
            className="w-auto translate-x-[10.0625rem] screen10:transform-none screen10:w-[31.875rem]"
          />
        </div>
        <div className="block absolute bottom-auto top-0 right-1/2 mr-[-30.1875rem] screen10:-bottom-[10%] screen26:bottom-[10%] screen27:bottom-0 screen27:right-auto screen27:w-full screen27:relative">
          <Image
            src="/assets/img/home/reserve_visual_pc.png"
            alt="reserve_visual_pc"
            width={348}
            height={374}
            className="block screen27:hidden w-full max-w-none min-w-[auto] screen10:w-[20.25rem] screen10:mr-[2.5rem]"
          />
          <Image
            src="/assets/img/home/reserve_visual_m.jpg"
            alt="reserve_visual_m"
            width={640}
            height={1174}
            className="hidden screen27:block w-full "
          />
        </div>
        <div className="absolute left-0 right-0 z-10 max-w-[68.75rem] mt-[2.0625rem] mx-auto mb-0 box-border w-full screen26:py-0 screen26:px-[1.5625rem] screen27:bottom-[3.8%] screen27:mt-0 screen27:p-">
          <div className="w-[36.4375rem] h-[2.375rem] pl-[14.0625rem] box-border screen10:w-[32.75rem] screen26:pl-[8.75rem] screen2:w-[32.75rem] screen45:p-0 screen45:my-0 screen45:mx-auto screen23:w-[7.1875rem] screen23:h-[2.125rem] screen23:leading-8 screen23:mt-0 screen23:p-0 screen23:mb-0 screen23:mx-auto">
            <Link
              href="#"
              className="block my-0 mx-auto w-[7.8125rem] h-full text-black text-[0.9375rem] leading-[2.125rem] text-center border-[0.125rem] border-solid border-black rounded-[0.3125rem] box-border transition-colors duration-700 hover:text-white hover:bg-black"
            >
              자세히 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReserveMagazine;
