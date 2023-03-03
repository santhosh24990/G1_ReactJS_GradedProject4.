import BasePage from "../component/Basepage";
type Props = {
  movie: string;
};
const TopRatedIndia = (props: Props) => {
  return (
    <div>
      <BasePage
        location="top-rated-india"
        search={props.movie}
        header={"best of india"}
      />
    </div>
  );
};

export default TopRatedIndia;
