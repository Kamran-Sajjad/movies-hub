import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routeConstants";

export const useMovieNavigation = () => {
  const navigate = useNavigate();

  const handleMovieClick = (movie) =>
    navigate(ROUTES.MOVIE_ID.replace(":id", movie.id));
  return { handleMovieClick };
};
