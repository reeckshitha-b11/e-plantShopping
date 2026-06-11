import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/cart/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>

      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <p>Total: ${item.price * item.quantity}</p>

      <button
        className="btn btn-danger"
        onClick={() => dispatch(removeItem(item.id))}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
