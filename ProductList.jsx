import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/CartSlice";

const plantData = {
  Indoor: [
    { id: 1, name: "Aloe Vera", price: 10 },
    { id: 2, name: "Snake Plant", price: 15 },
    { id: 3, name: "Peace Lily", price: 12 },
    { id: 4, name: "Spider Plant", price: 11 },
    { id: 5, name: "ZZ Plant", price: 18 },
    { id: 6, name: "Pothos", price: 9 },
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 20 },
    { id: 8, name: "Hibiscus", price: 14 },
    { id: 9, name: "Jasmine", price: 16 },
    { id: 10, name: "Sunflower", price: 8 },
    { id: 11, name: "Marigold", price: 7 },
    { id: 12, name: "Lavender", price: 19 },
  ],
  Succulents: [
    { id: 13, name: "Cactus", price: 10 },
    { id: 14, name: "Echeveria", price: 13 },
    { id: 15, name: "Sedum", price: 12 },
    { id: 16, name: "Haworthia", price: 11 },
    { id: 17, name: "Crassula", price: 14 },
    { id: 18, name: "Kalanchoe", price: 15 },
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
      {Object.keys(plantData).map((category) => (
        <div key={category}>
          <h2>{category} Plants</h2>

          <div className="product-list">
            {plantData[category].map((plant) => (
              <div className="product-card" key={plant.id}>
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

