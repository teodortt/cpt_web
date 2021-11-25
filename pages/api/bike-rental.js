import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const adultsPrice = 15;
const kidsPrice = 13;
const adultsPrice_2h = 20;
const kidsPrice_2h = 18;
const adultsPrice_3h = 25;
const kidsPrice_3h = 23;
const adultsPrice_ALL = 40;
const kidsPrice_ALL = 38;
const basketPrice = 1;
const lockPrice = 2;
let subtotalPrice;
let totalPrice;
let taxPrice;
const taxRate = 8.875 / 100;

function calculateTotalPrice(count) {

  let baskets = count.baskets * basketPrice;
  let locks = count.locks * lockPrice;

  if (count.duration === 1) {
    subtotalPrice = count.adults * adultsPrice + count.kids * kidsPrice + baskets + locks;
    totalPrice = subtotalPrice + subtotalPrice * taxRate;
    taxPrice = subtotalPrice * taxRate;
    if (count.discount) {
      let discountedPrice = totalPrice - (totalPrice * count.discount / 100)
      return Number(discountedPrice).toFixed(2) * 100;
    } else {
      return Number(totalPrice).toFixed(2) * 100;
    }
  }
  if (count.duration === 2) {

    subtotalPrice = count.adults * adultsPrice_2h + count.kids * kidsPrice_2h + baskets + locks;
    totalPrice = subtotalPrice + subtotalPrice * taxRate;
    taxPrice = subtotalPrice * taxRate;
    if (count.discount) {
      let discountedPrice = totalPrice - (totalPrice * count.discount / 100)
      return Number(discountedPrice).toFixed(2) * 100;
    } else {
      return Number(totalPrice).toFixed(2) * 100;
    }
  }
  if (count.duration === 3) {

    subtotalPrice = count.adults * adultsPrice_3h + count.kids * kidsPrice_3h + baskets + locks;
    totalPrice = subtotalPrice + subtotalPrice * taxRate;
    taxPrice = subtotalPrice * taxRate;
    if (count.discount) {
      let discountedPrice = totalPrice - (totalPrice * count.discount / 100)
      return Number(discountedPrice).toFixed(2) * 100;
    } else {
      return Number(totalPrice).toFixed(2) * 100;
    }
  }
  if (count.duration === 4) {

    subtotalPrice = count.adults * adultsPrice_ALL + count.kids * kidsPrice_ALL + baskets + locks;
    totalPrice = subtotalPrice + subtotalPrice * taxRate;
    taxPrice = subtotalPrice * taxRate;
    if (count.discount) {
      let discountedPrice = totalPrice - (totalPrice * count.discount / 100)
      return Number(discountedPrice).toFixed(2) * 100;
    } else {
      return Number(totalPrice).toFixed(2) * 100;
    }
  }
}

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { amount, metadata } = req.body;
      // Psst. For production-ready applications we recommend not using the
      // amount directly from the client without verifying it first. This is to
      // prevent bad actors from changing the total amount on the client before
      // it gets sent to the server. A good approach is to send the quantity of
      // a uniquely identifiable product and calculate the total price server-side.
      // Then, you would only fulfill orders using the quantity you charged for.

      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateTotalPrice(amount),
        currency: "usd",
        metadata: amount,
        receipt_email: amount.email
      });

      res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
