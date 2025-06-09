import Link from "next/link";

export default function SocialCont({
  header,
  link,
  description,
  icon,
  color,
  linkText,
}: {
  header: string;
  link: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  linkText: string;
}) {
  return (
    <div className="flex flex-col w-fit lg:w-1/4 bg-gray-800/50 backdrop-blur-3xl rounded-2xl shadow-2xl mx-2 transition-colors">
      <div className={`${color} w-full p-5 rounded-t-2xl`}>{icon}</div>
      <div className="p-4">
        <h1 className="text-2xl font-black">{header}</h1>
        <p className="text-gray-300 mt-2">{description}</p>
        <div className="flex flex-col">
          <Link
            href={link}
            className="bg-purple-300  text-black py-2 px-4 mt-4 rounded-lg hover:bg-purple-400 transition-all text-center"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}
