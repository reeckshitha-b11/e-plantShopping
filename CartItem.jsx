import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, addItem } from "../features/cart/CartSlice";
import { Link, useNavigate } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert(`Order placed successfully! Total: $${totalAmount}`);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(removeItem(item.id)); // removes item if quantity = 1
    }
  };

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

              {/* Increment */}
              <button
                className="btn btn-primary"
                onClick={() => dispatch(addItem(item))}
              >
                +
              </button>

              {/* Decrement (prevents going negative) */}
              <button
                className="btn btn-primary"
                onClick={() => handleDecrease(item)}
              >
                -
              </button>

              {/* Delete */}
              <button
                className="btn btn-danger"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Delete
              </button>
            </div>
          ))}

          <h3>Total Amount: ${totalAmount}</h3>

          {/* Checkout with alert */}
          <button className="btn btn-success" onClick={handleCheckout}>
            Checkout
          </button>

          {/* Proper navigation */}
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
