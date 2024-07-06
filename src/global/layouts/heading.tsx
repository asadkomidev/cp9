import React from "react";

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

const Heading = ({ children, title, description }: Props) => {
  return (
    <div className="no-scrollbar">
      <div className="px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">{title}</h2>
        <p className="text-muted-foreground font-light text-sm md:text-base text-center">
          {description}
        </p>
      </div>
      <div className="px-4 md:px-16 lg:px-24 space-y-4">{children}</div>
    </div>
  );
};

export default Heading;
