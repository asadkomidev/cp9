import { db } from "@/backend/database";
import { subscriptions } from "@/backend/database/schema";
import { stripe } from "@/backend/utilities/config/stripe";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("Stripe-Signature");

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );

    const session = event.data.object as Stripe.Checkout.Session;
    switch (event.type) {
      case "checkout.session.completed":
        const subscription = await stripe.subscriptions.retrieve(
          session.subscription as string,
        );

        if (!session?.metadata?.userId) {
          console.error(`⚠️ User not found in metadata`);
          return new Response("User not found in metadata", { status: 400 });
        }

        await db.insert(subscriptions).values({
          userId: session.metadata.userId,
          subscriptionId: subscription.id,
          customerId: subscription.customer as string,
          priceId: subscription.items.data[0].price.id,
          endDate: new Date(subscription.current_period_end * 1000),
        });

        revalidatePath("/home");

        console.log(`🔔 Payment received: ${session.payment_intent}`);
        break;
      case "checkout.session.async_payment_succeeded":
        const subscriptionSucceeded = await stripe.subscriptions.retrieve(
          session.subscription as string,
        );

        await db
          .update(subscriptions)
          .set({
            priceId: subscriptionSucceeded.items.data[0].price.id,
            endDate: new Date(subscriptionSucceeded.current_period_end * 1000),
          })
          .where(eq(subscriptions.subscriptionId, subscriptionSucceeded.id));

        revalidatePath("/home");

        console.log(`🔔 Payment succeeded: ${session.payment_intent}`);
        break;
      default:
        console.log(`🔔 Unhandled event type: ${event.type}`);
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error(`⚠️ Webhook signature verification failed.`);
    return new Response("Webhook signature verification failed", {
      status: 400,
    });
  }
}
