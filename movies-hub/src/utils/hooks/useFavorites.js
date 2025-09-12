import { useFavoritesStore } from "../../lib/store/useFavoritesStore";
import { successToast, errorToast } from "../displayToast";

export const useFavorites = (movie) => {
  const { favorites, toggleFavorite } = useFavoritesStore();

  const isFavorite = favorites.some((fav) => fav.id === movie?.id);

  const handleToggleFavorite = () => {
    toggleFavorite(movie);
    if (isFavorite) {
      successToast(`${movie.title || "Movie"} removed from favorites 🚫`);
    } else {
      successToast(`${movie.title || "Movie"} added to favorites ❤️`);
    }
  };

  return { isFavorite, toggleFavorite: handleToggleFavorite };
};
