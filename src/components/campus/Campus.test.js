import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Campus from "./Campus";

describe("campus section", () => {
  test("should have title", () => {
    render(<Campus />);
    const element = screen.getByText("Watch Campus Life Video Tour");
    expect(element).toBeInTheDocument();
  });
  test("should exist icon", () => {
    render(<Campus />);
    const element = screen.getByTestId("Play Icon");
    expect(element).toBeInTheDocument();
  });
});
