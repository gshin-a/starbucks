import { useState } from "react";
import { mobgnblistitems } from "./../../constants/MobGNB/index";

function ListItem({
  id,
  name,
  itemList,
}: {
  id: number;
  name: string;
  itemList: { id: number; name: string; isList: boolean }[];
}) {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  return (
    <li
      className={`${
        id === 1 ? "bg-[#2d2926]" : "bg-[#111]"
      } border-[0.0625rem] border-solid border-[#222] text-[1.75rem] leading-[4.75rem] screen18:text-[0.875rem] screen18:leading-[3.125rem] ] screen49:text-[1.125rem]`}
    >
      <button
        className="block text-white indent-5 text-left h-[4.75rem] relative w-full screen18:h-[3.125rem] screen18:w-[97%] screen18:pl-[1%] screen18:indent-[0.625rem]"
        onClick={() => setOpenSubMenu(!openSubMenu)}
      >
        {name}
        <span
          className={`block absolute ${
            openSubMenu
              ? "bg-[url('/assets/img/MobGNB/mob_gnb_arrow_up_w.png')]"
              : "bg-[url('/assets/img/MobGNB/mob_gnb_arrow_down_w.png')]"
          } bg-no-repeat bg-[length:1rem_auto] h-4 w-[1.3125rem] -mt-[0.375rem] right-10 top-1/2 screen18:right-5 screen18:w-4 screen17:bg-[length:auto]`}
        ></span>
      </button>
      <ul>
        {itemList &&
          itemList?.map(({ id, name, isList }) => (
            <li
              key={id}
              className={`block transition-[height] duration-700 overflow-hidden ${
                openSubMenu
                  ? "screen18:h-[3.125rem] screen17:h-[4.75rem]"
                  : "h-0"
              }`}
            >
              <button
                className={`relative screen18:w-[98%] text-left bg-[#181818] text-white border-b-[0.0625rem] border-solid border-[#222] text-[1.5rem] leading-[4.75rem] indent-[2.1875rem] screen18:text-[0.875rem] screen18:leading-[3.125rem] screen18:indent-[0.9375rem] block screen49:text-[1.125rem] screen17:w-full`}
              >
                {name}
                <span
                  className={`${
                    isList ? "block" : "hidden"
                  } absolute bg-[url('/assets/img/MobGNB/mob_gnb_arrow_down_g.png')] bg-no-repeat screen18:bg-[length:1rem_auto] h-3 w-[1.3125rem] -mt-[0.375rem] right-10 top-1/2 screen18:right-5 screen18:w-4`}
                ></span>
              </button>
            </li>
          ))}
      </ul>
    </li>
  );
}

function MobGNB({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div>
      <div
        className={`${
          openMenu ? "block" : "hidden"
        } bg-black opacity-70 h-full left-0 fixed top-0 w-full z-[2000]`}
      ></div>
      <div
        className={`fixed ${
          openMenu ? "right-0" : "-right-full"
        } transition-[right] duration-500 bg-black h-full pb-[1.875rem] top-0 w-[70%] z-[20001]`}
      >
        <div className="h-full overflow-auto mr-[-0.9375rem]">
          <aside className="block absolute z-[100] screen25:h-[1.875rem] screen25:-left-[3.625rem] screen25:top-[3.625rem] screen25:w-[1.875rem] screen18:h-5 screen18:-left-[2.8125rem] screen18:top-[1.5625rem] screen18:w-5">
            <button
              className={`block bg-[url('/assets/img/MobGNB/btn_gnb_close.png')] w-full h-full screen18:bg-[length:1.25rem_auto] overflow-hidden transition-transform duration-1000 ${
                openMenu ? "-rotate-180" : "rotate-0"
              }`}
              onClick={() => setOpenMenu(false)}
            ></button>
          </aside>
          <div className="relative bg-[#2d2926] border-b-[0.0625rem] border-solid border-[#222] h-[6.9375rem] w-full screen18:h-[4.375rem]">
            <div className="flex justify-between absolute h-[3.125rem] left-1/2 -ml-[14.25rem] top-[1.875rem] w-[28.5rem] screen18:h-[1.875rem] screen47:-ml-[6.875rem] screen18:top-5 screen47:w-[13.75rem] screen48:-ml-[6.25rem] screen48:w-[11.875rem] screen49:-ml-[9.375rem] screen49:w-[18.75rem]">
              <input className="border-[0.0625rem] border-solid border-[#e3e1d2] rounded-[0.1875rem] h-12 w-[19.5625rem] screen18:h-7 screen47:w-[8.75rem] screen48:w-[7.5rem] screen49:w-[11.875rem]" />
              <button className="bg-[#666] rounded-[0.1875rem] text-white text-[1.5rem] h-[3.125rem] text-center w-[7.8125rem] screen18:text-[0.875rem] screen18:h-[1.875rem] screen18:leading-[1.875rem] screen47:w-[4.375rem] screen48:w-[3.75rem] screen49:text-[1.125rem] screen49:w-[6.25rem]">
                Search
              </button>
            </div>
          </div>
          <nav className="block">
            <ul>
              {mobgnblistitems.map(({ id, name, itemList }) => (
                <ListItem key={id} id={id} name={name} itemList={itemList} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MobGNB;
