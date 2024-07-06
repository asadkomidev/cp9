import React from "react";
import Hero from "./hero";
import About from "./about";
import Features from "./features";
import ToolsSection from "./tools";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <main>
      <Hero />
      {/* <ToolsSection /> */}
    </main>
  );
};

export default HomePage;
