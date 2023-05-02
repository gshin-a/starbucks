// prettier-ignore
"use client"

import { useState } from "react";

import LayerFloating from "@/components/home/LayerFloating";
import MainVisual from "@/components/home/MainVisual";
import NoticeLine from "@/components/home/NoticeLine";
import MainPromBnr from "@/components/home/MainPromBnr";
import delay from "@/utils/delay";
import Rewards from "@/components/home/Rewards";
import SeasonBnr from "@/components/home/SeasonBnr";
import Reserve from "@/components/home/Reserve";
import Fav from "@/components/home/Fav";
import ReserveMagazine from "@/components/home/ReserveMagazine";
import Store from "@/components/home/Store";

function Home() {
  const [openBnr, setOpenBnr] = useState(false);
  const [animateCloseBnr, setAnimateCloseBnr] = useState(false);

  async function closeBnr() {
    setAnimateCloseBnr(true);
    await delay(0.5);
    setOpenBnr(false);
    setAnimateCloseBnr(false);
  }
  return (
    <div className="relative w-full overflow-x-hidden">
      <LayerFloating />
      <MainVisual />
      <NoticeLine
        openBnr={openBnr}
        setOpenBnr={setOpenBnr}
        closeBnr={closeBnr}
      />
      {openBnr && <MainPromBnr animateCloseBnr={animateCloseBnr} />}
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
