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
          <div className="relative group">
            <Link
              href="https://github.com/Domukas1337/bloggy"
              className="sm:hover:scale-105 transition-all block"
            >
              <Image src="/bloggy.png" alt="bloggy" width={700} height={600} />
              <div className="absolute inset-2 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-sm transition-all duration-200">
                <div className="flex flex-col text-center">
                  <p className="text-white text-xl font-bold">Bloggy</p>
                  <p>A blog built with Next.js, Supabase, and Tailwind.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center flex-wrap">
            <div className="relative group">
              <Link
                href="https://github.com/Domukas1337/dmkas-app"
                className="sm:hover:scale-105 transition-all block"
              >
                <Image src="/dmkas.png" alt="dmkas" width={700} height={600} />
                <div className="absolute inset-2 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-sm transition-all duration-200">
                  <div className="flex flex-col text-center">
                    <p className="text-white text-xl font-bold">DMKAS</p>
                    <p>
                      An anime search engine built with Vite, Tailwind, and
                      JIKAN API.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
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
          <div className="flex flex-col justify-center text-xl sm:text-3xl">
            <p>
              My name is <strong className="text-indigo-200">Domas.</strong>
            </p>
            <p>
              I am a <span className="text-indigo-200">frontend</span> and{" "}
              <span className="text-indigo-200">backend</span> developer.
            </p>
            <p>
              I like to <span className="text-indigo-200">code</span>.
            </p>
            <p>
              I like to <span className="text-indigo-200">design.</span>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-3xl">Technologies I use:</p>
            <ul className="list-disc text-xl">
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
