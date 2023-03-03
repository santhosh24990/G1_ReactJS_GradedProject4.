import axios from "axios";
import Imovies from "../modules/Imovies";

const addtofavourites = async (toadd: Imovies ) => {
  const response = await axios.post("http://localhost:3001/favourite", toadd);

  return response;
};
const removemovie = async (toremove: string) => {
  const response = await axios.delete (`http://localhost:3001/favourite/${toremove}`);
  return response;
};

const getmovies = async (location: string) => {
  const response = await axios.get(`http://localhost:3001/${location}`);
  return response.data;
};

const getmoviedetails = async (location: string, id: string) => {
  const response = await axios.get(`http://localhost:3001/${location}/${id}`);
  return response.data;
};

export { getmovies, removemovie, getmoviedetails, addtofavourites };
