import { Link } from "react-router-dom";
import banner from "../assets/images/banner-wide.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setdata] = useState(null);

  useEffect(async () => {
    const fetchdata = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      console.log(response.data);
      setdata(response.data);
    };
    fetchdata();
  }, []);

  return (
    <div className="banner">
      <img
        src={banner}
        alt="image de la bannière principale coupe qui plie des vêtements"
        className="banner-img"
      />
      <div></div>
    </div>
  );
};

export default Home;
