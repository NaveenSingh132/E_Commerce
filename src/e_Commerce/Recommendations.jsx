import React, { useEffect, useState } from "react";
import { useCartContext } from "./context/CartContext";       // Changed from ../
import { useProductContext } from "./context/ProductContext"; // Changed from ../
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import FormatPrice from "./Helper/FormatPrice";               // Changed from ../

const Recommendations = () => {
  const { cart } = useCartContext();
  const { products } = useProductContext();
  const [recommendations, setRecommendations] = useState([]);

useEffect(() => {
  if (cart.length > 0 && products.length > 0) {
    // Get unique categories from cart
    const cartCategories = [...new Set(cart.map(item => item.category))];
    
    // Filter products: same category but not in cart
    const recommended = products.filter(product => {
      const productIdWithColor = product.id + (product.colors?.[0] || '');
      return (
        cartCategories.includes(product.category) &&
        !cart.some(item => item.id === productIdWithColor)
      );
    });

    setRecommendations(recommended.slice(0, 6));
  }
}, [cart, products]);

  if (recommendations.length === 0) {
    return (
      <Wrapper>
        <div className="container">
          <h2>No recommendations available</h2>
          <p>Add items to your cart to get personalized recommendations</p>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="container">
        <h2>Recommended For You</h2>
        <div className="grid grid-three-column">
          {recommendations.map((product) => {
            return (
              <NavLink to={`/singleproduct/${product.id}`} key={product.id}>
                <div className="card">
                  <figure>
                    <img src={product.image[0].url} alt={product.name} />
                  </figure>
                  <div className="card-data">
                    <h3>{product.name}</h3>
                    <p className="card-data--price">
                      <FormatPrice price={product.price} />
                    </p>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    max-width: 120rem;
  }
  .grid {
    gap: 3.2rem;
  }
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }
    img {
      max-width: 100%;
      margin-top: 1rem;
      height: 20rem;
    }
    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    &:hover {
      transform: scale(1.02);
    }
  }
`;

export default Recommendations;