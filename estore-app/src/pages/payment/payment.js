import { useState } from 'react';
import StripeComponent from '../../components/payment/stripe';

function Payment() {
    const [isItem, setIsItem] = useState(false);
    return (
        <div>
            {isItem ?
                <StripeComponent />
                :
                <>
                    <h4>$100.00</h4>
                    <p>item01</p>
                    <button onClick={() => setIsItem(true)}>Buy</button>
                </>
            }
        </div>
    )
}

export default Payment;
