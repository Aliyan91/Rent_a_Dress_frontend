"use client";

import { useSearchParams } from "next/navigation";
import Storefront from "./Storefront";

export default function CollectionRoute() {
  const searchParams = useSearchParams();

  return (
    <Storefront
      initialScreen="collection"
      initialSearchQuery={searchParams.get("q") ?? ""}
    />
  );
}
