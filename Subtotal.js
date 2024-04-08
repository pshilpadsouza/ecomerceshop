import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{basket},dispatch]=useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            subtotal ({basket.length}items):<strong>${value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> this order contains a gift
                        </small>
                    </>
                )}
                decimalscale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparation={true}
            />
        </div>
    )
}

export default Subtotal