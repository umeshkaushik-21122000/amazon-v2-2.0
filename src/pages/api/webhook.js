import { buffer } from "micro";
import * as admin from "firebase-admin";

console.log("webhook")

// Secure a connection to FIREBASE from the backend
const serviceAccount = 
{
  type: process.env.type,
  project_id: process.env.project_id,
  private_key_id: process.env.private_key_id,
  private_key: process.env.private_key,
  client_email: process.env.client_emai,
  client_id: process.env.client_id,
  auth_uri: process.env.auth_uri,
  token_uri: process.env.token_uri,
  auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url, 
  client_x509_cert_url: process.env.client_x509_cert_ur
}
const app = !admin.apps.length
  ? admin.initializeApp({
     credential: admin.credential.cert(serviceAccount),
  })
  : admin.app();
// Establish connection to Stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session) => {
    return app
        .firestore()
        .collection("customers")
        .doc(session.metadata.email)
        .collection("orders")
        .doc(session.id)
        .set({
            images: JSON.parse(session.metadata.images), 
            amount: session.amount_total / 100,
            amount_shipping: session.total_details.amount_shipping / 100,
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {console.log(`SUCCESS: Order ${session.id} has been added to the DB`);
    });
};

export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer;
    const sig = req.headers["stripe-signature"];

    let event;
    // Verify that the EVENT posted came from stripe
    try{
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      return res.status(400).send(`Webhook error: ${err.message}`);
    }
    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      // Fulfill the order...
      return fulfillOrder(session)
        .then(() => res.status(200).send())
        .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`));
    }
    res.status(200).send();
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}