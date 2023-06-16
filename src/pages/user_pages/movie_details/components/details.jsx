import noImage from "assets/images/no_image.jpg";
import { PlayIcon } from "@heroicons/react/24/outline";
export default function Details(params) {
  const { movie, type, handleModal } = params;
  return (
    <div
      className="text-white md:h-screen md:min-h-[600px]"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="h-full w-full  bg-gray-700 bg-opacity-40 p-5 text-xl text-white md:text-3xl">
        <div className="container mx-auto flex h-full flex-col items-center justify-start space-y-2 pb-5 pt-12 md:flex-row md:space-x-5">
          <img
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                : noImage
            }
            className="h-96 w-full rounded-md object-cover pt-1 md:h-[450px] md:w-64"
            alt=""
          />
          <div className="h-auto w-full space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">
                {type === "movie" ? movie.original_title : movie.original_name}
              </h1>
              <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-300">
                <p>
                  {type === "movie" ? movie.release_date : movie.first_air_date}
                </p>
                <p>•</p>
                {movie.genres.map((genre, i) => (
                  <>
                    <p key={genre.id}>{genre.name}</p>
                    <p>•</p>
                  </>
                ))}
                <p>Vote : {movie.vote_average}/10</p>
              </div>
            </div>
            <p className="text-lg italic">{movie.tagline}</p>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Overview</h3>
              <p className="text-lg">{movie.overview}</p>
            </div>
            {movie.videos.results.length > 0 && (
              <button
                onClick={(_) => {
                  handleModal();
                }}
                className="flex items-center space-x-2 rounded-md border border-white bg-transparent p-3 text-sm hover:text-gray-300"
              >
                <PlayIcon className="mr-2 h-5 w-5" /> Play trailler
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
