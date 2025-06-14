import Stripe from "stripe";
import { ProductId } from "./interface";

export function getDomainUrl(request: Request) {
  const host =
    request.headers.get("X-Forward-Host") ?? request.headers.get("host");

  if (!host) {
    throw new Error("Could not find the url");
  }

  const protocol = host.includes("localhost") ? "http" : "https";

  return `${protocol}://${host}`;
}

export const getStripeSession = async (
  items: string,
  domainUrl: string
): Promise<string> => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-05-28.basil",
    typescript: true,
  });

  const dataObj = JSON.parse(items);

  // Filter out products without a valid Stripe Price ID
  const lineItems = dataObj
    .filter((product: any) => !!product.stripe)
    .map((product: any) => ({
      price: product.stripe,
      quantity: product.quantity,
     
    }));

  // Throw an error if no valid items
  if (lineItems.length === 0) {
    throw new Error("No valid products with Stripe Price IDs in cart.");
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: lineItems,
    success_url: `${domainUrl}/payment/success`,
    cancel_url: `${domainUrl}/payment/cancelled`,
  });

  return session.url as string;
};