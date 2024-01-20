import React from "react";
import PostOwner from "./PostOwner";
import PostImage from "./PostImage";
import PostActions from "./PostActions";
import PostComments from "./PostComments";
import PostCaption from "./PostCaption";

export default function Post() {
  return (
    <div className="py-2 flex flex-col space-y-1">
      <PostOwner />
      <PostImage />
      <PostActions />
      <PostCaption />
      {/* <PostComments /> */}
    </div>
  );
}
