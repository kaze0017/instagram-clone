import React from "react";
import { FaRegComment } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoPaperPlaneOutline } from "react-icons/io5";

export default function PostActions() {
  return (
    <div className="flex flex-row justify-between text-2xl px-2">
      <div className="flex flex-row space-x-1">
        <IoMdHeartEmpty />
        <FaRegComment />
        <IoPaperPlaneOutline />
      </div>
      <div className="">
        <img
          src="icons/save-outline.svg"
          style={{
            width: "24px",
            height: "24px",
          }}
          alt="Archive icon"
        />
      </div>
    </div>
  );
}
