import { render, screen } from "@testing-library/react";
import BookingForm from "../components/bookingForm";
import { initializeTimes, updateTimes } from "../index";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
  Link: ({ children }) => children,
}));

test("renders BookingForm label", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  expect(screen.getByText("Choose date")).toBeInTheDocument();
});

test("initializeTimes returns times", () => {
  const result = initializeTimes();
  expect(result.length).toBeGreaterThan(0);
});

test("updateTimes returns new times", () => {
  const state = ["17:00", "18:00"];

  const result = updateTimes(state, {
    type: "UPDATE_TIMES",
    date: "2026-01-01",
  });

  expect(result.length).toBeGreaterThan(0);
});
