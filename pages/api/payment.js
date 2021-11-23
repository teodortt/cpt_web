// import dotenv from "dotenv";
// dotenv.config();
const adultsPrice = 59;
const kidsPrice = 49;
let subtotalPrice;
let totalPrice;
let taxPrice;
const taxRate = 8.875 / 100;

function calculateTotalPrice(amount) {
  subtotalPrice = amount.adults * adultsPrice + amount.kids * kidsPrice;
  totalPrice = subtotalPrice + subtotalPrice * taxRate;
  taxPrice = subtotalPrice * taxRate;
  // console.log('subtotal ' + subtotal + 'total ' + total);
  return Math.round(totalPrice) * 100;
}

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export default async (req, res) => {
  const { id, amount, date } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount: calculateTotalPrice(amount),
      currency: "USD",
      description: date,
      payment_method: id,
      confirm: true,
    });
    console.log("payment", payment);
    return res.status(200).json({
      confirm: payment.status,
    });
  } catch (error) {
    console.log("error in server", error);
    return res.status(400).json({
      error: "Something went wrong",
    });
  }
};
