import MovieCard from "./MovieCard";
import React, { useMemo, useCallback, useState } from "react";
import { MOVIES_API } from "../../lib/api";
import { Loader } from "../../components/ui/Loader";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { useMovieNavigation } from "../../utils/hooks/useMovieNavigation";
import HeaderFooterWrapper from "../../components/layout/HeaderFooterWrapper";
import { useSearchParams } from "react-router-dom";
import debounce from "lodash/debounce";

const MoviesSection = () => {
  const { handleMovieClick } = useMovieNavigation();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get("search") || "";
  const [searchState, setSearchState] = useState(searchText);

  const setSearchStates = (value) => {
    if (value) {
      setSearchState(value);
      setSearchParams({ search: value });
    } else {
      setSearchState("");
      setSearchParams({});
    }
  };

  const debouncedSearch = useCallback(
    debounce((value) => setSearchStates(value), 1000),
    [setSearchParams]
  );

  const handleSearchField = (e) => {
    const value = e.target.value;
    debouncedSearch(value);
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies", searchState],
    queryFn: async ({ pageParam = 1 }) => {
      const params = {
        page: pageParam,
        ...(searchState && { query: searchState }),
      };
      const paginationApi = searchState
        ? () => MOVIES_API.searchMovies(params)
        : () => MOVIES_API.getAllMovies(params);

      const response = await paginationApi();

      return {
        results: response.data.results,
        nextPage: pageParam + 1,
        totalPages: response.data.total_pages,
      };
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.nextPage > lastPage.totalPages) return undefined;
      return lastPage.nextPage;
    },
  });

  const movies = useMemo(() => {
    return data?.pages.flatMap((page) => page.results) || [];
  }, [data]);

  return (
    <HeaderFooterWrapper>
      <section className="px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-3xl font-bold text-black">
            {searchState ? `Results for "${searchState}"` : "Trending Movies"}
          </h2>

          <input
            type="text"
            placeholder="Search movies..."
            defaultValue={searchState}
            onChange={handleSearchField}
            className="w-full sm:w-72 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {isLoading ? <Loader loaderMessage="Loading Movies..." /> : null}
        {isError ? <p className="text-red-500">{error.message}</p> : null}

        {!isLoading && movies.length > 0 && (
          <InfiniteScroll
            dataLength={movies.length}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={
              isFetchingNextPage ? (
                <Loader loaderMessage="Loading more movies..." />
              ) : null
            }
            endMessage={
              !isFetchingNextPage && !hasNextPage ? (
                <p className="text-center text-gray-400 mt-4">
                  You have reached the end 🎬
                </p>
              ) : null
            }
          >
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {movies.map((movie, index) => (
                <MovieCard
                  key={`${movie.id}-${index}`}
                  movie={movie}
                  onClick={() => handleMovieClick(movie)}
                />
              ))}
            </div>
          </InfiniteScroll>
        )}

        {!isLoading && movies.length === 0 && (
          <p className="text-gray-500 text-center mt-6">
            No movies found for "{searchText}" 😢
          </p>
        )}
      </section>
    </HeaderFooterWrapper>
  );
};

export default MoviesSection;
