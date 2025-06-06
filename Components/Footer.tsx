import Image from "next/image";
import Link from "next/link";

import { FaSquareGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 backdrop-blur-3xl shadow-2xl mx-8 sm:mx-24 rounded-2xl z-50 border mb-2">
      <div className="flex items-center m-2">
        <Link
          href="https://github.com/Domukas1337"
          className="hover:scale-105 transition-all dmkas"
        >
          <Image
            src={"https://avatars.githubusercontent.com/u/135130646?v=4"}
            alt="profile"
            width={50}
            height={100}
            className="rounded-full bg-black"
          />
        </Link>
        <div className="flex flex-col pl-4">
          <h1 className="text-md sm:text-2xl dmkas">DOMUKAS</h1>
          <p className="text-sm">DESIGNING & PROGRAMMING WEBSITES.</p>
        </div>
        <div className="flex flex-row ml-auto">
          <Link href="https://github.com/Domukas1337">
            <FaSquareGithub className="text-3xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
