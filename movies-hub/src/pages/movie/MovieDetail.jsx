import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieByIdApi } from "../../lib/api";
import Wrapper from "../../components/layout/Wrapper";
import { Button } from "../../components/ui/Button";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const response = await getMovieByIdApi(id);
        setMovieDetail(response.data);


        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFavorite(storedFavorites.some((fav) => fav.id === response.data.id));
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const handleFavorite = () => {
    if (!movieDetail) return;

    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = storedFavorites.filter((fav) => fav.id !== movieDetail.id);
    } else {
      updatedFavorites = [...storedFavorites, movieDetail];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  if (loading) {
    return <p className="text-gray-400 p-6">Loading movie details...</p>;
  }

  if (!movieDetail) {
    return <p className="text-gray-400 p-6">Movie not found.</p>;
  }

  return (
    <Wrapper>
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
              ⭐ {movieDetail.vote_average?.toFixed(1)} ({movieDetail.vote_count} votes)
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
                onClick={handleFavorite}
                variant={isFavorite ? "danger" : "secondary"}
              />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default MovieDetail;
