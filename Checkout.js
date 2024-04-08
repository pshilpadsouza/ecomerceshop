import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct.js'
import Subtotal from './Subtotal.js';
import { ListItemAvatar } from '@mui/material';
import { useStateValue } from './StateProvider.js';
function Checkout() {
    const[{basket}, dispatch]=useStateValue();
    return (
        <div>
            <div className="checkout">
                <div className="checkout_left">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.PLKuGkYC9TxFa-M8FqyiAAHaEO&pid=Api&P=0&h=180" alt="" className="checkout_ad" />
                    <div>
                        <h2 className="checkout_title">
                            your shopping basket
                        </h2>



                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}

                        {/*<CheckoutProduct/>
                    <CheckoutProduct/>  */}


                    </div>
                </div>
                <div className="checkout_right">
                    <Subtotal />
                </div>
            </div>
        </div>
    );
}

export default Checkout;
