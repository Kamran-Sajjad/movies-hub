import React from "react";
import MovieSection from "../pages/movie/MovieSection";
import LoginPage from "../pages/login/LoginPage";
import MovieDetail from "../pages/movie/MovieDetail";
import Error404 from "../pages/Invalid/Error404";
import Favorites from "../pages/favorite/Favorites";
import TermsAndConditions from "../pages/common/TermsAndConditions";

export const ROUTES = {
  LOGIN: "/login",
  MOVIES: "/movies",
  MOVIE_ID: "/movie/:id",
  ERROR: "/error404",
  FAVORITE: "/favorites",
  TERMS: "/terms",
};

export const protectedRoutes = [
  { path: ROUTES.MOVIES, element: MovieSection },
  { path: ROUTES.MOVIE_ID, element: MovieDetail },
  { path: ROUTES.FAVORITE, element: Favorites },
];

export const publicRoutes = [{ path: ROUTES.LOGIN, element: LoginPage }];

export const commonRoutes = [
  
  { path: '*', element: Error404 },
  { path: ROUTES.TERMS, element: TermsAndConditions },
];
