import "@testing-library/jest-dom";
const { render, screen } = require("@testing-library/react");
const { default: Content } = require("./Content");

describe("about content", () => {
  test("subtitle is exist", () => {
    const { getByText } = render(<Content />);
    const button = getByText(/About EduGood/i);
    expect(button).toBeInTheDocument();
  });
  test("title is exist", () => {
    const { getByText } = render(<Content />);
    const button = getByText("Welcome to Our Online Learning Center");
    expect(button).toBeInTheDocument();
  });
  test("button is exist", () => {
    const { getByText } = render(<Content />);
    const button = getByText(/Read More/i);
    expect(button).toBeInTheDocument();
  });
  test("text is short", () => {
    render(<Content />);
    const text = screen.getByText(
      (_, element) => element.id === "aboutContentText"
    );
    expect(text.textContent.length >= 100).toBeTruthy();
  });
});
