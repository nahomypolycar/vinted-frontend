import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";

function App() {
  return;
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/offer" element={<Offer />}></Route>
    </Routes>
  </Router>;
}

export default App;
