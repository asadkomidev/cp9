"use client";

import { motion } from "framer-motion";
import { BadgeDollarSign, BookOpenText, Rss } from "lucide-react";
import React, { useState } from "react";
import { BorderBeam } from "./features/border-beam";

const ToolsSection = () => {
  const [activeImage, setActiveImage] = useState(1);

  const ImageTabs = [
    {
      name: "Conversation",
      description:
        "Effortlessly interact with cp9 using our human-like Conversational AI.",
      icon: <Rss />,
    },
    {
      name: "Code",
      description:
        "Boost productivity and speed up coding with cp9 Code Generation tool.",
      icon: <BadgeDollarSign />,
    },
    {
      name: "Images",
      description:
        "Generate unique, high-quality images in seconds with cp9 Image Generation.",
      icon: <BookOpenText />,
    },
  ];

  const Images = [
    {
      imageNumber: 1,
      imageSource: "/im1.png",
    },
    {
      imageNumber: 2,
      imageSource: "/im2.png",
    },
    {
      imageNumber: 3,
      imageSource: "/im3.png",
    },
  ];

  const handleImageChange = (index: number) => {
    setActiveImage(index);
  };

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden bg-red-300">
      <div className="image-navigation mt-8 flex w-full items-center justify-center text-center">
        <div className="mb-10 flex w-full flex-col gap-2 md:flex-row">
          {ImageTabs.map((tab, index) => (
            <button
              key={index}
              className={`group relative flex w-full flex-col items-start p-3 text-left`}
              onClick={() => handleImageChange(index + 1)}
            >
              <div
                className={`mb-3 ${
                  activeImage === index + 1
                    ? `bg-primary text-white`
                    : `bg-primary text-white`
                } z-10 rounded-lg p-1 group-hover:bg-primary group-hover:text-white`}
              >
                {tab.icon}
              </div>
              <div className="z-10 mb-2 text-xs font-semibold">{tab.name}</div>
              <p className="z-10 m-0 text-xs text-gray-600 md:text-sm">
                {tab.description}
              </p>
              {activeImage === index + 1 && (
                <motion.span
                  layoutId="tab"
                  transition={{ type: "spring", duration: 0.3 }}
                  className="absolute inset-0 z-0 rounded-lg bg-muted"
                ></motion.span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="relative rounded-xl border">
        {Images.map((image, index) => (
          <div
            key={index}
            data-image-number={image.imageNumber}
            className="rounded-xl"
          >
            {activeImage === image.imageNumber && (
              <motion.img
                src={image.imageSource}
                alt={`Image ${image.imageNumber}`}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full rounded-[inherit]"
              />
            )}
            <BorderBeam size={100} duration={12} delay={9} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;
