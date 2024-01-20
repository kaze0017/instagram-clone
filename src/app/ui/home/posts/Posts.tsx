import React from "react";
import Post from "./Post";

export default function Posts() {
  return (
    <div className="flex flex-col border w-full">
      <Post />
      <Post />
      <Post />
    </div>
  );
}
