import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const adultsPrice = 53;
const kidsPrice = 51;
const adultsPrice_2h = 89;
const kidsPrice_2h = 87;
let subtotalPrice;
let totalPrice;
let taxPrice;
const taxRate = 8.875 / 100;

function calculateTotalPrice(count) {
  if (count.duration < 2) {
    subtotalPrice = count.adults * adultsPrice + count.kids * kidsPrice;
    totalPrice = subtotalPrice + subtotalPrice * taxRate;
    taxPrice = subtotalPrice * taxRate;
    if (count.discount) {
      let discountedPrice = totalPrice - (totalPrice * count.discount / 100)
      return Number(discountedPrice).toFixed(2) * 100;
    } else {
      return Number(totalPrice).toFixed(2) * 100;
    }
  } else {

    subtotalPrice = count.adults * adultsPrice_2h + count.kids * kidsPrice_2h;
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
        metadata: amount
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
