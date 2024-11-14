import "@testing-library/jest-dom";
const { render, screen } = require("@testing-library/react");
const { default: Breadcrumb } = require("./Breadcrumb");

test("testing breadcrumb", () => {
  render(<Breadcrumb title={"Hello world"} />);
  const breadcrumbTitle = screen.getByText("Hello world");
  expect(breadcrumbTitle).toBeInTheDocument();
});
