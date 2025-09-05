
import React from "react";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import MovieDetail from "../pages/movie/MovieDetail";
import Error404 from "../pages/Invalid/Error404";



export const ROUTES ={
  LOGIN:'/login',
  HOME:'/home',
  MOVIE_ID:"/movie/:id",
  ERROR:'/error404',
}

export const routes = [
  { path: ROUTES.LOGIN, element: LoginPage , isProtected: false },
  { path: ROUTES.HOME, element: HomePage, isProtected: true },
  { path: ROUTES.MOVIE_ID, element: MovieDetail, isProtected: true },
  { path: ROUTES.ERROR, element: Error404, isProtected: false },
];
