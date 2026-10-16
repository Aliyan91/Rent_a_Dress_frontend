"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BookingPage from "./BookingPage";
import DressPage from "./DressPage";
import { Dress } from "./dresses";
import LoginPage from "./LoginPage";
import SiteNav from "./SiteNav";

type Screen = "login" | "collection" | "booking";

type StorefrontProps = {
  initialScreen: Screen;
  initialDress?: Dress;
  initialSearchQuery?: string;
};

export default function Storefront({
  initialScreen,
  initialDress,
  initialSearchQuery = "",
}: StorefrontProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

  function startBooking(dress: Dress) {
    router.push(`/booking?dress=${dress.id}`);
  }

  function navigate(nextScreen: "login" | "collection") {
    router.push(nextScreen === "login" ? "/login" : "/collection");
  }

  function showSearchResults() {
    router.push(`/collection?q=${encodeURIComponent(searchQuery.trim())}`);
  }

  return (
    <div className={initialScreen === "login" ? "storefront login-storefront" : "storefront"}>
      {initialScreen !== "login" && (
        <div className="announcement"><span aria-hidden="true">✳</span> A little something lovely, delivered to your door <span className="announcement-detail">Complimentary delivery on every rental</span></div>
      )}
      <SiteNav
        currentScreen={initialScreen}
        showSearch={initialScreen !== "login"}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={showSearchResults}
      />
      {initialScreen === "login" && <LoginPage onSignIn={() => navigate("collection")} onBrowse={() => navigate("collection")} />}
      {initialScreen === "collection" && <DressPage onBook={startBooking} searchQuery={searchQuery} />}
      {initialScreen === "booking" && initialDress && <BookingPage dress={initialDress} onBack={() => navigate("collection")} />}
      {initialScreen === "booking" && !initialDress && (
        <main className="booking-page booking-unavailable">
          <h1>Choose a dress to begin.</h1>
          <Link className="button button-dark" href="/collection">Browse the collection <span aria-hidden="true">→</span></Link>
        </main>
      )}
      {initialScreen !== "login" && (
        <footer className="site-footer">
          <Link className="footer-brand" href="/login">Brides<span>&amp;</span>Grooms</Link>
          <span>For all the lovely things ahead.</span>
          <span>© Brides&amp;Grooms</span>
        </footer>
      )}
    </div>
  );
}
