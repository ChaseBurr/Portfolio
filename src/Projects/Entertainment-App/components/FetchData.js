import axios from "axios";
require("dotenv").config({ path: __dirname + "/./../../../.env" });

const api_key = process.env.MOVIE_API_KEY;

export const getData = (query, type) => {
  const url = `https://api.themoviedb.org/3/search/${type}/?api_key=${api_key}&query=${query}&language=en-US&page=1&include_adult=false`;
  return axios.get(url);
};

export const getPopular = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1&include_adult=false`;
  return axios.get(url);
};

export const getDataById = async (id, type) => {
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${api_key}`;
  return axios.get(url);
};
