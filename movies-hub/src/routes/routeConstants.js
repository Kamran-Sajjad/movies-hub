import React from "react";
import MovieSection from "../pages/movie/MovieSection";
import LoginPage from "../pages/auth/LoginPage";
import MovieDetail from "../pages/movie/MovieDetail";
import Error404 from "../pages/Invalid/Error404";
import Favorites from "../pages/favorite/Favorites";
import TermsAndConditions from "../pages/common/TermsAndConditions";
import SignupPage from "../pages/auth/SignupPage";

export const ROUTES = {
  LOGIN: "/login",
  SIGNUP: "/signup",
  MOVIES: "/movies",
  MOVIE_ID: "/movie/:id",
  ERROR: "/error404",
  FAVORITE: "/favorites",
  TERMS: "/terms",
};

export const ROUTES_WITH_PARAMS = {
  MOVIE_ID: (id) => `/movie/${id}`,
};

export const protectedRoutes = [
  { path: ROUTES.MOVIES, element: MovieSection },
  { path: ROUTES.MOVIE_ID, element: MovieDetail },
  { path: ROUTES.FAVORITE, element: Favorites },
];

export const publicRoutes = [
  { path: ROUTES.LOGIN, element: LoginPage },
  { path: ROUTES.SIGNUP, element: SignupPage },
];

export const commonRoutes = [
  { path: "*", element: Error404 },
  { path: ROUTES.TERMS, element: TermsAndConditions },
];
