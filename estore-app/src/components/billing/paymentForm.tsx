// import React, { useState } from 'react';
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import router from '../../api/base';

// const _paymentURL = 'payment';

// function PaymentForm() {
//     const [success, setSuccess] = useState(false);
//     const stripe = useStripe();
//     const elements = useElements();

//     const handlePayment = async (e: React.FormEvent) => {
//         e.preventDefault();
//         const { error, paymentMethod } = await stripe!.createPaymentMethod({
//             type: 'card',
//             card: elements.getElement(CardElement)
//         });
//         if (!error) {
//             try {
//                 const { id } = paymentMethod;
//                 const amount = 10000;
//                 const value = { id, amount };
//                 const responce = await router.post(_paymentURL, value);
//                 if (responce.data.success) {
//                     console.log('Payment : Paid Successfully');
//                     setSuccess(true);
//                 }
//             } catch (error) {
//                 console.log(`Payment : ${error}`);
//             }
//         }
//         else {
//             console.log(error.message);
//         }
//     }

//     return (
//         <>
//             {!success ?
//                 <form onSubmit={handlePayment}>
//                     <CardElement options={{ hidePostalCode: true }} />
//                     <button>Pay</button>
//                 </form>
//                 :
//                 <p>Payment successfull. You bought the item.</p>
//             }
//         </>
//     )
// }

// export default PaymentForm;
