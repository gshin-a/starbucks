import Link from "next/link";

function Store() {
  return (
    <div className="relative overflow-hidden w-full h-[25rem] bg-[url('/assets/img/home/store_bg.jpg')] bg-[length:100%_auto]">
      <div className="absolute left-1/2 -ml-[40rem] top-0 w-[80rem]">
        <div className="absolute w-[14.25rem] h-[14.25rem] left-[24.375rem] top-[9.3125rem] z-[5] bg-[url('/assets/img/home/221212_main_story_2.png')] bg-contain"></div>
        <div className="absolute w-[22.875rem] h-[19.5rem] left-40 top-0 z-[4] bg-[url('/assets/img/home/221212_main_story_1.png')] bg-contain"></div>
        <div className="absolute w-[21.4375rem] h-[8.875rem] left-[32.5rem] -top-[3.75rem] z-[4] bg-[url('/assets/img/home/store_exp_img03.png')] bg-contain"></div>
        <div className="absolute w-[14.375rem] h-[6.375rem] right-[1.875rem] top-[18.625rem] z-[4] bg-[url('/assets/img/home/store_exp_img04.png')] bg-contain"></div>
        <div className="absolute overflow-hidden w-[23.375rem] h-[3.375rem] right-[16.25rem] top-[6.25rem] z-[4] bg-[url('/assets/img/home/221212_pc_main_story_txt_1.png')]"></div>
        <div className="absolute overflow-hidden w-[22.875rem] h-[5.75rem] right-[17.375rem] top-[10.5rem] z-[4] bg-[url('/assets/img/home/221212_pc_main_story_txt_2.png')]"></div>
        <div className="absolute border-[0.125rem] border-solid border-[#222] rounded-[0.1875rem] h-[2.125rem] leading-[2.125rem] top-[18.125rem] w-[7.5625rem] z-[4] right-[32rem]">
          <Link
            href="#"
            className="text-[#222] block h-full text-center w-full transition-colors duration-700 hover:text-white hover:bg-[#222]"
          >
            매장 찾기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Store;
