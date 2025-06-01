import ProgramingLanguageIcon from "@/Components/ProgramingLanguageIcon";
import FadeIn from "@/Components/Fadein";

import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPython, SiTypescript } from "react-icons/si";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center h-screen">
        <div className="text-center jumpoutfadein-basic text-white">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black">
            DOMAS MICKEVIČ
          </h1>
          <p className="text-base sm:text-xl md:text-2xl font-bold mt-4">
            FRONT-END, BACKEND DEVELOPER
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center md:h-screen gap-10 text-white">
        <FadeIn time={0.5}>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-center">
            PROJECTS
          </h1>
        </FadeIn>
        <div className="flex justify-center flex-wrap">
          <FadeIn time={0.6}>
            <div className="relative group">
              <Link
                href="/bloggy"
                className="sm:hover:scale-105 transition-all block"
              >
                <Image
                  src="/bloggy.png"
                  alt="bloggy"
                  width={700}
                  height={600}
                />
                <div className="absolute inset-2 rounded-xl flex items-center justify-center opacity-0 sm:group-hover:opacity-100 sm:group-hover:backdrop-blur-sm transition-all duration-200">
                  <div className="flex flex-col text-center">
                    <p className="text-white text-xl font-bold">Bloggy</p>
                    <p>Simple blog site for everyone to use.</p>
                  </div>
                </div>
              </Link>
            </div>
          </FadeIn>
          <div className="flex justify-center flex-wrap">
            <FadeIn time={0.9}>
              <div className="relative group">
                <Link
                  href="/dmkas"
                  className="sm:hover:scale-105 transition-all block"
                >
                  <Image
                    src="/dmkas.png"
                    alt="dmkas"
                    width={700}
                    height={600}
                  />
                  <div className="absolute inset-2 rounded-xl flex items-center justify-center opacity-0 sm:group-hover:opacity-100 sm:group-hover:backdrop-blur-sm transition-all duration-200">
                    <div className="flex flex-col text-center">
                      <p className="text-white text-xl font-bold">DMKAS</p>
                      <p>An anime search engine built using the JIKAN API.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
        <FadeIn time={1.2}>
          <p className="text-lg text-center md:text-xl xl:text-2xl font-black">
            Click an image to learn more!
          </p>
        </FadeIn>
      </div>

      <div className="flex justify-center h-screen">
        <div className="flex flex-col justify-center text-white gap-10 text-center">
          <p className="text-6xl sm:text-8xl md:text-9xl font-black">
            ABOUT ME
          </p>
          <div className="flex flex-col justify-center text-xl sm:text-3xl font-semibold">
            <p>
              My name is <strong className="text-indigo-200">Domas.</strong>
            </p>
            <p>
              I am a <span className="text-indigo-200 font-bold">frontend</span>{" "}
              & <span className="text-indigo-200 font-bold">backend</span>{" "}
              developer.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-bold">Technologies I use:</p>
            <div className="flex flex-row gap-2 justify-center text-2xl sm:text-3xl md:text-4xl">
              <ProgramingLanguageIcon link="https://react.dev/" color="cyan">
                <FaReact />
              </ProgramingLanguageIcon>
              <ProgramingLanguageIcon link="https://nextjs.org/" color="cyan">
                <RiNextjsFill />
              </ProgramingLanguageIcon>
              <ProgramingLanguageIcon
                link="https://www.typescriptlang.org/"
                color="cyan"
              >
                <SiTypescript />
              </ProgramingLanguageIcon>
              <ProgramingLanguageIcon
                link="https://tailwindcss.com/"
                color="cyan"
              >
                <RiTailwindCssFill />
              </ProgramingLanguageIcon>
              <ProgramingLanguageIcon link="https://python.org/" color="cyan">
                <SiPython />
              </ProgramingLanguageIcon>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
