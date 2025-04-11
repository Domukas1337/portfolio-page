import Navbar from "@/Components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col justify-center h-screen first-background text-6xl sm:text-8xl md:text-9xl text-white pl-2">
        <p>DESIGNING</p>
        <p>RESPONSIVE</p>
        <p>WEBSITES.</p>
      </div>
      <div className="flex flex-col justify-center h-screen second-background text-white pl-2">
        <div className="flex justify-center flex-wrap">
          <Link href="/bloggy" className="hover:scale-105 transition-all">
            <Image src="/bloggy.png" alt="bloggy" width={700} height={600} />
          </Link>
          <Link href="/dmkas" className="hover:scale-105 transition-all">
            <Image src="/dmkas.png" alt="bloggy" width={700} height={600} />
          </Link>
        </div>
        <p className="text-xl text-center sm:text-2xl">
          Click on image to learn more!
        </p>
      </div>
    </main>
  );
}
