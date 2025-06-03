import Image from "next/image";
import { FaSquareGithub } from "react-icons/fa6";

export default function AboutSite({
  title,
  image,
  description,
  features,
  link,
}: {
  title: string;
  image: string;
  description: string;
  features: string[];
  link: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image src={image} alt={title} width={700} height={700} />
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <ul className="flex flex-row gap-4 font-bold">
            {features.map((feature, index) => (
              <li
                className="text-md border rounded-lg p-0.5 px-2 backdrop-blur-2xl"
                key={index}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-4xl font-bold">{description}</p>
        <div className="flex justify-center mt-4">
          <a href={link} className="text-4xl">
            <FaSquareGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
