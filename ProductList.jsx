import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/CartSlice";

const plantData = {
  Indoor: [
    { id: 1, name: "Aloe Vera", price: 10, img: "https://source.unsplash.com/150x150/?plant" },
    { id: 2, name: "Snake Plant", price: 15, img: "https://source.unsplash.com/150x150/?snake-plant" },
    { id: 3, name: "Peace Lily", price: 12, img: "https://source.unsplash.com/150x150/?lily" },
    { id: 4, name: "Spider Plant", price: 11, img: "https://source.unsplash.com/150x150/?spider-plant" },
    { id: 5, name: "ZZ Plant", price: 18, img: "https://source.unsplash.com/150x150/?zz-plant" },
    { id: 6, name: "Pothos", price: 9, img: "https://source.unsplash.com/150x150/?pothos" },
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 20, img: "https://source.unsplash.com/150x150/?rose" },
    { id: 8, name: "Hibiscus", price: 14, img: "https://source.unsplash.com/150x150/?hibiscus" },
    { id: 9, name: "Jasmine", price: 16, img: "https://source.unsplash.com/150x150/?jasmine" },
    { id: 10, name: "Sunflower", price: 8, img: "https://source.unsplash.com/150x150/?sunflower" },
    { id: 11, name: "Marigold", price: 7, img: "https://source.unsplash.com/150x150/?marigold" },
    { id: 12, name: "Lavender", price: 19, img: "https://source.unsplash.com/150x150/?lavender" },
  ],
  Succulents: [
    { id: 13, name: "Cactus", price: 10, img: "https://source.unsplash.com/150x150/?cactus" },
    { id: 14, name: "Echeveria", price: 13, img: "https://source.unsplash.com/150x150/?succulent" },
    { id: 15, name: "Sedum", price: 12, img: "https://source.unsplash.com/150x150/?sedum" },
    { id: 16, name: "Haworthia", price: 11, img: "https://source.unsplash.com/150x150/?haworthia" },
    { id: 17, name: "Crassula", price: 14, img: "https://source.unsplash.com/150x150/?crassula" },
    { id: 18, name: "Kalanchoe", price: 15, img: "https://source.unsplash.com/150x150/?kalanchoe" },
  ],
};

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = (product) => {
    dispatch(addItem(product));
    setAddedItems([...addedItems, product.id]);
  };

  return (
    <div className="product-container">

      {/* NAVBAR (required fix) */}
      <nav className="navbar">
        <h2>e-plantShopping</h2>
        <div>
          <a href="/">Home</a> | <a href="/cart">Cart</a> | <a href="/about">About</a>
        </div>
      </nav>

      {Object.keys(plantData).map((category) => (
        <div key={category}>
          <h2>{category} Plants</h2>

          <div className="product-list">
            {plantData[category].map((plant) => (
              <div className="product-card" key={plant.id}>
                
                {/* IMAGE (missing in your code) */}
                <img src={plant.img} alt={plant.name} />

                <h3>{plant.name}</h3>
                <p>Price: ${plant.price}</p>

                <button
                  className="btn btn-primary"
                  onClick={() => handleAdd(plant)}
                  disabled={addedItems.includes(plant.id)}
                >
                  {addedItems.includes(plant.id)
                    ? "Added"
                    : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

