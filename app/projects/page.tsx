export const metadata = {
  title: "Credits",
};

export default function Projects() {
  return (
    <main className="flex flex-col gap-24">
      <div className="flex flex-col justify-center mt-40 md:ml-10 mx-10 md:mx-0">
        <h1 className="text-4xl md:text-6xl font-black">Domukas Projects</h1>
        <p className="w-full md:w-1/2 text-2xl font-medium mt-2 text-gray-300">
          I&apos;ve coded a lot of stuff... here you can see almost
          everything... Keep in mind this page may be outdated, because I
          don&apos;t always update this website, since I have a lot to do.
        </p>
      </div>

      <div className="flex flex-col justify-center md:ml-10 mx-10 md:mx-0">
        <h1 className="text-xl md:text-3xl font-black">Active Projects</h1>
        <p className="w-full md:w-1/2 text-lg font-medium mt-2 text-gray-300">
          Projects that I&apos;m currently working on.
        </p>
      </div>

      <div className="flex flex-col justify-center mx-0 md:mx-10 rounded-3xl border bg-purple-300/30">
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                Name
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                Description
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                Type
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                Links
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </main>
  );
}
