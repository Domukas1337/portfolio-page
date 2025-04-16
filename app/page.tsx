import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center h-screen first-background text-6xl sm:text-8xl md:text-9xl text-white pl-2">
        <div className="jumpoutfadein">
          <p>DESIGNING</p>
          <p>RESPONSIVE</p>
          <p>WEBSITES.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center h-screen second-background text-white pl-2">
        <div className="flex justify-center flex-wrap">
          <Link
            href="https://github.com/Domukas1337/bloggy"
            className="sm:hover:scale-105 transition-all"
          >
            <Image src="/bloggy.png" alt="bloggy" width={700} height={600} />
          </Link>
          <Link
            href="https://github.com/Domukas1337/dmkas-app"
            className="sm:hover:scale-105 transition-all"
          >
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
        <div className="flex flex-col justify-center text-white gap-10 pr-10 pl-2">
          <div className="flex flex-col justify-center text-lg sm:text-2xl">
            <p>
              My name is <strong>Domukas.</strong>
            </p>
            <p>I am a frontend developer.</p>
            <p>I like to code.</p>
            <p>I like to design.</p>
          </div>
          <div className="flex flex-col">
            <p>Technologies I use:</p>
            <ul className="list-disc">
              <li>
                <Link href="https://react.dev/" className="hover:underline">
                  React
                </Link>
              </li>
              <li>
                <Link href="https://nextjs.org/" className="hover:underline">
                  NextJS
                </Link>
              </li>
              <li>
                <Link
                  href="https://tailwindcss.com/"
                  className="hover:underline"
                >
                  TailwindCSS
                </Link>
              </li>
              <li>
                <Link
                  href="https://typescriptlang.org/"
                  className="hover:underline"
                >
                  Typescript
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
