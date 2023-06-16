import backgroundImage from "assets/images/user_homepage_bg.jpg";
import SearchForm from "pages/user_pages/components/search_form";

export default function HeroSection() {
  return (
    <div
      className="h-3/4 min-h-[400px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex h-full w-full flex-col items-start justify-end  bg-gray-500 bg-opacity-40 p-5 text-xl text-white md:text-3xl">
        <div className="container mx-auto space-y-2">
          <p>
            <span className="text-2xl font-bold md:text-5xl">Welcome.</span>
            <br /> Millions of movies, TV shows and people to discover. Explore
            now.
          </p>
          <SearchForm />
        </div>
      </div>
    </div>
  );
}
