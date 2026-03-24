import { useState, useEffect } from "react";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // ✅ obtener fecha de hoy (YYYY-MM-DD)
  const today = new Date().toISOString().split("T")[0];

  // ✅ VALIDACIÓN EN TIEMPO REAL
  useEffect(() => {
    const newErrors = {};

    if (!date) {
      newErrors.date = "Please select a date";
    } else if (date < today) {
      newErrors.date = "Date must be today or later";
    }

    if (!time) {
      newErrors.time = "Please select a time";
    }

    if (guests < 1 || guests > 10) {
      newErrors.guests = "Guests must be between 1 and 10";
    }

    if (!occasion) {
      newErrors.occasion = "Please select an occasion";
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  }, [date, time, guests, occasion, today]);

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
      {/* DATE */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        min={today} // 🔥 clave para HTML5
        onChange={(e) => {
          setDate(e.target.value);
          dispatch({ type: "UPDATE_TIMES", date: e.target.value });
        }}
        className={errors.date ? "input-error" : ""}
      />
      {errors.date && <p className="error">{errors.date}</p>}

      {/* TIME */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className={errors.time ? "input-error" : ""}
      >
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
      {errors.time && <p className="error">{errors.time}</p>}

      {/* GUESTS */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        className={errors.guests ? "input-error" : ""}
      />
      {errors.guests && <p className="error">{errors.guests}</p>}

      {/* OCCASION */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        className={errors.occasion ? "input-error" : ""}
      >
        <option value="">Select an occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      {errors.occasion && <p className="error">{errors.occasion}</p>}

      {/* BUTTON */}
      <button type="submit" className="btn" disabled={!isValid}>
        Make Your reservation
      </button>
    </form>
  );
}
