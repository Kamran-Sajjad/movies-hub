import React, { useState } from "react";
import HeaderFooterWrapper from "../../components/layout/HeaderFooterWrapper";
import MovieCard from "./MovieCard";
import { useMovieNavigation } from "../../utils/hooks/useMovieNavigation";
import { Loader } from "../../components/ui/Loader";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MOVIES_API } from "../../lib/api";
import InfiniteScroll from "react-infinite-scroll-component";

const MoviesSection = () => {
  const { handleMovieClick } = useMovieNavigation([]);
  const [query, setQuery] = useState("");
  const handleInputField = (e) => setQuery(e.target.value);


  const { data, error, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ["movies", query],
      queryFn: async ({ pageParam = 1 }) => {
        const response = query
          ? await MOVIES_API.searchMovies(query, pageParam)
          : await MOVIES_API.getAllMovies(pageParam);

        return { results: response.data.results, nextPage: pageParam + 1 };
      },
      getNextPageParam: (lastPage) => {
        if (lastPage.nextPage <= 500) return lastPage.nextPage;
        return undefined;
      },
    });

  const movies = data?.pages.flatMap((page) => page.results) || [];
  return (
    <HeaderFooterWrapper>
      <section className="px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-3xl font-bold text-black">
            {query ? `Results for "${query}"` : "Trending Movies"}
          </h2>

          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={handleInputField}
            className="w-full sm:w-72 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {isLoading ? <Loader label="Loading Movies..." />:<></>}
        {isError ? <p className="text-red-500">{error.message}</p>:<></>}

        <InfiniteScroll
          dataLength={movies.length}
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          loader={<Loader label="Loading more movies..." />}
          endMessage={
            <p className="text-center text-gray-400 mt-4">
              You have reached the end 🎬
            </p>
          }
        >
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => handleMovieClick(movie)}
              />
            ))}
          </div>
        </InfiniteScroll>
      </section>
    </HeaderFooterWrapper>
  );
};

export default MoviesSection;
