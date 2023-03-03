import BasePage from "../component/Basepage";

type Props = {
  movie: string;
};

const MoviesinTheatres = (props: Props) => {
  return (
    <div>
      <BasePage
        location="movies-in-theaters"
        search={props.movie}
        header={"running now"}
      />
    </div>
  );
};

export default MoviesinTheatres;
