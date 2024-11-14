import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("ContactForm", () => {
  test("testing  form", () => {
    render(<ContactForm />);
    const form = screen.getByText("contact form");
    expect(form).toBeInTheDocument();
  });

  test("checking  input field", () => {
    render(<ContactForm />);
    const input = screen.getAllByText(
      (_, element) => element.tagName.toLowerCase() === "input"
    );
    expect(input.length).toBe(3);
  });

  test("checking  textarea field", () => {
    render(<ContactForm />);
    const input = screen.getAllByText(
      (_, element) => element.tagName.toLowerCase() === "textarea"
    );

    expect(input.length).toBe(1);
  });

  test("has send button", () => {
    render(<ContactForm />);
    const input = screen.getAllByText(
      (_, element) =>
        element.tagName.toLowerCase() === "button" &&
        element.textContent.toLocaleLowerCase() === "send"
    );

    expect(input.length).toBe(1);
  });
});
