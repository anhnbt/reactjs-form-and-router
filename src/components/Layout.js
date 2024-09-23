import { Outlet, Link, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Hello C0424G1</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              <a>Login</a>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              <a>Register</a>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>&copy; 2024 CodeGym.</footer>
    </div>
  );
};

export default Layout;
