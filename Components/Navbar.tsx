import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed z-10 top-0 left-0 w-full bg-black/20 backdrop-blur-lg text-xl sm:text-3xl">
      <div className="flex justify-between py-4 px-3 text-white">
        <Link href="/" className="hover:text-cyan-200 transition-colors dmkas">
          <span className="text-red-600">.</span>
          DMKAS
        </Link>
        <Link
          href="/contacts"
          className=" uppercase hover:text-cyan-200 transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
