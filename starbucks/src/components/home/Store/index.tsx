import Link from "next/link";

function Store() {
  return (
    <div className="relative overflow-hidden w-full h-[25rem] bg-[url('/assets/img/home/store_bg.jpg')] bg-100auto screen18:h-[46.875rem] screen44:bg-100auto screen44:h-[46.875rem] screen16:bg-100auto screen16:h-[46.875rem]">
      <div className="absolute left-1/2 -ml-[40rem] top-0 w-[80rem]">
        <div className="absolute w-[14.25rem] h-[14.25rem] left-[24.375rem] top-[9.3125rem] z-[5] bg-[url('/assets/img/home/221212_main_story_2.png')] bg-contain screen18:bg-100auto screen18:h-[10.5rem] screen18:left-[38.125rem] screen18:w-[10.625rem] screen44:bg-100auto screen44:h-[12.4375rem] screen44:left-[39.375rem] screen44:w-[12.5rem] screen16:bg-100auto screen16:h-[12.4375rem] screen16:left-[39.375rem] screen16:w-[12.5rem]"></div>
        <div className="absolute w-[22.875rem] h-[19.5rem] left-40 top-0 z-[4] bg-[url('/assets/img/home/221212_main_story_1.png')] bg-contain screen18:bg-100auto screen18:h-[12.75rem] screen18:left-[29.375rem] screen18:w-60 screen44:bg-100auto screen44:h-[15.9375rem] screen44:left-[25rem] screen44:w-[18.75rem] screen16:bg-100auto screen16:h-[15.9375rem] screen16:left-[25rem] screen16:w-[18.75rem]"></div>
        <div className="absolute w-[21.4375rem] h-[8.875rem] left-[32.5rem] -top-[3.75rem] z-[4] bg-[url('/assets/img/home/store_exp_img03.png')] bg-contain bg-no-repeat screen18:bg-100auto screen18:h-[7.1875rem] screen18:left-[30rem] screen18:top-60 screen18:w-[11.25rem] screen44:bg-100auto screen44:h-[12.4375rem] screen44:left-[24.375rem] screen44:top-60 screen44:w-[17.5rem] screen16:bg-100auto screen16:h-[7.1875rem] screen16:left-[24.375rem] screen16:top-60 screen16:w-[17.5rem]"></div>
        <div className="absolute w-[14.375rem] h-[6.375rem] right-[1.875rem] top-[18.625rem] z-[4] bg-[url('/assets/img/home/store_exp_img04.png')] bg-contain bg-no-repeat screen18:bg-100auto screen18:h-[4.6875rem] screen18:left-[38.75rem] screen18:top-[42.1875rem] screen18:w-[10.625rem] screen44:bg-100auto screen44:h-[4.6875rem] screen44:left-[48.125rem] screen44:top-[42.1875rem] screen44:w-[10.625rem] screen16:bg-100auto screen16:h-[4.6875rem] screen16:left-[48.125rem] screen16:top-[42.1875rem] screen16:w-[10.625rem] screen46:right-[11.875rem]"></div>
        <div className="absolute overflow-hidden w-[23.375rem] h-[3.375rem] right-[16.25rem] top-[6.25rem] z-[4] bg-[url('/assets/img/home/221212_pc_main_story_txt_1.png')] bg-no-repeat screen18:bg-100auto screen18:left-1/2 screen18:h-[2.8125rem] screen18:-translate-x-1/2 screen18:z-[4] screen18:top-[22.5rem] screen18:w-[19.5rem] screen44:bg-100auto screen44:h-[3.875rem] screen44:left-1/2 screen44:-translate-x-1/2 screen44:top-[24.375rem] screen44:w-[26.875rem] screen16:bg-100auto screen16:h-[4rem] screen16:left-1/2 screen16:-translate-x-1/2 screen16:top-[22.5rem] screen16:w-[27.5rem]"></div>
        <div className="absolute overflow-hidden w-[22.875rem] h-[5.75rem] right-[17.375rem] top-[10.5rem] z-[4] bg-[url('/assets/img/home/221212_pc_main_story_txt_2.png')] screen18:bg-100auto screen18:h-[5.5625rem] screen18:left-1/2 screen18:-ml-[9.375rem] screen18:top-[26.875rem] screen18:w-[18.75rem] screen18:z-[4] screen17:bg-[url('/assets/img/home/221212_m_main_story_txt_2.png')] screen44:bg-100auto screen44:h-[8.0625rem] screen44:left-1/2 screen44:-ml-[13.75rem] screen44:top-[29.6875rem] screen44:w-[27.5rem] screen16:bg-100auto screen16:h-[8.125rem] screen16:left-1/2 screen16:-ml-[13.75rem] screen16:top-[26.875rem] screen16:w-[27.5rem]"></div>
        <div className="absolute border-[0.125rem] border-solid border-[#222] rounded-[0.1875rem] h-[2.125rem] leading-[2.125rem] top-[18.125rem] w-[7.5625rem] z-[4] right-[32rem] screen18:h-[2.125rem] screen18:left-1/2 screen18:leading-[2.125rem] screen18:-ml-[3.875rem] screen18:top-[35rem] screen18:w-[7.5625rem] screen18:z-[4] screen18:bottom-20 screen44:left-1/2 screen44:-ml-[3.875rem] screen44:top-[40rem] screen44:w-[7.5625rem] screen16:left-1/2 screen16:-ml-[3.875rem] screen16:top-[40rem] screen16:w-[7.5625rem]">
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
