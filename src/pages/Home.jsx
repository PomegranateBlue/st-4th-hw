import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/detail">Go Detail</Link>
    </div>
  );
};

export default Home;
