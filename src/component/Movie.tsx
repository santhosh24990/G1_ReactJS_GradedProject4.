import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Imovies from "../modules/Imovies";
import { getmoviedetails } from "../services/Movies";
import "./style/moviedetails.css";


const Movie = () => {
    const { location } = useParams<string>();
    const { id } = useParams<string>();
    const [movie, setmovie] = useState<Imovies>();
    
    useEffect(() => {
      console.log(location)
        
      const helper = async () => {
        const getmovie = await getmoviedetails(location as string, id as string);
        setmovie(getmovie);
      }
        helper();
    },[]);
  
    return (
      <div className="flex">
        <img className="posters" src={movie?.posterurl } alt=""></img> 
        <div className="details">
          <div className="info">
            TITLE:<span className="value">{movie?.title}</span>
          </div>
          <div className="info">
            year:<span className="value">{movie?.year}</span>
          </div>
          <div className="info">
            duration:<span className="value">{movie?.duration}</span>
          </div>
          <div className="info">
            genres:<span className="value">{movie?.genres.toString()}</span>
          </div>
          <div className="info">
            actors:<span className="value">{movie?.actors.toString()}</span>
          </div>
          <div className="info">
            story:<span className="value">{movie?.storyline}</span>
          </div>
        </div>
      </div>
    );
    
}
 
export default Movie;