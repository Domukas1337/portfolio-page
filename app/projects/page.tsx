import Link from "next/link";

export const metadata = {
  title: "Credits",
};

export default function Projects() {
  return (
    <main className="flex flex-col gap-24">
      <div className="flex flex-col justify-center mt-40 md:ml-10 mx-10 md:mx-0 z-10">
        <h1 className="text-4xl md:text-6xl font-black">My projects</h1>
        <p className="w-full md:w-1/2 text-2xl font-medium mt-2 text-gray-300">
          I&apos;ve coded a lot of stuff... here you can see almost
          everything... Keep in mind this page may be outdated, because I
          don&apos;t always update this website, since I have a lot to do.
        </p>
      </div>

      <div className="flex flex-col md:ml-10 mx-10 md:mx-0 z-10">
        <h1 className="text-xl md:text-3xl font-black">Active Projects</h1>
        <p className="w-full md:w-1/2 text-lg font-medium mt-2 text-gray-300">
          Projects that I&apos;m currently working on.
        </p>
      </div>

      <div className="flex flex-col justify-center mx-2 md:mx-10 rounded-2xl border backdrop-blur-3xl">
        <table className="w-full">
          <thead className="border-b">
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
              <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider hidden sm:table-cell">
                Links
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-pink-700/10">
              <td className="py-3 px-4 text-sm font-black">Portfolio Page</td>
              <td className="py-3 px-4 text-sm font-medium">
                Page to get information about me (current page)
              </td>
              <td className="py-3 px-4 text-sm">
                <span className="bg-gray-500/50 px-2 py-1 rounded-full text-green-300">
                  Website
                </span>
              </td>
              <td className="py-3 px-4 text-sm hidden sm:table-cell">
                <Link
                  href="/"
                  className="uppercase font-bold hover:text-pink-400"
                >
                  Home
                </Link>
                <span> - </span>
                <Link
                  href="https://github.com/Domukas1337/portfolio-page"
                  className="uppercase font-bold hover:text-pink-400"
                >
                  Github
                </Link>
              </td>
            </tr>
            <tr className="bg-pink-700/10 border-b">
              <td className="py-3 px-4 text-sm font-black">Bloggy</td>
              <td className="py-3 px-4 text-sm font-medium">
                Blog app that lets you write posts anonymously
              </td>
              <td className="py-3 px-4 text-sm">
                <span className="bg-gray-500/50 px-2 py-1 rounded-full text-green-300">
                  Website
                </span>
              </td>
              <td className="py-3 px-4 text-sm hidden sm:table-cell">
                <Link
                  href="https://github.com/Domukas1337/bloggy"
                  className="uppercase font-bold hover:text-pink-400"
                >
                  Github
                </Link>
              </td>
            </tr>
            <tr className="bg-pink-700/10 border-b">
              <td className="py-3 px-4 text-sm font-black">DMKAS</td>
              <td className="py-3 px-4 text-sm font-medium">
                Anime search engine built using JIKAN API
              </td>
              <td className="py-3 px-4 text-sm">
                <span className="bg-gray-500/50 px-2 py-1 rounded-full text-green-300">
                  Website
                </span>
              </td>
              <td className="py-3 px-4 text-sm hidden sm:table-cell">
                <Link
                  href="https://github.com/Domukas1337/dmkas-app"
                  className="uppercase font-bold hover:text-pink-400"
                >
                  Github
                </Link>
              </td>
            </tr>
            <tr className="bg-pink-700/10">
              <td className="py-3 px-4 text-sm font-black">DMKAS V2</td>
              <td className="py-3 px-4 text-sm font-medium">
                Same anime search engine built using JIKAN API and Next.js
              </td>
              <td className="py-3 px-4 text-sm">
                <span className="bg-gray-500/50 px-2 py-1 rounded-full text-green-300">
                  Website
                </span>
              </td>
              <td className="py-3 px-4 text-sm hidden sm:table-cell">
                <Link
                  href="https://github.com/Domukas1337/dmkas-v2"
                  className="uppercase font-bold hover:text-pink-400"
                >
                  Github
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:ml-10 mx-10 md:mx-0 z-10">
        <h1 className="text-xl md:text-3xl font-black">Past Projects</h1>
        <p className="w-full md:w-1/2 text-lg font-medium mt-2 text-gray-300">
          Projects that I&apos;ve worked on in the past.
        </p>
      </div>

      <div className="flex flex-col justify-center mx-2 md:mx-10 rounded-2xl border backdrop-blur-3xl mb-64">
        <table className="w-full">
          <thead className="border-b">
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
              <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider hidden sm:table-cell">
                Links
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-pink-700/10 border-b">
              <td className="py-3 px-4 text-sm font-black">DMKAS Next</td>
              <td className="py-3 px-4 text-sm font-medium">
                Anime search engine rewrite built using JIKAN API and Next.js
              </td>
              <td className="py-3 px-4 text-sm">
                <span className="bg-gray-500/50 px-2 py-1 rounded-full text-green-300">
                  Website
                </span>
              </td>
              <td className="py-3 px-4 text-sm hidden sm:table-cell">
                <Link
                  href="https://github.com/Domukas1337/dmkas-next"
                  className="uppercase font-bold hover:text-pink-400"
                >
                  Github
                </Link>
              </td>
            </tr>
            <tr className="bg-pink-700/10 border-b">
              <td className="py-3 px-4 text-sm font-black">Old portfolio</td>
              <td className="py-3 px-4 text-sm font-medium">
                Old portfolio page
              </td>
              <td className="py-3 px-4 text-sm">
                <span className="bg-gray-500/50 px-2 py-1 rounded-full text-green-300">
                  Website
                </span>
              </td>
              <td className="py-3 px-4 text-sm hidden sm:table-cell">
                <Link
                  href="https://github.com/Domukas1337/about-me-new"
                  className="uppercase font-bold hover:text-pink-400"
                >
                  Github
                </Link>
              </td>
            </tr>
            <tr className="bg-pink-700/10">
              <td className="py-3 px-4 text-sm font-black">Password Manager</td>
              <td className="py-3 px-4 text-sm font-medium">
                REALLY unsafe password manager CLI
              </td>
              <td className="py-3 px-4 text-sm">
                <span className="bg-gray-500/50 px-2 py-1 rounded-full text-pink-300">
                  CLI
                </span>
              </td>
              <td className="py-3 px-4 text-sm hidden sm:table-cell">
                <Link
                  href="https://github.com/Domukas1337/password-manager"
                  className="uppercase font-bold hover:text-pink-400"
                >
                  Github
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
