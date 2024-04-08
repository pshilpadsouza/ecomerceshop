import React from 'react'
//import './CheckoutProduct.css';
import { useStateValue } from './StateProvider'
function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = ()=> {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="CheckoutProduct">
            {/*<img src="https://tse1.mm.bing.net/th?id=OIP.eiVww65CkvlHeNGmZoh7IgHaHa&pid=Api&P=0&h=180" alt="" className="checkoutProduct_image" />*/}
            <img src={image} alt="" className='CheckoutProduct_image' />
            <div className="product_info">
                <p className="checkoutproduct_title">{title}
                    shop here with cool products marvelouus
                </p>
                <p className="checkoutproduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct_rating">

                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>
                    remove from basket
                </button>
            </div>
        </div>

    )
}

export default CheckoutProduct