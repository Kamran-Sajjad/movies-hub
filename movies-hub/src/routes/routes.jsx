import React from "react";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import MovieDetail from "../pages/movie/MovieDetail";


export const routes = [
  { path: "/login", element: <LoginPage />, isProtected: false },
  { path: "/home", element: <HomePage />, isProtected: true },
  { path: "/movie/:id", element: <MovieDetail />, isProtected: true },
  ];
