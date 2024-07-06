"use client";

import { TOOLS } from "@/global/constants/navigation";
import ToolCard from "./tool-card";

const Tools = () => {
  return (
    <div className="mb-32">
      <div className="z-10 grid w-full grid-cols-2 gap-6 md:grid-cols-3">
        {TOOLS.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
