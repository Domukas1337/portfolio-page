import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between py-4 px-3">
        <Link href="/" className="text-2xl">
          DMKAS
        </Link>
        <Link href="/contacts" className="text-2xl">
          Contact
        </Link>
      </div>
    </nav>
  );
}
