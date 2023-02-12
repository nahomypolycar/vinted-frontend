import { Link } from "react-router-dom";
import banner from "../assets/images/banner-wide.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [offers, setOffers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);
        setOffers(response.data);
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
        alt="bannière principale couple qui plie des vêtements"
        className="banner-img"
      />
      <div className="container">
        <div className="offersList">
          {offers.offers.map((data, index) => {
            return (
              <Link
                to={"/offer/" + data._id}
                key={data._id}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div>
                  {/* <img
                    src={data.owner.account.avatar.secure_url}
                    alt="the product to sell"
                  /> */}
                  {data.owner && <p>{data.owner.account.username}</p>}
                </div>
                <div className="productDetails">
                  {data.product_image.secure_url && (
                    <img
                      src={data.product_image.secure_url}
                      alt="Présentation principale du produit"
                    ></img>
                  )}

                  {data.product_price && <p>{data.product_price} €</p>}
                  {data.product_details.map((productInfos, index) => {
                    return (
                      productInfos.TAILLE && (
                        <p key={index}>{productInfos.TAILLE}</p>
                      )
                    );
                  })}
                  {data.product_details.map((productInfos, index) => {
                    return (
                      productInfos.MARQUE && (
                        <p key={index}>{productInfos.MARQUE}</p>
                      )
                    );
                  })}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
