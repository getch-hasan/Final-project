import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardEror,setCardEror]=useState('')
    const handleSubmit =async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }


      
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
        })
        
           setCardEror(error?.message || '')
        
        
    }
    return (
        <>
        
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='mt-8 btn btn-primary' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        
        
        {
            cardEror && <p className="text-warning" >{cardEror}</p>
        }
        </>
    );
};

export default CheckoutForm;