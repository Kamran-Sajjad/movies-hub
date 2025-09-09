import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/layout/Wrapper";
import MovieCard from "./MovieCard";
import useMovieStore from "../../lib/store/useMovieStore";
import { Button } from "../../components/ui/Button";
import { useMovieNavigation } from "../../utils/hooks/useMovieNavigation";
import { Loader2 } from "lucide-react";

const MoviesSection = () => {
  const {
    movies,
    loading,
    error,
    page,
    query,
    fetchMovies,
    searchMovies,
    nextPage,
    prevPage,
  } = useMovieStore();
  const { handleMovieClick } = useMovieNavigation([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (movies.length === 0) fetchMovies();
  }, [movies]);
  const handleSearchField = (e) => searchMovies(e.target.value);
  return (
    <Wrapper>
      <section className="px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-3xl font-bold text-black">
            {query ? `Results for "${query}"` : "Trending Movies"}
          </h2>

          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={handleSearchField}
            className="w-full sm:w-72 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {loading ? (
          <div className="flex gap-2">
            <span className="text-gray-400">Loading movies...</span>
            <Loader2 className="animate-spin w-5 h-5 text-gray-600" />
          </div>
        ) : (
          <></>
        )}
        {error ? <p className="text-red-500">{error}</p> : <></>}

        {!loading && movies.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => handleMovieClick(movie)}
              />
            ))}
          </div>
        ) : (
          !loading && <p className="text-gray-400">No movies found.</p>
        )}

        <div className="flex justify-between items-center mt-8 gap-4">
          <Button
            onClick={prevPage}
            label={"Prev"}
            disabled={page === 1}
            variant={page === 1 ? "disabled" : "warning"}
          />
          <span className="font-semibold">Page {page}</span>
          <Button
            onClick={nextPage}
            label={"Next"}
            disabled={page === 500}
            variant={page === 500 ? "disabled" : "warning"}
          />
        </div>
      </section>
    </Wrapper>
  );
};

export default MoviesSection;
