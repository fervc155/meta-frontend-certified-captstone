import { useReducer } from "react";
import BookingForm from "./components/bookingForm";
import Hero from "./components/hero";
import { fetchAPI } from "../../api";

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    const date = new Date(action.date);
    return fetchAPI(date);
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
