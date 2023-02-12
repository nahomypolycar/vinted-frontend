import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  const [offerDetails, setOfferDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  console.log(params);
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      console.log("response.data => ", response.data);
      setOfferDetails(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement... </p>
  ) : (
    <div className="productImgInfos">
      <div className="productImgs">
        <img src={offerDetails.product_image.secure_url} alt="" />
      </div>
      <div>
        <p className="price">{offerDetails.product_price} €</p>
        <div className="topDetails">
          {offerDetails.product_details.map((keys, index) => {
            console.log("index =>", index);
            return (
              <div className="productInfos">
                <div className="productKeys">
                  <p>{Object.keys(keys)[0]} </p>
                  <p>{Object.keys(keys)[1]}</p>
                  <p>{Object.keys(keys)[2]}</p>
                  <p>{Object.keys(keys)[3]}</p>
                </div>
                <div className="productValues">
                  <p>{keys[Object.keys(keys)[0]]}</p>
                  <p>{keys[Object.keys(keys)[1]]}</p>
                  <p>{keys[Object.keys(keys)[2]]}</p>
                  <p>{keys[Object.keys(keys)[3]]}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bottomDetails">
          <h2>{offerDetails.product_name}</h2>
          <p>{offerDetails.product_description}</p>
          <div className="userInfo">
            <img
              src={offerDetails.owner.account.avatar.secure_url}
              alt="owner"
            />
            <p>{offerDetails.owner.account.username}</p>
          </div>

          <Link>
            <button>ACHETER</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Offer;
