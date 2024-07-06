import Image from "next/image";
import React from "react";

type Props = {
  label?: string;
};

const Empty = ({ label }: Props) => {
  return (
    <div className="h-full px-6 rounded-xl flex items-center justify-center flex-col gap-4 ">
      <div className="text-3xl font-semibold text-muted-foreground">
        <div className="  flex items-center justify-center">
          {/* <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="avatar"
            className=""
            priority
          /> */}
          <span className="">CP9</span>
        </div>
      </div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </div>
  );
};

export default Empty;
