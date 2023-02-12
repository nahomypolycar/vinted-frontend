import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState("");

  const token = Cookies.get("token");
  console.log(token);
  return token ? (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input type="file" />
        <input type="text" />
        <textarea></textarea>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="number" />
      </form>
    </div>
  ) : (
    <Navigate to="/login" state={{ from: "/publish" }} />
  );
};

export default Publish;
