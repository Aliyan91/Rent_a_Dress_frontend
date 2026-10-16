"use client";

import { useMemo, useState } from "react";
import { Dress, dresses } from "./dresses";

type DressPageProps = {
  onBook: (dress: Dress) => void;
  searchQuery: string;
};

const filters = ["All dresses", "Lahnga", "Maxi", "Sherwani"] as const;
type DressFilter = (typeof filters)[number];

export default function DressPage({ onBook, searchQuery }: DressPageProps) {
  const [activeFilter, setActiveFilter] = useState<DressFilter>("All dresses");
  const filteredDresses = useMemo(
    () => {
      const normalizedQuery = searchQuery.trim().toLocaleLowerCase();
      return dresses.filter((dress) => {
        const matchesCategory =
          activeFilter === "All dresses" || dress.category === activeFilter;
        const matchesSearch =
          normalizedQuery.length === 0 ||
          [dress.name, dress.designer, dress.category, dress.color].some((value) =>
            value.toLocaleLowerCase().includes(normalizedQuery),
          );
        return matchesCategory && matchesSearch;
      });
    },
    [activeFilter, searchQuery],
  );

  return (
    <main className="collection-page">
      <section className="collection-intro">
        <p className="eyebrow"><span className="eyebrow-line" /> The edit</p>
        <h1>Something lovely<br />for <em>what&apos;s next.</em></h1>
        <p>Beautifully kept, ready to be yours for a little while.</p>
      </section>
      <section className="collection-toolbar" aria-label="Dress filters">
        <div className="filter-list">
          {filters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "filter-chip selected" : "filter-chip"}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <span className="result-count">{filteredDresses.length} pieces</span>
      </section>
      <section className="dress-grid" aria-label="Available dresses">
        {filteredDresses.map((dress, index) => (
          <article className="dress-card" key={dress.id}>
            <button className="dress-image-button" onClick={() => onBook(dress)} aria-label={`Book ${dress.name}`}>
              <span
                className="dress-image"
                role="img"
                aria-label={`${dress.color} dress, ${dress.name}`}
                style={{ backgroundImage: `url("${dress.image}")` }}
              />
              <span className="image-index">0{index + 1}</span>
              <span className="image-arrow" aria-hidden="true">↗</span>
            </button>
            <div className="dress-details">
              <div>
                <p className="designer-name">{dress.designer} <span>· {dress.category}</span></p>
                <h2>{dress.name}</h2>
              </div>
              <div className="dress-price"><strong>${dress.price}</strong><span>/ 4 days</span></div>
            </div>
            <button className="card-book-link" onClick={() => onBook(dress)}>
              Discover this dress <span aria-hidden="true">→</span>
            </button>
          </article>
        ))}
        {filteredDresses.length === 0 && (
          <p className="empty-results">No dresses match your search. Try another name or category.</p>
        )}
      </section>
      <section className="promise-strip" id="our-promise">
        <span className="promise-flower" aria-hidden="true">✳</span>
        <div><p className="eyebrow">A kinder kind of getting dressed</p><h2>Wear it once. Love it forever.</h2></div>
        <p>Each piece is carefully cleaned, checked and ready for its next story.</p>
      </section>
    </main>
  );
}
