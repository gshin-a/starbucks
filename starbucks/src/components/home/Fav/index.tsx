import Link from "next/link";

function Fav() {
  return (
    <div className="block relative h-[50rem] bg-[url('/assets/img/home/2023_spring2_pick_bg.jpg')] bg-fixed bg-bottom bg-no-repeat bg-[#45434c] bg-[auto_87%] screen17:bg-[url('/assets/img/home/2023_m_summer1_pick_bg_1.jpg')] screen18:bg-[center_-0.1875rem] screen17:bg-cover screen17:bg-scroll screen18:w-full screen23:bg-[center_-0.375rem] screen17:h-[232vw] screen17:p-0 screen17:w-full">
      <div className=" left-1/2 ml-[-40rem] absolute top-0 w-[80rem] bottom-0">
        <div className="absolute bg-[url('/assets/img/home/fav_prod_txt01.png')] h-[12.75rem] left-[17.5rem] overflow-hidden top-[7.5rem] w-[16.125rem] z-[7] screen17:bg-[url('/assets/img/home/mobile_menu_txt01.png')] screen17:bg-no-repeat screen17:bg-100auto screen18:h-[4.5rem] screen18:left-1/2 screen18:-ml-[7.8125rem] screen18:absolute screen18:w-[15.625rem] screen18:z-[7] screen23:top-[70%] screen16:top-[74%] screen44:h-[4.5rem] screen44:left-1/2 screen44:-ml-[10.9375rem] screen44:w-[21.875rem] screen16:h-[4.5rem] screen16:left-1/2 screen16:-ml-[10.9375rem] screen16:w-[21.875rem]"></div>
        <div className="absolute overflow-hidden w-[22.625rem] h-[9.75rem] left-[11.375rem] bg-[url('/assets/img/home/2023_pick_text2_img.png')] bg-no-repeat bg-contain z-[7] top-[23.125rem] screen17:bg-[url('/assets/img/home/mobile_menu_txt02.png')] screen17:bg-100auto screen18:h-[8.0625rem] screen18:left-1/2 screen18:-ml-[9.375rem] screen18:w-[18.75rem] screen16:top-[79%] screen23:top-[77%] screen44:h-[8.0625rem] screen44:left-1/2 screen44:-ml-[13.75rem] screen44:w-[27.5rem] screen16:h-[8.0625rem] screen16:left-1/2 screen16:-ml-[13.75rem] screen16:w-[27.5rem]"></div>
        <div className="absolute bg-[url('/assets/img/home/2023_spring2_pick_img.png')] bg-no-repeat bg-[length:100%] bg-center z-[7] top-[6.25rem] right-[-10.1875rem] w-[57rem] h-[35.9375rem] screen40:top-1/2 screen40:-translate-y-1/2 screen40:right-[3.75rem] screen40:w-[45rem] screen40:h-[29.6875rem] screen41:top-1/2 screen41:-translate-y-1/2 screen41:right-[10rem] screen41:w-[35.625rem] screen41:h-[23.75rem] screen16:mt-[15.625rem] screen16:mx-auto screen16:mb-0 screen42:w-80 screen42:h-[16.5rem] screen42:mt-[7.5rem] screen42:mx-auto screen42:mb-0 screen43:mt-20 screen43:mx-auto screen43:mb-0 screen43:w-80 screen43:h-[16.5rem] screen17:static screen17:translate-y-0 screen17:bg-[url('/assets/img/home/2023_summer1_pick_img_1.png')] screen44:w-[28.75rem] screen44:h-[19.625rem] screen44:mt-[9.375rem] screen44:mx-auto screen44:mb-0 screen16:w-[35.625rem] screen16:h-[23.75rem]"></div>
        <div className="absolute w-[7.8125rem] h-[2.375rem] left-[20.5rem] top-[35.625rem] z-[7] screen18:left-1/2 screen18:-ml-[3.75rem] screen16:top-[88%] screen23:w-[7.1875rem] screen23:h-[2.125rem] screen23:leading-8 screen23:mt-0 screen23:top-[89%] screen44:left-1/2 screen44:-ml-[3.75rem] screen16:left-1/2 screen16:-ml-[3.75rem]">
          <Link
            href="#"
            className="block text-white text-[0.9375rem] h-full leading-[2.125rem] text-center w-full transition-colors duration-700 border-[0.125rem] border-solid border-white box-border rounded-[0.3125rem] hover:bg-white hover:text-black screen23:text-[0.8125rem] screen23:leading-[1.875rem]"
          >
            자세히 보기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Fav;
