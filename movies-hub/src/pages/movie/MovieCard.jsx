import React from "react";
import { Heart } from "lucide-react";
import { useFavorites } from "../../utils/hooks/useFavorites";
import { Button } from "../../components/ui/Button";

const MovieCard = ({ movie, onClick }) => {
  const { isFavorite, toggleFavorite } = useFavorites(movie);
  const handleClick = (e) => {
    e.stopPropagation();
    toggleFavorite();
  };
  return (
    <div
      className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer relative"
      onClick={() => onClick(movie)}
    >
      <Button
        onClick={handleClick}
        className="!p-2 !rounded-full absolute top-3 right-3 w-9 h-9 flex items-center justify-center"
        variant="ghost"
        content={
          <Heart
            size={20}
            className={isFavorite ? "fill-red-600 text-red-600" : "text-white"}
          />
        }
      />

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie?.title || "Movie"}
        className="w-full h-80 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white truncate">
          {movie?.title}
        </h3>
        <p className="text-sm text-gray-400 mt-1">
          ⭐ {movie?.vote_average?.toFixed(1) || "N/A"}
        </p>
        <p className="text-sm text-gray-400 mt-1 line-clamp-2">
          {movie?.overview || "No description available."}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
