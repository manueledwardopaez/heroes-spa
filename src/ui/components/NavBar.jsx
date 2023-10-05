import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { useContext } from "react";

const NavBar = () => {

  const {user, logout} = useContext(AuthContext);
  
  const navigate = useNavigate();

  const onLogout = () => {

    logout() 

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-2">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            Heroes App
          </Link>

          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/"
              >
                Marvel
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/Dc"
              >
                Dc
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/search"
              >
                Search
              </NavLink>
             {/*  <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/hero"
              >
                Hero
              </NavLink> */}
            </div>

            <div className="collapse navbar-collapse d-flex justify-content-end">
              <div className="navbar-nav">
                <span className="nav-item nav-link text-primary">{user?.name}</span>

                <button className="nav-item nav-link btn" onClick={onLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
