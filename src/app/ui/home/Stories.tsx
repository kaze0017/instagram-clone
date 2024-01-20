import React from "react";
import StoryThumb from "./StoryThumb";

export default function Stories() {
  return (
    <div className="flex flex-row space-x-2 px-4 py-1">
      <StoryThumb />
      <StoryThumb />
      <StoryThumb />
      <StoryThumb />
    </div>
  );
}
