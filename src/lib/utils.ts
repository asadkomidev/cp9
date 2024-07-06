import {
  checkCountHelper,
  checkSubscriptionHelper,
  getCountHelper,
  updateCountHelper,
} from "@/backend/utilities/helpers/helpers";
import { type ClassValue, clsx } from "clsx";
import { check } from "drizzle-orm/mysql-core";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;
}

export async function checkSubscription() {
  const [data] = await checkSubscriptionHelper();

  return data ?? false;
}

export async function checkCount() {
  const [data] = await checkCountHelper();

  return data ?? false;
}

export async function updateCount() {
  await updateCountHelper();
}

export async function getCount() {
  const [data] = await getCountHelper();

  return data ?? 0;
}
