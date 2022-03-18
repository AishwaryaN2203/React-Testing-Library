import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same text as passed into title prop", () => {
  render(<Header title="My header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

it("should render same role as passed", () => {
  render(<Header title="My header" />);
  const headingElement = screen.getByRole("heading", { name: "My header" });
  expect(headingElement).toBeInTheDocument();
});

it("get by title", () => {
  render(<Header title="My header" />);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

it("get by id", () => {
  render(<Header title="My header" />);
  const headingElement = screen.getByTestId("header-id");
  expect(headingElement).toBeInTheDocument();
  /* Have to use data-testId */
});

// FIND BY
// whenever we want await
it("Using find by", async () => {
  render(<Header title="My header" />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// Query By
// when we have a opposite condition to be tested
it("Using Query by", () => {
  render(<Header title="My header" />);
  const headingElement = screen.queryByText(/dog/i);
  expect(headingElement).not.toBeInTheDocument();
});

// all
it("get all by role", () => {
  render(<Header title="My header" />);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(2);
});
