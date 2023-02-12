import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";

const Signup = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const navigate = useNavigate();
  // handleSubmit est déclanché quand on envoie le formulaire
  const handleSubmit = async (event) => {
    event.preventDefault(); // ça s'est pour empêcher la page de se recharger une fois que le formulaire a été envoyé
    //console.log("event", event);
    try {
      // On va envoyer une requête à l'api Vinted avce les données saisies par l'user dans le front (email, username, etc..) et la réponse de l'API va être stockée dans l'objet data
      const { data } = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { username, email, password, newsletter }
      );
      console.log("signUp infos==>", data);

      // ici faire la création du token avec la valeur de datta.token reçu de l'api
      Cookie.set("token", data.token, { expire: 1, sameSite: "strict" }); // le cookie ne va être utilisé que sur le site
      // pour assigner la valeur de data.token au state Token
      setToken(data.token);

      // ici faire un navigate vers la page home, une fois que les infos sont bien enregistrées dans le back

      // Pour résumer une fois que :
      // - On a paramétré que la page n'allait pas se recharger une fois le formulaire envoyé
      // - envoyer une requête vers l'API vinted avec les infos de l'utilisateur
      // - receptionner l'objet {data} réponse de l'api
      // - assigner data.token au state Token
      // - on redirige le user vers la home avec le navigate
      navigate("/");
    } catch (error) {
      console.log("erreur SignUp ==>", error);
    }
  };

  return (
    <div>
      <h1>S'inscrire</h1>
      <form onSubmit={handleSubmit} id="SignupForm">
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder="Nom d'utilisateur"
        />

        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="Email"
        />

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
        <div>
          <input
            type="checkbox"
            id="subscribeNews"
            name="newsletter"
            value={newsletter}
            onChange={() => {
              setNewsletter(!newsletter);
            }}
          />
          <label for="subscribeNews">S'inscire à la newsletter</label>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les termes &
            conditions et politiques de Confidentialité de Vinted. Je confirme
            avoir au mois 18ans{" "}
          </p>
        </div>
        <button>S'inscire</button>
      </form>

      <Link to="/login">
        <p>Tu as déjà un compte ? Connecte-toi</p>
      </Link>
    </div>
  );
};

export default Signup;
