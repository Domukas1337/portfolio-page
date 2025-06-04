import Link from "next/link";

export default function InformationCont({
  header,
  link,
  description,
  icon,
}: {
  header: string;
  link: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-1/4 bg-gray-800/50 backdrop-blur-3xl px-10 py-8 rounded-2xl shadow-2xl">
      {icon}
      <h1 className="text-2xl font-black mt-2">{header}</h1>
      <p className="text-gray-300 mt-2">{description}</p>
      <Link
        href={link}
        className="bg-purple-300 text-black py-2 px-4 mt-4 rounded-lg hover:bg-purple-400 transition-all text-center"
      >
        Open
      </Link>
    </div>
  );
}
