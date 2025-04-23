import Link from "next/link";

export default function ButtonIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="border border-white rounded-xl px-2 py-1">
      {children}
    </Link>
  );
}
