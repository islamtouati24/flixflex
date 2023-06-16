import NavBar from "../components/navbar";
import HeroSection from "./components/hero";
import PopularMovies from "./components/popular";

export default function UserHomePage(params) {
  return (
    <>
      <NavBar />
      <HeroSection />
      <PopularMovies
        url="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
        title="movies"
      />
      <PopularMovies
        url="https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
        title="Series"
      />
    </>
  );
}
