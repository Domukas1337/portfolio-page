import { IoIosInformationCircle } from "react-icons/io";
import { FaDev } from "react-icons/fa";

import Image from "next/image";
import InformationCont from "@/Components/InformationCont";

export const metadata = {
  title: "Home | domukas",
};

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center h-screen">
        <Image
          src="/chibi.gif"
          alt="chibi"
          className="absolute h-screen top-0 left-0 chibi-background fade-in object-cover"
          fill
          priority
          unoptimized
        />
        <div
          className="ml-2 sm:ml-10 text-white z-10 fadein"
          style={{ "--time": "1s" } as React.CSSProperties}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black">
            Coding for fun!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-2 text-gray-300 sm:w-1/2 w-4/5">
            Hello, I am Domukas. With more than three years of experience, I
            specialize in creating user-friendly, responsive, full-stack
            websites. Self-taught programmer and designer.
          </p>
          <p className="text-md sm:text-lg md:text-xl mt-4 font-black">
            Scroll down ↓
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="ml-2 sm:ml-10 text-white">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-black">
            Check out various information pages!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-2 text-gray-300">
            If you want to know more about me, this is where you&apos;re gonna
            wanna look ;)
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-screen justify-center gap-10 my-10">
          <InformationCont
            icon={<IoIosInformationCircle className="text-2xl md:text-3xl" />}
            header="About"
            link="/about"
            description="Here you'll find everything to know about me (links, contact, experience), I would be soo thankful if you took your time to read through this!"
          />
          <InformationCont
            icon={<FaDev className="text-2xl md:text-3xl" />}
            header="Projects"
            link="/projects"
            description="Here you can see everything... Keep in mind this page may be outdated, because I don't always update this website, since I have a lot to do."
          />
        </div>
      </div>
    </main>
  );
}
