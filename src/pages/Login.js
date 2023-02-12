import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  console.log("location=", location.state.from); // me donne /publish

  // donc on va fair une condition si location.state.from est null = il s'est connecté de la page home dans ce cas on peut le rediriger sur la home
  // si location.state.from est égal à "/publish" alors on le redirige vers ça

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email,
          password,
        }
      );
      console.log("data =", data);

      Cookies.set("token", data.token, { expires: 1, sameSite: "strict" });
      setToken(data.token);

      if (location.state.from) {
        navigate(location.state.from);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log("error =", error);
      if (error.response?.data.message === "User not found") {
        console.log("Pas d'utilisateur correspondant");
      } else {
        console.log("Erreur");
      }

      console.log("catch login >>>", error.response);
    }
  };

  return (
    <div>
      <h1>Se connecter</h1>
      <form onSubmit={handleSubmit} id="loginForm">
        <input
          type="email"
          name="Adresse email"
          id="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="Adresse email"
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="Mot de passe"
        />
        <button>Se connecter</button>
      </form>

      <Link to="/signup">
        <p>Pas encore de compte ? Inscris-toi !</p>
      </Link>
    </div>
  );
};

export default Login;
