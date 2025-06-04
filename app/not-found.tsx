import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-6xl font-black">404</h1>
      <p className="text-2xl">Page not found</p>
      <Link
        href="/"
        className="bg-purple-300 text-black py-2 px-4 mt-4 rounded-lg hover:bg-purple-400 transition-all text-center"
      >
        Return Home
      </Link>
    </div>
  );
}
