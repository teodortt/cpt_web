import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
} from "@stripe/react-stripe-js";
import { CheckoutForm } from "../components/CheckoutForm";

const stripeProme = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Home = () => {
    const [status, setStatus] = useState("");
    console.log("status", status);

    // debugger;
    if (status === "success") {
        return <div>Thank you for your purchase!</div>;
    }

    if (status.includes("Something went wrong")) {
        return <div>Something went wrong</div>;
    }

    return (
        <Elements stripe={stripeProme}>
            <CheckoutForm setStatus={setStatus} />
        </Elements>
    );
};

export default Home;
