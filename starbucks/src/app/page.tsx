// prettier-ignore
"use client"

import LayerFloating from "@/components/home/LayerFloating";
import MainVisual from "@/components/home/MainVisual";
import NoticeLine from "@/components/home/NoticeLine";

function Home() {
  return (
    <div>
      <LayerFloating />
      <MainVisual />
      <NoticeLine />
    </div>
  );
}

export default Home;
