import SocialCont from "@/Components/SocialCont";
import Image from "next/image";

import { FaInstagram } from "react-icons/fa";

export const metadata = {
  title: "Contacts",
};

export default function Contacts() {
  return (
    <main className="flex flex-col">
      <Image
        src="/chibi.gif"
        alt="chibi"
        className="absolute h-screen top-0 left-0 chibi-background fade-in object-cover"
        fill
        priority
        unoptimized
      />
      <div className="flex flex-col justify-center mt-56 md:ml-10 mx-10 md:mx-0 z-10">
        <h1 className="text-4xl md:text-6xl font-black">Contacts</h1>
        <p className="w-full md:w-1/2 text-2xl font-medium mt-2 text-gray-300">
          Feel free to reach out through any of the links below! I will try to
          respond as fast as I can, but I&apos;m just human.
        </p>
      </div>

      <div className="flex flex-col justify-center mb-32">
        <div className="flex flex-col md:ml-10 mx-10 md:mx-0 z-10 mt-40">
          <h1 className="text-xl md:text-3xl font-black">Contacts & Socials</h1>
          <p className="w-full md:w-1/2 text-lg font-medium mt-2 text-gray-300">
            Here are some ways to get in touch with me or follow my activities
            on various platforms.
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-screen justify-center items-center gap-10 mt-10 mb-24">
          <SocialCont
            header="Instagram"
            link="https://www.instagram.com/domas_mickevic/"
            description="Follow my visual updates and personal moments"
            icon={<FaInstagram className="text-xl" />}
            color="bg-pink-500"
            linkText="Follow me!"
          />
          <SocialCont
            header="Instagram"
            link="https://www.instagram.com/domas_mickevic/"
            description="Follow my visual updates and personal moments"
            icon={<FaInstagram className="text-xl" />}
            color="bg-pink-500"
            linkText="Follow me!"
          />
        </div>
      </div>
    </main>
  );
}
