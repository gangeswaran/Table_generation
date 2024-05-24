import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, addCart } from './counterSlice';
import  './Counter.css';
import img from "../../Images/card.jpg";
import img1 from "../../Images/navbar.jpg";

export function Counter() {
  const productList = [
    { id: 1, title: "Product 1", image: img, link: "/counter-redux" },
    { id: 2, title: "Product 2", image: img1, link: "/counter-redux" },
    { id: 3, title: "Product 3", image: img, link: "/counter-redux" },
    { id: 4, title: "Product 4", image: img1, link: "/counter-redux" },
  ];

  const count = useSelector((state) => state.counter.value);
  const addedCarts = useSelector((state) => state.counter.carts);
  const showCart = useSelector((state) => state.counter.showCart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(increment());
    dispatch(addCart(product));
  };

  return (
    <div className="
    counterContainer">
      {!showCart ? (
        <div className="card">
          {productList.map((product) => (
            <div key={product.id}>
              <img className="cardImgTop" src={product.image} alt={product.title} />
              <div className="cardBody">
                <h4 className="cardTitle">{product.title}</h4>
                <p className="cardText">See the product and choose what you need!</p>
                <button
                  className="counterButton"
                  aria-label="Add to cart"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="addedCarts">
          <h3>Added Carts</h3>
          {addedCarts.map((product) => (
            <div key={product.id}>
              <img className="cardImgTop" src={product.image} alt={product.title} />
              <div className="cardBody">
                <h4 className="cardTitle">{product.title}</h4>
                <p className="cardText">See the product and choose what you need!</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Counter;
