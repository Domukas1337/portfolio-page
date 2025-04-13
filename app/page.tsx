import Navbar from "@/Components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col justify-center h-screen first-background text-6xl sm:text-8xl md:text-9xl text-white pl-2">
        <div className="jumpoutfadein">
          <p>DESIGNING</p>
          <p>RESPONSIVE</p>
          <p>WEBSITES.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center h-screen second-background text-white pl-2">
        <div className="flex justify-center flex-wrap">
          <Link href="/bloggy" className="sm:hover:scale-105 transition-all">
            <Image src="/bloggy.png" alt="bloggy" width={700} height={600} />
          </Link>
          <Link href="/dmkas" className="sm:hover:scale-105 transition-all">
            <Image src="/dmkas.png" alt="bloggy" width={700} height={600} />
          </Link>
        </div>
        <p className="text-xl text-center sm:text-2xl">
          Click an image to learn more!
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between h-screen third-background">
        <div className="flex flex-col justify-center text-white pl-2">
          <p className="text-6xl sm:text-8xl md:text-9xl">ABOUT</p>
          <p className="text-6xl sm:text-8xl md:text-9xl">ME</p>
        </div>
        <div className="flex flex-col justify-center text-white pr-10">
          <p className="text-xl text-wrap mx-2">
            I am a web designer and developer. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quam incidunt iste aperiam dicta
            ipsam, suscipit, temporibus quaerat ratione nihil atque
            exercitationem, repellat rem minima fugit eius placeat pariatur
            tenetur eligendi architecto. Totam perferendis corporis aliquid
            expedita! Minus possimus omnis rem corrupti, ut nesciunt, dolorem at
            magni quasi iusto quis mollitia!
          </p>
        </div>
      </div>
    </main>
  );
}
