import { render, screen } from "@testing-library/react";
import BookingForm from "./components/bookingForm";
import { initializeTimes, updateTimes } from "../index";

// ✅ 1. Test: renderiza texto del formulario
test("renders BookingForm label", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);

  const element = screen.getByText("Choose date");

  expect(element).toBeInTheDocument();
});

// ✅ 2. Test: initializeTimes devuelve horarios correctos
test("initializeTimes returns correct times", () => {
  const result = initializeTimes();

  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

// ✅ 3. Test: updateTimes regresa el mismo estado
test("updateTimes returns same state", () => {
  const state = ["17:00", "18:00"];

  const result = updateTimes(state, { type: "UPDATE_TIMES" });

  expect(result).toEqual(state);
});
