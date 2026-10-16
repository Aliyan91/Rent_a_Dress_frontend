import { Suspense } from "react";
import BookingRoute from "../components/BookingRoute";
import RouteLoading from "../components/RouteLoading";

export default function BookingPage() {
  return (
    <Suspense fallback={<RouteLoading message="Loading your dress..." />}>
      <BookingRoute />
    </Suspense>
  );
}
