import React, { useState } from "react";
import { Route, Routes } from "react-router";
import NavigationMenu from "./component/NavigationMenu";
import Favourites from "./pages/FavouritesPage";
import MoviesinTheatres from "./pages/Movies-In-TheatresPage";
import TopRatedIndia from "./pages/Top-Rated-Indiapage";
import TopRatedMovies from "./pages/Top-Rated-MoviesPage";
import MoviesComing from "./pages/Movies-ComingPage";
import Moviedetails from "./pages/MoviesDetailsPage";

function App() {
  const [search, setsearch] = useState("");

  const getsearch = (set: string) => {
    setsearch(set);
  };

  return (
    <div className="app">
     
      {/*props and callback is used for getting searched value*/}

      <NavigationMenu callback={getsearch} />

      <Routes>
        <Route path="/" element={<MoviesinTheatres movie={search} />} />
        <Route path="/theatres" element={<MoviesinTheatres movie={search} />} />
        <Route path="/soon" element={<MoviesComing movie={search} />} />
        <Route path="/best" element={<TopRatedMovies movie={search} />} />
        <Route path="/india" element={<TopRatedIndia movie={search} />} />
        <Route path="/fav" element={<Favourites movie={search} />} />
        <Route path="theatres/:location/:id" element={<Moviedetails />} />
        <Route path="soon/:location/:id" element={<Moviedetails />} />
        <Route path="best/:location/:id" element={<Moviedetails />} />
        <Route path="india/:location/:id" element={<Moviedetails />} />
        <Route path="fav/:location/:id" element={<Moviedetails />} />
      </Routes>
    </div>
  );
}

export default App;
