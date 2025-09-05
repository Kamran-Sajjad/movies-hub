// src/components/Movies/MoviesSection.jsx
import React, { useEffect, useState } from "react";
import { getMoviesApi } from "../../lib/api";
import MovieCard from "./MovieCard";
import MovieDetail from "./MovieDetail";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routeConstants";
import Wrapper from "../../components/layout/Wrapper";
const MoviesSection = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const response = await getMoviesApi(27);
        setMovies(response.data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  const handleMovieCardClick = (movie) =>
    navigate(ROUTES.MOVIE_ID.replace(":id", movie.id));

  return (
    <Wrapper >
      
    <section className="px-8 py-6">
      <h2 className="text-3xl font-bold text-black mb-6">Trending Movies</h2>

      {loading ? (
        <p className="text-gray-400">Loading movies...</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => handleMovieCardClick(movie)}
              />
            ))
          ) : (
            <p className="text-gray-400">No movies found.</p>
          )}
        </div>
      )}
    </section>
    </Wrapper>
  );
};

export default MoviesSection;
