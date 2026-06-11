import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/CartSlice";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Money Plant",
    price: 12,
    image: "https://via.placeholder.com/150",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />

          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>

          <button
            className="btn btn-primary"
            onClick={() => dispatch(addItem(product))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
