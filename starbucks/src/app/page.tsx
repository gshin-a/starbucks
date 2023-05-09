// prettier-ignore
"use client"

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

function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
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
