import AboutSite from "@/Components/AboutSite";

export default function Dmkas() {
  return (
    <div>
      <AboutSite
        title="DMKAS"
        image="/dmkas.png"
        description="An anime search engine built using the JIKAN API"
        link="https://github.com/Domukas1337/dmkas-app"
        features={["Easy to use", "Fast loading", "Responsive design"]}
      />
    </div>
  );
}
