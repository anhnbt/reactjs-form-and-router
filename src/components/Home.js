import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hello C0424G1</h1>
      <Link to="/login">
        <a>Login</a>
      </Link> | {' '}
      <Link to="/register">
        <a>Register</a>
      </Link>
    </div>
  );
};

export default Home;
