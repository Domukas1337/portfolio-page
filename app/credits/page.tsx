import Link from "next/link";

export const metadata = {
  title: "Credits",
};

export default function Credits() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-6xl font-black">Credits</h1>
      <ul className="flex flex-col justify-center items-center mt-2 text-2xl">
        <li className="flex flex-row gap-2">
          <Link
            href="https://x.com/chibidokii/status/1873858425530310848"
            className="text-cyan-200 hover:text-purple-300 transition-colors"
          >
            Background
          </Link>
          <p> - ChibiDokii</p>
        </li>
        <li className="flex flex-row gap-2">
          <Link
            href="https://catpawz.net/"
            className="text-cyan-200 hover:text-purple-300 transition-colors"
          >
            Inspiration
          </Link>
          <p> - CatPawz</p>
        </li>
        <li className="flex flex-row gap-2">
          <Link
            href="https://7tv.app/emotes/01J7H26X10000F98ZYBBPBH1WM"
            className="text-cyan-200 hover:text-purple-300 transition-colors"
          >
            Favicon
          </Link>
          <p> - Renyan</p>
        </li>
      </ul>
    </div>
  );
}
