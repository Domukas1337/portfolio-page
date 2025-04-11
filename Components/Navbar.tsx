import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-lg">
      <div className="flex justify-between py-4 px-3 text-white">
        <Link
          href="/"
          className="text-3xl hover:text-cyan-200 transition-colors dmkas"
        >
          <span className="text-red-600">.</span>DMKAS
        </Link>
        <Link
          href="/contacts"
          className="text-3xl uppercase hover:text-cyan-200 transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
