import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routeConstants";

export const useMovieNavigation = () => {
  const navigate = useNavigate();

  const handleMovieClick = (movie) => {
    let path = ROUTES.MOVIE_ID.replace(":id", movie.id).replace(
      ":title",
      movie.title
    );

    navigate(path);
  };

  return { handleMovieClick };
};
