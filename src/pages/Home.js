import { Link } from "react-router-dom";
import banner from "../assets/images/banner-wide.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement ...</span>
  ) : (
    <div className="banner">
      <img
        src={banner}
        alt="ibannière principale couple qui plie des vêtements"
        className="banner-img"
      />
      <div>
        <h2>{data.offers.product_name}</h2>
      </div>
    </div>
  );
};

export default Home;
