import { create } from "zustand";
import { MOVIES_API } from "../../lib/api/index";

const useMovieStore = create((set, get) => ({
  movies: [],
  loading: false,
  error: null,
  page: 1,
  query: "",

  fetchMovies: async () => {
    const { page } = get();
    set({ loading: true, error: null });
    try {
      const response = await MOVIES_API.getAllMovies(page);
      set({ movies: response.data.results || [] });
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  searchMovies: async (query, page = 1) => {
    set({ query, page, loading: true, error: null });
    if (!query.trim()) {
      get().fetchMovies();
      return;
    }
    try {
      const response = await MOVIES_API.searchMovies(query, page);
      set({ movies: response.data.results || [] });
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },


  nextPage: async () => {
    const { query, page, searchMovies, fetchMovies } = get();
    const newPage = page + 1;
    if (query) {
      await searchMovies(query, newPage);
    } else {
      set({ page: newPage });
      await fetchMovies();
    }
  },

  prevPage: async () => {
    const { query, page, searchMovies, fetchMovies } = get();
    const newPage = Math.max(1, page - 1);
    if (query) {
      await searchMovies(query, newPage);
    } else {
      set({ page: newPage });
      await fetchMovies();
    }
  },
}));

export default useMovieStore;
