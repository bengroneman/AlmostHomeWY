const express = require("express");
const app = express();
// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 10;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.post("/create-checkout-session", async (req, res) => {
  const session = stripe.checkout.session.create({
    line_items: [
      {
        name: "Donation",
        description: "Donation to the Almost Home Wyoming",
        price: 10,
        quantity: 1,
      }
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });
  res.redirect(303, session.url);
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
