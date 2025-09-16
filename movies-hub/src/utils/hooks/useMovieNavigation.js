import { useNavigate } from "react-router-dom";
import { ROUTES_WITH_PARAMS} from "../../routes/routeConstants";

export const useMovieNavigation = () => {
  const navigate = useNavigate();

  const handleMovieClick = (movie) => {
    let path = ROUTES_WITH_PARAMS.MOVIE_ID( movie.id);

    navigate(path);
  };

  return { handleMovieClick };
};
