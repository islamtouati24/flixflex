/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./components/details";
import VideoModal from "./components/dialog";
import LoadingPage from "components/loading_page";

export default function MovieDetail(params) {
  const navigate = useNavigate();
  let { id } = useParams();
  const { type } = params;
  const [movie, setMovie] = useState();
  let [isOpen, setIsOpen] = useState(false);
  const [isPageloaded, setIsPageloaded] = useState(false);
  function handleModal() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=de10549a4cfb345e679b2b038edb9722&append_to_response=videos`
      )
      .then((res) => {
        setMovie(res.data);
        setIsPageloaded(true);
      })
      .catch((e) => {
        navigate("/500");
      });
  }, []);
  return (
    <>
      <NavBar />
      {!isPageloaded ? (
        <LoadingPage />
      ) : (
        <>
          <Details movie={movie} type={type} handleModal={handleModal} />
          {movie.videos.results.length > 0 && (
            <VideoModal
              isOpen={isOpen}
              handleModal={handleModal}
              url={movie.videos.results[0].key}
            />
          )}
        </>
      )}
    </>
  );
}
