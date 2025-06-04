import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-3xl shadow-2xl mx-24 mt-2 rounded-2xl z-50">
      <div className="flex justify-between items-center py-4 px-3 text-white">
        <Link href="/" className="rounded-2xl font-oxygen-mono">
          {"<"}
          <span className="font-bold text-cyan-200 hover:text-cyan-400 transition-colors">
            Domukas
          </span>
          {" />"}
        </Link>
        <Image
          src="/favicon.png"
          alt="logo"
          width={25}
          height={25}
          className="rounded-sm"
        />
      </div>
    </nav>
  );
}
