import Experience from "@/Components/Experience";
import Image from "next/image";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <main className="flex flex-col mt-24">
      <div className="flex flex-col lg:flex-row justify-center items-center mx-8 lg:mx-0 gap-2">
        <div>
          <h1 className="text-3xl md:text-6xl font-black">I&apos;m Domukas</h1>
          <p className="text-lg md:text-2xl text-gray-300 w-1/2">
            Developer, designer & creative enthusiast passionate about building
            beautiful, useful things.{" "}
          </p>
        </div>
        <Image
          src={"https://avatars.githubusercontent.com/u/135130646?v=4"}
          alt="profile"
          width={200}
          height={100}
          className="rounded-full bg-black border-2 border-gray-300"
        />
      </div>

      <div className="flex flex-col justify-center items-center mx-8 lg:mx-0 gap-2 mt-8">
        <h1 className="text-2xl lg:text-3xl font-black my-6">About Me</h1>
        <p className="text-base bg-gray-800/50 text-gray-300 px-10 py-8 rounded-2xl shadow-2xl w-full lg:w-2/3 font-bold">
          Hello! I&apos;m a passionate developer with a love for creating
          beautiful and functional websites. I specialize in full-stack
          development, UI/UX design. With several years of experience, I have
          developed a keen eye for detail and a commitment to writing clean,
          efficient code. <br /> When I&apos;m not coding, you can find me
          researching and learning new skills, or playing video games.
          Let&apos;s connect and create something amazing together!
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mx-8 lg:mx-0 gap-2 mt-8">
        <h1 className="text-2xl lg:text-3xl font-black my-6">Experience</h1>
        <Experience
          experienceFrom="2022"
          experienceTo="Present"
          kindOf="own projects"
          title="Full Stack Developer"
          description="I am currently learning a Full Stack Developer. I am working with React, Next.JS, Tailwind CSS to build apps that feel and look amazing."
          technologies={["React", "Next.js", "Tailwind CSS", "TypeScript"]}
        />
      </div>
    </main>
  );
}
