import { Link } from "react-router-dom";
import logo from "../assets/images/logo-vinted.svg";
import Login from "../pages/Login";
import Cookie from "js-cookie";

const Header = ({ token, setToken, handleToken }) => {
  console.log("token header=", token);
  return (
    <div className="container">
      <div className="header">
        <Link to="/">
          <img src={logo} alt="logo de vinted" />
        </Link>

        {token ? (
          <button
            onClick={() => {
              setToken(null);
              Cookie.remove("token");
            }}
          >
            {" "}
            Se déconnecter{" "}
          </button>
        ) : (
          <>
            <div className="nav-header">
              <Link to="/signup">
                <button>S'inscrire</button>
              </Link>
              <Link to="/login">
                <button>Se connecter</button>
              </Link>
            </div>
          </>
        )}
        <Link to="/publish">
          <button>Vends tes articles</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
