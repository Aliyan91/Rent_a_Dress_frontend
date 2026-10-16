"use client";

import Link from "next/link";

type SiteNavProps = {
  currentScreen: "login" | "collection" | "booking";
  showSearch: boolean;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit: () => void;
};

export default function SiteNav({
  currentScreen,
  showSearch,
  searchQuery,
  onSearchChange,
  onSearchSubmit,
}: SiteNavProps) {
  const signedIn = currentScreen !== "login";
  const homeHref = signedIn ? "/collection" : "/login";

  return (
    <header className="site-header">
      <Link
        className="brand"
        href={homeHref}
        aria-label="Brides and Grooms home"
      >
        <span className="brand-name">Brides<span>&amp;</span>Grooms</span>
        <span className="brand-caption">DRESS, FOR THE OCCASION</span>
      </Link>
      {showSearch && (
        <form
          className="site-search"
          role="search"
          onSubmit={(event) => {
            event.preventDefault();
            onSearchSubmit();
          }}
        >
          <input
            type="search"
            aria-label="Search dresses"
            placeholder="Search dresses..."
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
          />
          <button type="submit" aria-label="Show search results">
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
              <circle cx="8.75" cy="8.75" r="5.75" />
              <path d="m13 13 4 4" />
            </svg>
          </button>
        </form>
      )}
      {signedIn && (
        <nav className="header-links" aria-label="Main navigation">
          <Link
            className={currentScreen === "collection" ? "nav-link active" : "nav-link"}
            href="/collection"
          >
            The collection
          </Link>
          <a className="nav-link story-link" href="#our-promise">
            Our promise
          </a>
          <Link className="nav-account" href="/login">
            My account <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      )}
    </header>
  );
}
