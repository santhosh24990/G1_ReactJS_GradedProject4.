import Favourite from "../component/Favourite";
type Props = {
  movie: string;
};
const Favourites = (props: Props) => {
  return <Favourite search={props.movie} location="favourite" />;
};

export default Favourites;
