import BasePage from "../component/Basepage";
type Props = {
  movie: string;
};
const TopRatedMovies = (props: Props) => {
  return (
    <div>
      <BasePage
        location="top-rated-movies"
        search={props.movie}
        header={"top rated"}
      />
    </div>
  );
};

export default TopRatedMovies;
