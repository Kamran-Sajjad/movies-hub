import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (movie) => {
        const exists = get().favorites.some((fav) => fav.id === movie.id);
        if (!exists) {
          set({ favorites: [...get().favorites, movie] });
        }
      },
      removeFavorite: (id) =>
        set({ favorites: get().favorites.filter((fav) => fav.id !== id) }),
      toggleFavorite: (movie) => {
        const exists = get().favorites.some((fav) => fav.id === movie.id);
        if (exists) {
          set({
            favorites: get().favorites.filter((fav) => fav.id !== movie.id),
          });
        } else {
          set({ favorites: [...get().favorites, movie] });
        }
      },
      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: "favorites-storage",
    }
  )
);
