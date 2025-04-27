import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed z-10 top-0 left-0 w-full text-xl sm:text-3xl">
      <div className="flex justify-center py-4 px-3 text-white">
        <Link href="/" className=" px-2 py-1">
          {"<"}
          <span className="font-bold text-cyan-200">Domukas</span>
          {" />"}
        </Link>
      </div>
    </nav>
  );
}
