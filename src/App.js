import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import Login from "./pages/Login";
import { useState } from "react";
import Signup from "./pages/Signup";
import Cookies from "js-cookie";
import Publish from "./pages/Publish";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  // on assigne à Token la valeur du cookie appelé token si il a été créée sinon la valeur sera nulle

  const handleToken = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 1, sameSite: "strict" });
    } else {
      Cookies.remove("token");
    }
    setToken(token);
  };

  console.log("token de app.js >>>>", token);

  return (
    <Router>
      <Header
        token={token}
        setToken={setToken}
        handleToken={handleToken}
      ></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route
          path="/signup"
          element={<Signup setToken={setToken} handleToken={handleToken} />}
        />
        <Route
          path="/login"
          element={<Login setToken={setToken} handleToken={handleToken} />}
        />
        <Route path="/publish" element={<Publish />} />
      </Routes>
    </Router>
  );
}

export default App;
