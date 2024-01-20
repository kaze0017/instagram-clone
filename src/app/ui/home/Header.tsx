import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoPaperPlaneOutline } from "react-icons/io5";

import React from "react";

export default function Header() {
  return (
    <div className="sticky top-0 z-10 bg-white flex flex-row px-4 py-4  justify-between items-center text-2xl">
      <Image
        src={"images/textLogo.svg"}
        width={100}
        height={35.71}
        style={{
          width: "100px",
        }}
        alt="Instagram text logo"
      />
      <div className="flex flex-row gap-2">
        <IoMdHeartEmpty />
        <IoPaperPlaneOutline />
      </div>
    </div>
  );
}
