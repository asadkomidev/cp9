"use client";

import { Prompt } from "./prompt";

import { TOOLS } from "@/global/constants/navigation";
import History from "@/components/history";
import ImagesBox from "./images-box";

type Props = {};

const ImagesDisplay = (props: Props) => {
  const tools = TOOLS.filter((tool) => tool.label !== "Images");
  return (
    <div className="relative h-screen">
      <div className="fixed top-4 z-50">
        <History
          title="Image history"
          description=" Currently we do not support images history feature. We are
                working on it."
          tools={tools}
        />
      </div>
      <div className="pt-32">
        <Prompt />
      </div>
      <div className="h-full w-full">
        <ImagesBox />
      </div>
    </div>
  );
};

export default ImagesDisplay;
