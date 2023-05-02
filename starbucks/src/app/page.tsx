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
    <div>
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
    </div>
  );
}

export default Home;
