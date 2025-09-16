import { useFavoritesStore } from "../../lib/store/useFavoritesStore";

export const useFavorites = (movie) => {
  const { favorites, toggleFavorite } = useFavoritesStore();

  const isFavorite = favorites.some((fav) => fav.id === movie?.id);

  const handleToggleFavorite = () => toggleFavorite(movie);

  return { isFavorite, toggleFavorite: handleToggleFavorite };
};
