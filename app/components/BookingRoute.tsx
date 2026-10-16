"use client";

import { useSearchParams } from "next/navigation";
import Storefront from "./Storefront";
import { dresses } from "./dresses";

export default function BookingRoute() {
  const searchParams = useSearchParams();
  const dressId = searchParams.get("dress");
  const dress = dresses.find((item) => String(item.id) === dressId);

  return <Storefront initialScreen="booking" initialDress={dress} />;
}
