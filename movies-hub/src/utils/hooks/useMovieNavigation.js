import { useNavigate } from "react-router-dom";
import { ROUTES_WITH_PARAMS } from "../../routes/routeConstants";

export const useMovieNavigation = () => {
  const navigate = useNavigate();

  const handleMovieClick = (movie) => {
    let movieDetailRoute = ROUTES_WITH_PARAMS.MOVIE_DETAIL(movie.id);

    navigate(movieDetailRoute);
  };

  return { handleMovieClick };
};
