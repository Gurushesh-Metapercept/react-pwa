import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import AllRoutes from "./components/AllRoutes";

function App() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    console.log("click");
    setIsButtonClicked((prevState) => !prevState);
  };

  return (
    <div id="wrapper" className={isButtonClicked ? "toggled" : ""}>
      <div id="sidebar-wrapper" class="border-end">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a href="/">
              <img
                className="logoo"
                src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Algolia_logo_full_blue.svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/getting-started">Getting Started</Link>
          </li>
          <li>
            <Link to="/managing-results">Managing results</Link>
          </li>
          <li>
            <Link to="/">Building Search UI</Link>
          </li>
          <li>
            <Link to="/">Search analytics</Link>
          </li>
          <li>
            <Link to="/">A/B testing</Link>
          </li>
          <li>
            <Link to="/">Sending events</Link>
          </li>
        </ul>
      </div>

      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <svg
              className="pe-auto"
              onClick={handleButtonClick}
              height="30"
              viewBox="0 0 21 21"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m4.5 6.5h12" />
                <path d="m4.498 10.5h11.997" />
                <path d="m4.5 14.5h11.995" />
              </g>
            </svg>
            <a className="navbar-brand d-block d-lg-none" href="/">
              <img
                className="logoo"
                src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Algolia_logo_full_blue.svg"
                alt=""
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link class="nav-link" to="/guide">
                    Guide
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/api-reference">
                    API Reference
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Integrations
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#=/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Demo
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Demo 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Login
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;
