"use client";

import { FormEvent, useState } from "react";
import { Dress } from "./dresses";

type BookingPageProps = {
  dress: Dress;
  onBack: () => void;
};

export default function BookingPage({ dress, onBack }: BookingPageProps) {
  const [duration, setDuration] = useState(4);
  const [confirmed, setConfirmed] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [size, setSize] = useState("");
  const total = Math.round((dress.price / 4) * duration);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setConfirmed(true);
  }

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateValue = `${minDate.getFullYear()}-${String(minDate.getMonth() + 1).padStart(2, "0")}-${String(minDate.getDate()).padStart(2, "0")}`;

  return (
    <main className="booking-page">
      <button className="back-link" onClick={onBack}><span aria-hidden="true">←</span> Back to the edit</button>
      <div className="booking-layout">
        <section className="booking-form-column">
          <p className="eyebrow"><span className="eyebrow-line" /> Make it yours</p>
          <h1>A date with<br /><em>{dress.name}.</em></h1>
          <p className="booking-lead">Just a few details and this lovely piece will be on its way.</p>
          {confirmed ? (
            <div className="confirmation-card" role="status">
              <span className="confirmation-mark" aria-hidden="true">✓</span>
              <p className="eyebrow">You&apos;re all set</p>
              <h2>Consider it yours.</h2>
              <p>Your request for {dress.name} is in. We&apos;ll be in touch to confirm the details.</p>
              <div className="confirmation-summary">
                <span>{startDate ? new Date(`${startDate}T12:00:00`).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" }) : "Your selected date"}</span>
                <span>{duration} days · Size {size}</span>
                <strong>${total} total</strong>
              </div>
              <button className="button button-outline" onClick={onBack}>Back to the collection</button>
            </div>
          ) : (
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="rental-date">When do you need it?
                  <input id="rental-date" type="date" min={minDateValue} value={startDate} onChange={(event) => setStartDate(event.target.value)} required />
                </label>
                <label htmlFor="dress-size">Your size
                  <select id="dress-size" value={size} onChange={(event) => setSize(event.target.value)} required>
                    <option value="" disabled>Select size</option>
                    {["4", "6", "8", "10", "12", "14", "16"].map((value) => <option value={value} key={value}>UK {value}</option>)}
                  </select>
                </label>
              </div>
              <fieldset className="duration-field">
                <legend>How long would you like it?</legend>
                <div className="duration-options">
                  {[4, 7, 10].map((days) => (
                    <button
                      key={days}
                      type="button"
                      aria-pressed={duration === days}
                      className={duration === days ? "duration-option selected" : "duration-option"}
                      onClick={() => setDuration(days)}
                    >
                      <span>{days} days</span>
                      <strong>${Math.round((dress.price / 4) * days)}</strong>
                    </button>
                  ))}
                </div>
              </fieldset>
              <div className="booking-total"><span>Rental total</span><strong>${total}</strong></div>
              <button type="submit" className="button button-dark booking-submit">Request this dress <span aria-hidden="true">→</span></button>
              <p className="booking-disclaimer">Your booking request is free. We&apos;ll confirm availability before any payment.</p>
            </form>
          )}
        </section>
        <aside className="booking-summary">
          <div
            className="booking-image"
            role="img"
            aria-label={`${dress.color} dress, ${dress.name}`}
            style={{ backgroundImage: `url("${dress.image}")` }}
          />
          <div className="booking-dress-details">
            <div><p className="designer-name">{dress.designer}</p><h2>{dress.name}</h2></div>
            <span>{dress.color}</span>
          </div>
          <div className="booking-promise"><span aria-hidden="true">✳</span><p>Professionally cleaned, carefully packed, and ready for your moment.</p></div>
        </aside>
      </div>
    </main>
  );
}
