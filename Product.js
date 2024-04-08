import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';
export default function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
    type: "ADD_TO_BASKET",
      item: {
      id: id,
        image: image,
          price: price,
            rating: rating
    },
  });
};
return (
  <div>
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product-prise">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      {/*<img src="https://tse4.mm.bing.net/th?id=OIP.aJAdtvVUDPAEQdKEr-oi-AHaHa&pid=Api&P=0&h=180"  if we un comment it output will come 
 alt="anything here" />  */}
      <img src={image} />
      <button onClick={addToBasket}> add to basket</button>
    </div>
  </div>

)
}
