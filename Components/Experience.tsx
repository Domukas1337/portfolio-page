export default function Experience({
  experienceFrom,
  experienceTo,
  kindOf,
  title,
  description,
  technologies,
}: {
  experienceFrom: string;
  experienceTo: string;
  kindOf: string;
  title: string;
  description: string;
  technologies: string[];
}) {
  return (
    <div className="bg-gray-800/50 px-10 py-8 rounded-2xl backdrop-blur-3xl shadow-2xl w-full lg:w-2/3">
      <div className="flex flex-col sm:flex-row lg:items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-purple-300 bg-purple-300/10 px-4 py-1 rounded-full w-6/12 sm:w-fit mt-2 sm:mt-0">
          {experienceFrom} - {experienceTo}
        </p>
      </div>
      <p className="text-pink-300 my-2">{kindOf}</p>
      <p className="my-2 font-medium text-gray-300">{description}</p>
      <ul className="flex flex-row flex-wrap gap-2 text-gray-200 text-sm">
        {technologies.map((technology) => (
          <li
            key={technology}
            className="bg-gray-500/50 px-4 py-1 rounded-full font-medium"
          >
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
}
