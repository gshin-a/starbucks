import Link from "next/link";

function Fav() {
  return (
    <div className="block relative h-[50rem] bg-[url('/assets/img/home/2023_spring2_pick_bg.jpg')] bg-fixed bg-bottom bg-no-repeat bg-[#45434c] bg-[auto_87%]">
      <div className=" left-1/2 ml-[-40rem] absolute top-0 w-[80rem] bottom-0">
        <div className="absolute bg-[url('/assets/img/home/fav_prod_txt01.png')] h-[12.75rem] left-[17.5rem] overflow-hidden top-[7.5rem] w-[16.125rem] z-[7]"></div>
        <div className="absolute overflow-hidden w-[22.625rem] h-[9.75rem] left-[11.375rem] bg-[url('/assets/img/home/2023_pick_text2_img.png')] bg-no-repeat bg-contain z-[7] top-[23.125rem]"></div>
        <div className="absolute bg-[url('/assets/img/home/2023_spring2_pick_img.png')] bg-no-repeat bg-[length:100%] bg-center z-[7] top-[6.25rem] right-[-10.1875rem] w-[57rem] h-[35.9375rem] screen12:top-1/2 screen12:translate-y-[-50%] screen12:right-[3.75rem] screen12:w-[45rem] screen12:h-[29.6875rem]"></div>
        <div className="absolute w-[7.8125rem] h-[2.375rem] left-[20.5rem] top-[35.625rem] z-[7]">
          <Link
            href="#"
            className="block text-white text-[0.9375rem] h-full leading-[2.125rem] text-center w-full transition-colors duration-700 border-[0.125rem] border-solid border-white box-border rounded-[0.3125rem] hover:bg-white hover:text-black"
          >
            자세히 보기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Fav;
