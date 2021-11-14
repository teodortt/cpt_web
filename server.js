const express = require("express");
const app = express();
// This is a sample test API key. Sign in to see examples pre-filled with your key.
const stripe = require("stripe")("sk_test_kngFEn5fOoWan43GkufgldR400VWsfOfnp");

app.use(express.static("public"));
app.use(express.json());

const codes = ['promo1', 'abcd'];

const calculateOrderAmount = (price, promocode) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client'
  if (codes.some(val => val === promocode)) {
    return price * 0.5
  }
  return price;
};

app.post("/create-payment-intent", async (req, res) => {
  const { id, items, price, promocode } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(price, promocode),
    currency: "usd",
    description: 'description'
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

app.get("/url", (req, res) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});


app.listen(4242, () => console.log('Node server listening on port 4242!'));
