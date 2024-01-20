import Image from "next/image";
import Posts from "./ui/home/posts/Posts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Posts />
    </main>
  );
}
