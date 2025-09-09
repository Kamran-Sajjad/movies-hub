import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { useFavorites } from "../../utils/hooks/useFavorites";

const MovieCard = ({ movie, onClick }) => {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites(movie);

  return (
    <div
      className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer relative"
      onClick={() => onClick(movie)}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite();
        }}
        className="absolute top-3 right-3 text-white hover:scale-110 transition-transform"
      >
        <Heart
          size={22}
          className={isFavorite ? "fill-red-600 text-red-600" : "text-white"}
        />
      </button>

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
