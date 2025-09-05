// // src/components/Movies/MovieCard.jsx
// import React from "react";
// import { Navigate, useNavigate } from "react-router-dom";

// const MovieCard = ({ movie, onClick }) => {
//   const navigate = useNavigate();
//   const handleClick = () => onClick(movie);
//   return (
//     <div
//       className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer"
//       onClick={handleClick}
//     >
//       <img
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//         alt={movie?.title || "Movie"}
//         className="w-full h-80 object-cover"
//       />
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-white truncate">
//           {movie?.title}
//         </h3>
//         <p className="text-sm text-gray-400 mt-1">
//           ⭐ {movie?.vote_average?.toFixed(1) || "N/A"}
//         </p>
//         <p className="text-sm text-gray-400 mt-1 line-clamp-2">
//           {movie?.overview || "No description available."}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;



// src/components/Movies/MovieCard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

const MovieCard = ({ movie, onClick }) => {
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedFavorites.some((fav) => fav.id === movie.id));
  }, [movie.id]);

  // Toggle favorite
  const handleFavorite = (e) => {
    e.stopPropagation(); // prevent navigating when clicking heart
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = storedFavorites.filter((fav) => fav.id !== movie.id);
    } else {
      updatedFavorites = [...storedFavorites, movie];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer relative"
      onClick={() => onClick(movie)}
    >
      {/* Heart Icon */}
      <button
        onClick={handleFavorite}
        className="absolute top-3 right-3 text-white hover:scale-110 transition-transform"
      >
        <Heart
          size={22}
          className={isFavorite ? "fill-red-600 text-red-600" : "text-white"}
        />
      </button>

      {/* Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie?.title || "Movie"}
        className="w-full h-80 object-cover"
      />

      {/* Info */}
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
