import { useReducer } from "react";
import BookingForm from "./components/bookingForm";
import Hero from "./components/hero";

export const initializeTimes = () => {
  const today = new Date();
  return window.fetchAPI(today);
};
export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    const date = new Date(action.date);
    return window.fetchAPI(date);
  }

  return state;
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
