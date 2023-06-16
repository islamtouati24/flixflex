import HomePage from "pages/home";
import LogIN from "pages/login";
import SignUp from "pages/signup";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { logIn } from "features/user/userSlice";
import UserHomePage from "pages/user_pages/home";
import { useEffect, useState } from "react";
import MovieDetail from "pages/user_pages/movie_details";
import SearchPage from "pages/user_pages/search";
import ServerErrorPage from "pages/user_pages/500";
import NotFoundPage from "pages/404";
import NotFoundUserPage from "pages/user_pages/404";
import LoadingPage from "components/loading_page";
import MoviesPage from "pages/user_pages/movies";

function App() {
  const isUserLogged = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isPageloaded, setIsPageloaded] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const loggedUser = { uID: user.uid, name: user.email };
        if (isUserLogged.uID !== loggedUser.uID) dispatch(logIn(loggedUser));
      } else {
        console.log("no user");
      }
      setIsPageloaded(true);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !isPageloaded ? (
    <LoadingPage />
  ) : (
    <>
      {isUserLogged.uID ? (
        <Routes>
          <Route path="/" element={<UserHomePage />} />
          <Route path="/movie/:id" element={<MovieDetail type="movie" />} />
          <Route path="/serie/:id" element={<MovieDetail type="tv" />} />
          <Route
            path="/movies"
            element={
              <MoviesPage
                type="movie"
                url="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
              />
            }
          />
          <Route
            path="/series"
            element={
              <MoviesPage
                type="serie"
                url="https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
              />
            }
          />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/500" element={<ServerErrorPage />} />
          <Route path="*" element={<NotFoundUserPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIN />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
