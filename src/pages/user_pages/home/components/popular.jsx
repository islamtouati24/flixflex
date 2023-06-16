/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { configAPI } from "pages/user_pages/constants";
import { useEffect, useState } from "react";
import noImage from "assets/images/no_image.jpg";
import { useNavigate } from "react-router-dom";
import LoadingPage from "components/loading_page";
export default function PopularMovies(params) {
  const navigate = useNavigate();
  const { url, title } = params;
  const [moviesList, setMoviesList] = useState([]);
  const [isPageloaded, setIsPageloaded] = useState(false);
  useEffect(() => {
    axios
      .get(url, configAPI)
      .then((res) => {
        setMoviesList(res.data.results);
        setIsPageloaded(true);
      })
      .catch((e) => {
        navigate("/500");
      });
  }, []);
  const handleClick = (id) => {
    navigate(`${title.slice(0, -1)}/${id}`);
  };
  return (
    <div className="container mx-auto space-y-5 p-5 text-white">
      <h1 className="text-xl font-bold md:text-2xl ">
        What's Popular {title} {isPageloaded ? "true" : "false"}
      </h1>
      {!isPageloaded ? (
        <LoadingPage />
      ) : (
        <div className="flex w-full gap-5 overflow-x-scroll">
          {moviesList.map((movie, i) => (
            <div
              className="flex min-w-[13rem] cursor-pointer flex-col space-y-2"
              title={
                title === "movies" ? movie.original_title : movie.original_name
              }
              onClick={(_) => {
                handleClick(movie.id);
              }}
              key={i}
            >
              <img
                src={
                  movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                    : noImage
                }
                className="h-72 w-full rounded-md object-cover"
                alt=""
              />
              <p className="w-full truncate text-lg font-bold">
                {title === "movies"
                  ? movie.original_title
                  : movie.original_name}
              </p>
              <p className="text-md text-end text-gray-400">
                {title === "movies" ? movie.release_date : movie.first_air_date}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
