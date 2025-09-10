import React from "react";
import { useParams } from "react-router-dom";
import { MOVIES_API } from "../../lib/api";
import HeaderFooterWrapper from "../../components/layout/HeaderFooterWrapper";
import { Button } from "../../components/ui/Button";
import { useFavorites } from "../../utils/hooks/useFavorites";
import { Loader } from "../../components/ui/Loader";
import { useQuery } from "@tanstack/react-query";

const MovieDetail = () => {
  const { id } = useParams();

  const { data: movieDetail, isLoading, isError } = useQuery({
    queryKey: ["movie", id],
    queryFn: async () => {
      const response = await MOVIES_API.getMovieById(id);
      return response.data;
    },
  });

  const { isFavorite, toggleFavorite } = useFavorites(movieDetail);

  if (isLoading) {
    return <Loader label="Loading movie detail..." />;
  }

  if (isError || !movieDetail) {
    return <p className="text-gray-400 p-6">Movie not found.</p>;
  }

  return (
    <HeaderFooterWrapper>
      <section className="relative z-10 w-full min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path})`,
          }}
        ></div>

        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            alt={movieDetail.title}
            className="w-64 rounded-xl shadow-lg"
          />

          <div className="text-white flex-1">
            <h1 className="text-4xl font-bold">{movieDetail.title}</h1>
            <p className="text-gray-300 mt-2 italic">
              Original Title: {movieDetail.original_title}
            </p>
            <p className="text-gray-400 mt-1">
              Release Date: {movieDetail.release_date}
            </p>
            <p className="text-gray-400 mt-1">
              Language: {movieDetail.original_language?.toUpperCase()}
            </p>
            <p className="text-yellow-400 mt-2 text-lg">
              ⭐ {movieDetail.vote_average?.toFixed(1)} (
              {movieDetail.vote_count} votes)
            </p>

            <p className="text-gray-200 mt-6 leading-relaxed">
              {movieDetail.overview}
            </p>
            <p className="text-gray-400 mt-4">
              Popularity Score: {movieDetail.popularity}
            </p>

            <div className="mt-6 flex gap-4">
              <Button label="Watch Now" variant="outline" />
              <Button
                label={isFavorite ? "Remove from Favorite" : "Add to Favorite"}
                onClick={toggleFavorite}
                variant={isFavorite ? "danger" : "secondary"}
              />
            </div>
          </div>
        </div>
      </section>
    </HeaderFooterWrapper>
  );
};

export default MovieDetail;
