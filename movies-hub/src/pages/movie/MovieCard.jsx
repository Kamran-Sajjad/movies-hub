// src/components/Movies/MovieCard.jsx
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const MovieCard = ({ movie, onClick }) => {
  const navigate = useNavigate();
  const handleClick = () => onClick(movie);
  return (
    <div
      className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer"
      onClick={handleClick}
    >
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
