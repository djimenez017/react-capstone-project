import React from "react";
import { render, screen } from "@testing-library/react";
import Reservation from "./BookingPage";

test('renders the "Reservation" heading', () => {
  render(<Reservation />);
  const headingElement = screen.getByRole("heading", { level: 2 });
  expect(headingElement).toBeInTheDocument();
});
