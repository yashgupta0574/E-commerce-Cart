import { CartState } from "../Context";
import SingleProduct from "./SingleProduct";
import "./styles.css";

const Home = () => {
  const { products } = CartState();

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }} className="header2">Products Page</span>
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
