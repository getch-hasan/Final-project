import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ appointment }) => {
    const {_id}=appointment
    const stripe = useStripe()
    const elements = useElements()
    const [cardEror, setCardEror] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState('');
    const [transectionId, setTransectionId] = useState('')
    const { price, patientName, patient } = appointment
    useEffect(() => {

        fetch("http://localhost:8000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)

                }
            });
    }, [price]);
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }



        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        setCardEror(error?.message || '');
        setSuccess('')
        setProcessing(true)

        //confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient
                    },
                },
            },
        );
        if (intentError) {
            setCardEror(intentError.message)
            setSuccess('')
            setProcessing(false)

        }
        else {
            setCardEror('')
            setSuccess("Congratulations , Your payment is successful")
            setTransectionId(paymentIntent.id)
            console.log(paymentIntent, success)
            //
            const payment={
                appointment:_id,
                transectionId:paymentIntent.id
            }
            fetch(`http://localhost:8000/booking/${_id}`,{
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body:JSON.stringify(payment)
            }).then(res => res.json()).then(data => {
                setProcessing(false)
            })

        }

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
                <button className='mt-8 btn btn-primary' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>


            {
                cardEror && <p className="text-warning" >{cardEror}</p>
            }
            {
                success && <div>
                    <p className="text-green-500" >{success}</p>
                    <p className="text-green-500 "  >Your transaction Id: <strong>{transectionId}</strong> </p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;