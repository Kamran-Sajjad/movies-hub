
import React, { useEffect, useState } from "react";
import MovieCard from "../movie/MovieCard";
import Wrapper from "../../components/layout/Wrapper";
import { useMovieNavigation } from "../../utils/hooks/useMovieNavigation";
const Favorites = () => {
 const {handleMovieClick}=useMovieNavigation([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);


  return (
    <Wrapper>
      <div className="min-h-screen bg-gray-700 text-white py-8 px-4">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Favorite Movies ❤️
        </h1>

        {favorites.length === 0 ? (
          <p className="text-center text-gray-400">No favorite movies yet.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {favorites.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={()=>handleMovieClick(movie)}
              />
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Favorites;
