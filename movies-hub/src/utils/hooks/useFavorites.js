


import { useState, useEffect } from "react";
import { successToast, errorToast } from "../displayToast"; 

export const useFavorites = (movie) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!movie?.id) return;
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedFavorites.some((fav) => fav.id === movie.id));
  }, [movie?.id]);

  const toggleFavorite = () => {
    if (!movie?.id) return;

    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = storedFavorites.filter((fav) => fav.id !== movie.id);
      errorToast(`${movie.title || "Movie"} removed from favorites ❌`);
    } else {
      updatedFavorites = [...storedFavorites, movie];
      successToast(`${movie.title || "Movie"} added to favorites ❤️`);
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return { isFavorite, toggleFavorite };
};
