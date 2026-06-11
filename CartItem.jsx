import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, addItem } from "../features/cart/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <h3>{item.name}</h3>

              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>

              <p>Total: ${item.price * item.quantity}</p>

              {/* Quantity Controls */}
              <button
                className="btn btn-primary"
                onClick={() => dispatch(addItem(item))}
              >
                +
              </button>

              <button
                className="btn btn-primary"
                onClick={() => dispatch(removeItem(item.id))}
              >
                -
              </button>

              {/* Delete Button */}
              <button
                className="btn btn-danger"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Delete
              </button>
            </div>
          ))}

          {/* Cart Total */}
          <h3>Total Amount: ${totalAmount}</h3>

          {/* Buttons */}
          <button className="btn btn-success">
            Checkout
          </button>

          <Link to="/">
            <button className="btn btn-primary">
              Continue Shopping
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartItem;
