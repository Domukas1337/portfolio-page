import AboutSite from "@/Components/AboutSite";

export default function Bloggy() {
  return (
    <div>
      <AboutSite
        title="Bloggy"
        image="/bloggy.png"
        description="Bloggy is a blog website made with Next.js and Tailwind CSS."
        link="https://github.com/Domukas1337/bloggy"
        features={["Easy to use", "Fast loading", "Responsive design"]}
      />
    </div>
  );
}
