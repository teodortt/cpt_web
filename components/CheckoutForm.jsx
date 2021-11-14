import React, { useState, useEffect } from "react";
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { method } from "stripe/lib/StripeResource";

export default function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const [product, setProduct] = useState({});
  const [discount, setDiscount] = useState([]);

  const handleInputChange = event => {
    const { name, value } = event.target

    setProduct({ ...product, [name]: value })
  }

  // const isUniqueField = (field) => {
  //   return async (rule, value) => {
  //     const resp = await fetch(`/api/wallets/${value}`);
  //     const data = await resp.json();
  //     if (data.exists) {
  //       return Promise.reject("This account already exists.");
  //     }
  //     return Promise.resolve();
  //   }
  // };

  // useEffect(() => {
  //   fetch('/url')
  //     .then(res => res.json())
  //     .then(data => setDiscount(data))
  //   // .then(()=>isExist('Tony'))
  // }, [])

  // const isExist = async (value) => {
  //   if (discount.some(val => val === value)) {
  //     return console.log('Exists');
  //   }
  //   // return console.log("Invalid address");
  //   console.log(discount)

  // };
  // setProducts(products.filter(product => product.id !== id))



  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: "xl-tshirt", items: "3", price: product.price, discount: "10", promocode: 'promo1' })
      })
      .then(res => {
        return res.json();
      })
      .then(data => (
        setClientSecret(data.clientSecret)
      ));
  }, [product.price]);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Courier, monospace',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <div>
      {/* <button onClick={() => isExist('Tfxony')}>Discount</button> */}

      <form id="payment-form" onSubmit={handleSubmit}>

        <p>Price</p>
        <input name="price" type="number" onChange={handleInputChange} />
        {/* <button onClick={console.log(product.price)}>show product</button> */}

        <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
        <button
          disabled={processing || disabled || succeeded}
          id="submit"
        >
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
        <p className={succeeded ? "result-message" : "result-message hidden"}>
          Payment succeeded, see the result in your
          <a
            href={`https://dashboard.stripe.com/test/payments`}
          >
            {" "}
            Stripe dashboard.
          </a> Refresh the page to pay again.
        </p>
      </form>
    </div>
  );
}
