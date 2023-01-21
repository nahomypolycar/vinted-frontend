import logo from "../assets/images/logo-vinted.svg";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="logo de vinted" />
        <div className="nav-header">
          <button>S'inscrire</button>
          <button>Se connecter</button>
          <button>Vends tes articles</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
