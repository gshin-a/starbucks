// prettier-ignore
"use client"

import { useState } from "react";
import { RecoilRoot } from "recoil";

import LayerFloating from "@/components/home/LayerFloating";
import MainVisual from "@/components/home/MainVisual";
import NoticeLine from "@/components/home/NoticeLine";
import MainPromBnr from "@/components/home/MainPromBnr";
import Rewards from "@/components/home/Rewards";
import SeasonBnr from "@/components/home/SeasonBnr";
import Reserve from "@/components/home/Reserve";
import Fav from "@/components/home/Fav";
import ReserveMagazine from "@/components/home/ReserveMagazine";
import Store from "@/components/home/Store";
import MobGNB from "@/components/MobGNB";
import Header from "@/components/Header";
import HeaderM from "@/components/HeaderM";

function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      className={`relative w-full overflow-x-hidden ${
        openMenu ? "-left-[70%]" : "left-0"
      } transition-[left] duration-500`}
    >
      <Header />
      <HeaderM openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <MobGNB openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <LayerFloating />
      <MainVisual />
      <RecoilRoot>
        <NoticeLine />
        <MainPromBnr />
      </RecoilRoot>
      <Rewards />
      <SeasonBnr />
      <Reserve />
      <Fav />
      <ReserveMagazine />
      <Store />
    </div>
  );
}

export default Home;
