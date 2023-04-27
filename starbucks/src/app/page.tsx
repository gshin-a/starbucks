// prettier-ignore
"use client"

import { useState } from "react";

import LayerFloating from "@/components/home/LayerFloating";
import MainVisual from "@/components/home/MainVisual";
import NoticeLine from "@/components/home/NoticeLine";
import MainPromBnr from "@/components/home/MainPromBnr";

function Home() {
  const [openBnr, setOpenBnr] = useState(false);
  return (
    <div>
      <LayerFloating />
      <MainVisual />
      <NoticeLine openBnr={openBnr} setOpenBnr={setOpenBnr} />
      {openBnr && <MainPromBnr />}
    </div>
  );
}

export default Home;
