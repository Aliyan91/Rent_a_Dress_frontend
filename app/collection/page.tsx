import { Suspense } from "react";
import CollectionRoute from "../components/CollectionRoute";
import RouteLoading from "../components/RouteLoading";

export default function CollectionPage() {
  return (
    <Suspense fallback={<RouteLoading message="Loading the collection..." />}>
      <CollectionRoute />
    </Suspense>
  );
}
