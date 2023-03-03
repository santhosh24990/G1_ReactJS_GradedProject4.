import { useState, useEffect } from "react";
import { getmovies, removemovie } from "../services/Movies";
import Imovies from "../modules/Imovies";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/basepage.css";

type props = {
  search: string;
  location: string;
};

const Favourite = (prop: props) => {
  const [movies, setmovies] = useState<Imovies[]>([]);
  const [movieIdToBeRemoved, setMovieIdToBeRemoved] = useState<string>("");

  useEffect(() => {
    const helper = async () => {
      const movies = await getmovies(prop.location);
      setmovies(movies);
    };
    helper();
  });
  useEffect(() => {
    const helper = async () => {
        if(movieIdToBeRemoved!=="")
        {
        await removemovie(movieIdToBeRemoved).then(() => {
          toast.success("Removed Successfully", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
        }
    };
    helper();
  }, [movieIdToBeRemoved]);
  const location = "favourite";
  return (
    <div>
      <h2> Favourites</h2>
      <div className="flexbox">
        {movies
          .filter((item) => {
            return prop.search.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(prop.search.toLowerCase());
          })
          .map((movie) => (
            <div key={movie.id} className="imagecontainer">
              <NavLink to={`${location}/${movie.id}`}>
                <img className="poster" alt="" src={movie.posterurl} />
              </NavLink>
              <p>{movie.title}</p>
              <button
                className="favourites"
                onClick={() => {
                  setMovieIdToBeRemoved(movie.id);
                }}
              >
                Remove From favourites{" "}
              </button>
            </div>
          ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Favourite;
