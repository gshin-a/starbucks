import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="fixed top-0 left-0 w-full bg-[#f6f5ef] border-b-[0.0625rem] border-b-solid border-b-[#e5e5e5] border-t-[0.125rem] border-t-solid border-t-black screen1:h-[7.5rem] screen1:z-[999]">
        <div className="relative my-0 mx-auto screen1:w-[68.75rem] screen1:h-[7.5rem] screen2:w-full screen2:h-[7.5rem]">
          <h1 className="absolute screen1:w-[4.6875rem] screen1:h-[4.6875rem] screen1:top-[1.375rem] screen1:z-[0.75rem] screen2:w-[4.6875rem] screen2:h-[4.6875rem] screen2:top-[1.375rem] screen2:left-5">
            <Link
              href="/"
              className="block w-full h-full overflow-hidden indent-[-100rem] bg-[url('/assets/img/home/logo.png')]"
            >
              스타벅스 코리아
            </Link>
          </h1>
          <nav className="block absolute bg-[url('/assets/img/home/sdown_util_sep.png')] screen1:w-[29rem] screen1:h-5 screen1:top-[0.9375rem] screen1:right-[5.8125rem]">
            <ul className="flex">
              <li className="text-center screen1:w-[4.75rem] screen1:h-5 ">
                <a
                  href="/login"
                  className="block text-[0.8125rem] text-[#555] screen1:leading-5"
                >
                  Sign In
                </a>
              </li>
              <li className="text-center screen1:w-[6.6875rem] screen1:h-5 screen1:ml-[0.0625rem] ">
                <a
                  href="/login"
                  className="block text-[0.8125rem] text-[#555] screen1:leading-5"
                >
                  My Starbucks
                </a>
              </li>
              <li className="text-center screen1:w-[11.3125rem] screen1:h-5 screen1:ml-[0.0625rem] ">
                <a
                  href="/login"
                  className="block text-[0.8125rem] text-[#555] screen1:leading-5"
                >
                  Customer Service & Ideas
                </a>
              </li>
              <li className="text-center screen1:w-[6.0625rem] screen1:h-5 screen1:ml-[0.0625rem] ">
                <a
                  href="/login"
                  className="block text-[0.8125rem] text-[#555] screen1:leading-5"
                >
                  Find a Store
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="absolute bg-white border-[0.0625rem] border-solid border-[#ccc] rounded-[0.3125rem] screen1:w-8 screen1:h-8 screen1:top-[0.5625rem] screen1:right-[3.375rem] ">
          <a
            href="javascript.void(0)"
            className="group block absolute right-0 top-0 screen1:h-[2.125rem] screen1:w-[2.125rem]"
          >
            <Image
              src="/assets/img/home/icon_magnifier_black.png"
              alt="icon_magnifier_black"
              width="20"
              height="21"
              className="absolute align-top max-w-full z-[1] screen1:right-[0.4375rem] screen1:top-[0.375rem]"
            />
          </a>
          <input
            type="text"
            placeholder="통합검색"
            className="group-hover:block"
          />
        </div>
      </div>
    </header>
  );
}
