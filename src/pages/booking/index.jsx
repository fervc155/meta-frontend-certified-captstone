import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./components/bookingForm";
import Hero from "../../components/hero";
import { fetchAPI, submitAPI } from "../../api";

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
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);

    if (success) {
      navigate("/booking/confirmed");
    }
  };

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  return (
    <>
      <Hero
        title="Reserve a table"
        subtitle="Book your table now"
        cta="Make a reservation in our restaurant"
      />
      <section className="container booking-page">
        <div className="card text-center p-3">
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        </div>
      </section>
    </>
  );
}
