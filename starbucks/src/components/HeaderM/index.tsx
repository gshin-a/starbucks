import Link from "next/link";

function HeaderM({
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="relative hidden screen17:block h-[4.1875rem] border-b-[0.125rem] border-solid border-[#000]">
      <div className="flex justify-between items-center fixed w-full h-[4.3125rem] left-0 z-20 bg-[#f6f5ef] border-b-[0.0625rem] border-solid border-[#e5e5e5]">
        <div className="block w-[2.8125rem] h-[2.8125rem] ml-[0.625rem]">
          <Link
            href="/"
            className="block w-full h-full bg-[length:2.8125rem_auto] bg-[url('/assets/img/headerm/logo.png')] overflow-hidden"
          ></Link>
        </div>
        <nav className="block w-[15rem] h-[4.375rem]">
          <ul className="flex justify-between">
            <li className="w-[3.75rem] relative h-[3.75rem] mt-[0.625rem] mr-0 mb-0">
              <Link
                href="#"
                className="hidden absolute overflow-hidden w-[3.75rem] h-[3.75rem]"
              ></Link>
            </li>
            <li className="flex items-center justify-center w-[3.75rem] relative h-[3.75rem] mt-[0.625rem] mr-0 mb-0">
              <Link
                href="#"
                className="block absolute overflow-hidden w-[1.5625rem] h-[1.875rem] bg-[url('/assets/img/headerm/icon_user_m.png')] bg-100auto"
              ></Link>
            </li>
            <li className="flex items-center justify-center w-[3.75rem] relative h-[3.75rem] mt-[0.625rem] mr-0 mb-0">
              <Link
                href="#"
                className="block absolute overflow-hidden w-6 h-8 bg-[url('/assets/img/headerm/icon_spot_m.png')] bg-100auto"
              ></Link>
            </li>
            <li className="flex items-center justify-center w-[3.75rem] relative h-[3.75rem] mt-[0.625rem] mr-0 mb-0">
              <button
                onClick={() => setOpenMenu(true)}
                className="block absolute overflow-hidden w-[1.75rem] h-[1.625rem] bg-[url('/assets/img/headerm/btn_berger_m.png')] bg-100auto"
              ></button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeaderM;
