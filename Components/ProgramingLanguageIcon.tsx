import Link from "next/link";

export default function ProgramingLanguageIcon({
  children,
  color,
  link,
}: {
  children: React.ReactNode;
  color?: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className={`rounded-lg p-6 hover:bg-black/50 backdrop-blur-3xl hover:text-${color}-400 transition-colors`}
    >
      {children}
    </Link>
  );
}
