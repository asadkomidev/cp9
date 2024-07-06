"use client";

import { Prompt } from "./prompt";

import { TOOLS } from "@/global/constants/navigation";
import History from "@/components/history";
import ImagesBox from "./music-box";

type Props = {};

const MusicDisplay = (props: Props) => {
  const tools = TOOLS.filter((tool) => tool.label !== "Music");
  return (
    <div className="h-screen relative ">
      <div className="fixed top-4 z-50">
        <History
          title="Music history"
          description=" Currently we do not support music history feature. We are
                working on it."
          tools={tools}
        />
      </div>
      <div className="pt-32">
        <Prompt />
      </div>
      <div className="w-full">
        <ImagesBox />
      </div>
    </div>
  );
};

export default MusicDisplay;
