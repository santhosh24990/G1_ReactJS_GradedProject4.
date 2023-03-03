import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Imovies from "../modules/Imovies";
import { addtofavourites, getmovies } from "../services/Movies";
import "./style/basepage.css"


type props={
location:string,
search:string
header:string
}


const BasePage = (prop:props) => {
    const [movies, setmovies] = useState<Imovies[]>([]);
    const [movie, setmovie] = useState<Imovies>();
  
    useEffect(() => {
      const helper = async () => {
        const movies = await getmovies(prop.location)
        setmovies(movies);
      };
      helper();
    }, [movies]);
    useEffect(() => {
      const helper = async () => {
        if (movie !== undefined) {
          try {
            await addtofavourites(movie).then((response) => {
              toast.success("Added Successfully", {
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
          } catch (e: any) {
            console.log(e)
            toast.error("Already Added", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        }
      };
      helper();
    }, [movie]);
  
    
  
    return (
      <div>
        <h2> {prop.header}</h2>
        <div className="flexbox">
          {movies
            .filter((item) => {
              return prop.search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(prop.search.toLowerCase());
            })
            .map((movie) => (
              <div key={movie.id} className="imagecontainer">
                <NavLink to={`${prop.location}/${movie.id}`}>
                  <img className="poster" alt="" src={movie.posterurl} />{" "}
                </NavLink>
                <p>{movie.title}</p>
                <button
                  className="favourites"
                  onClick={() => {
                    setmovie(movie);
                  }}
                >
                  Add To favourites{" "}
                </button>
              </div>
            ))}
        </div>
        <ToastContainer />
      </div>
    )
}
 
export default BasePage;