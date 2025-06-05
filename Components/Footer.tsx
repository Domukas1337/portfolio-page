import Image from "next/image";
import Link from "next/link";

import { FaSquareGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col backdrop-blur-sm">
      <div className="flex items-center m-4">
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
        <div className="flex flex-row ml-auto gap-2">
          <Link
            href="https://github.com/Domukas1337"
            className="hover:scale-105 transition-all"
          >
            <FaSquareGithub className="text-3xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
