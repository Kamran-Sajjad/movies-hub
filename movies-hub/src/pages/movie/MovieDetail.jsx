import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieByIdApi } from "../../lib/api";
import Navbar from "../../components/layout/Navbar";
import { Button } from "../../components/ui/Button";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const response = await getMovieByIdApi(id);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <p className="text-gray-400 p-6">Loading movie details...</p>;
  }

  if (!movie) {
    return <p className="text-gray-400 p-6">Movie not found.</p>;
  }

  return (
    <>
      <div className="relative z-20 w-full min-h-screen overscroll-none overflow-hidden">
        <Navbar />
        <section className="absolute min-w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            }}
          ></div>

          <div className="absolute inset-0 bg-black opacity-70"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-64 rounded-xl shadow-lg"
            />

            <div className="text-white flex-1">
              <h1 className="text-4xl font-bold">{movie.title}</h1>
              <p className="text-gray-300 mt-2 italic">
                Original Title: {movie.original_title}
              </p>
              <p className="text-gray-400 mt-1">
                Release Date: {movie.release_date}
              </p>
              <p className="text-gray-400 mt-1">
                Language: {movie.original_language?.toUpperCase()}
              </p>
              <p className="text-yellow-400 mt-2 text-lg">
                ⭐ {movie.vote_average?.toFixed(1)} ({movie.vote_count} votes)
              </p>

              <p className="text-gray-200 mt-6 leading-relaxed">
                {movie.overview}
              </p>
              <p className="text-gray-400 mt-4">
                Popularity Score: {movie.popularity}
              </p>

              <div className="mt-6 flex gap-4">
                <Button label="Watch Now" variant="outline" />
                <Button label="Add To Favorite" variant="secondary" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MovieDetail;
