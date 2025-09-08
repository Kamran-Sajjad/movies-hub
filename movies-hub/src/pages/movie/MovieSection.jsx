import React, { useEffect, useState } from "react";
import { getMoviesApi } from "../../lib/api";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routeConstants";
import Wrapper from "../../components/layout/Wrapper";
import { Button } from "../../components/ui/Button";

const MoviesSection = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const response = await getMoviesApi(page);
        setMovies(response.data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [page]);

  const handleMovieCardClick = (movie) =>
    navigate(ROUTES.MOVIE_ID.replace(":id", movie.id));

  const handlePrevPage = () => setPage((prev) => prev - 1);

  const handleNextPage = () => setPage((prev) => prev + 1);

  return (
    <Wrapper>
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

        <div className="flex justify-between items-center gap-4 mt-8">
          <Button
            label={"Prev"}
            disabled={page === 1}
            onClick={handlePrevPage}
            variant={page === 1 ? "disabled" : "warning"}
          />
          <span className="text-lg font-bold text-black">Page {page}</span>
          
          <Button
            label={"Next"}
            disabled={page === 500}
            onClick={handleNextPage}
            variant={page === 500 ? "disabled" : "warning"}
          />
        </div>
      </section>
    </Wrapper>
  );
};

export default MoviesSection;
