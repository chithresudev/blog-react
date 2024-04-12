import { useEffect } from "react";
import AuthService from "../services/AuthService";
import { useNavigate, Outlet, Link } from "react-router-dom";

const NavBarAdmin = () => {
  const navigate = useNavigate();
  const currentUser = AuthService.getCurrentUser();

  const style = {
    aside: {
      backgroundColor: "#f1f1f1",
      width: "20%",
      height: "100vh",
      position: "absolute",
    },
  };

  useEffect(() => {
    if (!currentUser?.token) {
      navigate("/admin");
    }
  }, []);

  return (
    <>
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Blog admin-portal
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                  </li> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {currentUser?.username?.toUpperCase()}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <aside className="position-fixed" style={style.aside}>
          <ul class="list-group rounded-0">
            <Link
              to="/admin-portal/dashboard"
              className="text-decoration-none btn  pt-3 mt-3"
            >
              <li class="list-group-item bg-transparent">Dashboard</li>
            </Link>
            <Link
              to="/admin-portal/create-post"
              className="text-decoration-none btn  pt-3 mt-3"
            >
              <li class="list-group-item bg-transparent">Create Post</li>
            </Link>

            <Link
              to="/admin-portal/all-post"
              className="text-decoration-none btn  pt-3 mt-3"
            >
              <li class="list-group-item bg-transparent">All Posts</li>
            </Link>
          </ul>
        </aside>
      </div>
      <main className="p-4" style={{ marginLeft: "20%", marginTop: "3%" }}>
        <Outlet />
      </main>
    </>
  );
};

export default NavBarAdmin;
