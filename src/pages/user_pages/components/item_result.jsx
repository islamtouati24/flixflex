import noImage from "assets/images/no_image.jpg";
import { useNavigate } from "react-router-dom";
export default function ItemResults(params) {
  const { movie, type } = params;
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/${type}/${id}`);
  };
  return (
    <div
      className="flex w-full cursor-pointer space-x-5 rounded-md bg-white"
      onClick={(_) => handleClick(movie.id)}
    >
      <img
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : noImage
        }
        className="h-40 w-32 rounded-s-md object-cover"
        alt=""
      />

      <div className="flex flex-1 flex-col justify-between space-y-2 py-3 pr-3">
        <div className="flex-1">
          <h1 className="text-xl font-bold">
            {type === "movie" ? movie.original_title : movie.original_name}
          </h1>
          <p className="line-clamp-3 text-ellipsis">{movie.overview}</p>
        </div>
        <p className="text-sm text-gray-400">
          {type === "movie" ? movie.release_date : movie.first_air_date}
        </p>
      </div>
    </div>
  );
}
