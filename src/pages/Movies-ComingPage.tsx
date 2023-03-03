import BasePage from "../component/Basepage";

type Props = {
  movie: string;
};
const MoviesComing = (props: Props) => {
  return (
    <div>
      <BasePage
        location="movies-coming"
        search={props.movie}
        header={"coming soon"}
      />
    </div>
  );
};

export default MoviesComing;
