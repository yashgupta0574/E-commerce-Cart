import { useEffect, useState } from "react";
import { CartState } from "../Context";
import SingleProduct from "./SingleProduct";
import "./styles.css";

const Cart = () => {
  const { cart } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }} className="header3">My Cart</span>
      <br />
      <span style={{ fontSize: 30 }} className="header3">Total: {total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
