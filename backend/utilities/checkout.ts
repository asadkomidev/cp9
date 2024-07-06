"use server";

import { absoluteUrl } from "@/lib/utils";

import { db } from "@/backend/database";
import { subscriptions } from "@/backend/database/schema";
import { eq } from "drizzle-orm";

import { getAuthUser } from "./utils";
import { stripe } from "./config/stripe";

const returnUrl = absoluteUrl("/home");

export const checkout = async () => {
  const { user } = await getAuthUser();

  try {
    if (!user) {
      throw new Error("User is not authenticated");
    }

    const userId = user?.id;

    const [subscription] = await db
      .select()
      .from(subscriptions)
      .where(eq(subscriptions.userId, userId));

    if (subscription && subscription.customerId) {
      const session = await stripe.billingPortal.sessions.create({
        customer: subscription.customerId,
        return_url: returnUrl,
      });

      return session.url;
    }
    // @ts-ignore
    const session = await stripe.checkout.sessions.create({
      success_url: returnUrl,
      cancel_url: returnUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: user.email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Premium",
              description: "Premium subscription",
            },
            unit_amount: 2000,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
    });

    return session.url;
  } catch (error) {
    console.log("🔴 Failed to get stripe", error);
  }
};
