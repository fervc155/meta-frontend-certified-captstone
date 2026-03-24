import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/bookingForm";

const mockProps = {
  availableTimes: ["17:00", "18:00"],
  dispatch: jest.fn(),
  submitForm: jest.fn(),
};

// ✅ 1. HTML5 VALIDATION

test("date input has required attribute", () => {
  render(<BookingForm {...mockProps} />);
  const dateInput = screen.getByLabelText("Choose date");

  expect(dateInput).toHaveAttribute("required");
});

test("time select has required attribute", () => {
  render(<BookingForm {...mockProps} />);
  const timeSelect = screen.getByLabelText("Choose time");

  expect(timeSelect).toHaveAttribute("required");
});

test("guests input has min and max", () => {
  render(<BookingForm {...mockProps} />);
  const guestsInput = screen.getByLabelText("Number of guests");

  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("occasion select has required attribute", () => {
  render(<BookingForm {...mockProps} />);
  const occasionSelect = screen.getByLabelText("Occasion");

  expect(occasionSelect).toHaveAttribute("required");
});

// ✅ 2. VALIDACIÓN CON REACT

test("submit button is disabled when form is invalid", () => {
  render(<BookingForm {...mockProps} />);
  const button = screen.getByRole("button");

  expect(button).toBeDisabled();
});

test("submit button is enabled when form is valid", () => {
  render(<BookingForm {...mockProps} />);

  fireEvent.change(screen.getByLabelText("Choose date"), {
    target: { value: "2026-01-01" },
  });

  fireEvent.change(screen.getByLabelText("Choose time"), {
    target: { value: "17:00" },
  });

  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: "2" },
  });

  const button = screen.getByRole("button");

  expect(button).not.toBeDisabled();
});

// ✅ 3. TEST SUBMIT

test("form submits when valid", () => {
  render(<BookingForm {...mockProps} />);

  fireEvent.change(screen.getByLabelText("Choose date"), {
    target: { value: "2026-01-01" },
  });

  fireEvent.change(screen.getByLabelText("Choose time"), {
    target: { value: "17:00" },
  });

  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: "2" },
  });

  const button = screen.getByRole("button");

  fireEvent.click(button);

  expect(mockProps.submitForm).toHaveBeenCalled();
});
