import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockLocalStorage = (() => {
  let store = {};
  return {
    getItem: (key) => store[key],
    setItem: (key, value) => (store[key] = value),
    clear: () => (store = {}),
  };
})();
Object.defineProperty(window, "localStorage", { value: mockLocalStorage });

test("submitting the form sets values in localStorage", () => {
  const { getByLabelText, getByText } = render(<BookingForm />);

  fireEvent.change(getByLabelText("Choose date"), {
    target: { value: "2023-09-18" },
  });
  fireEvent.change(getByLabelText("Choose time"), {
    target: { value: "18:00" },
  });
  fireEvent.change(getByLabelText("Number of guests"), {
    target: { value: "4" },
  });
  fireEvent.change(getByLabelText("Occasion"), {
    target: { value: "Anniversary" },
  });

  fireEvent.click(getByText("Make Your reservation"));

  expect(localStorage.getItem("date")).toBe("2023-09-18");
  expect(localStorage.getItem("time")).toBe("18:00");
  expect(localStorage.getItem("guests")).toBe("4");
  expect(localStorage.getItem("occassion")).toBe("Anniversary");
});
