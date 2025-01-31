import { Link, useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Detail - id is {id}</h1>
      <Link to="/">go to start</Link>
    </div>
  );
};

export default Detail;
