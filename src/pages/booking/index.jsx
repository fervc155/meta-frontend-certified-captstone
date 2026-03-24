import { useReducer } from "react";
import BookingForm from "./components/bookingForm";
import Hero from "./components/hero";

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  return state; // por ahora igual
};

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  return (
    <>
      <Hero />
      <section className="container booking-page">
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </section>
    </>
  );
}
