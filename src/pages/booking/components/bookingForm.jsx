import { useState, useEffect } from "react";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const [isValid, setIsValid] = useState(false);

  // ✅ Validación React
  useEffect(() => {
    const valid =
      date !== "" &&
      time !== "" &&
      guests >= 1 &&
      guests <= 10 &&
      occasion !== "";

    setIsValid(valid);
  }, [date, time, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) return;

    submitForm({
      date,
      time,
      guests,
      occasion,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      {/* ✅ DATE */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        required
        onChange={(e) => {
          setDate(e.target.value);
          dispatch({ type: "UPDATE_TIMES", date: e.target.value });
        }}
      />

      {/* ✅ TIME */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        required
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      {/* ✅ GUESTS */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        required
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />

      {/* ✅ OCCASION */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        required
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      {/* ✅ BOTÓN DESACTIVADO */}
      <button type="submit" className="btn" disabled={!isValid}>
        Make Your reservation
      </button>
    </form>
  );
}
