import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";

import { BrowserRouter } from "react-router-dom";
const MockToDoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

it("should render coorect amount of incomplete tasks", () => {
  render(<MockToDoFooter numberOfIncompleteTasks={5} />);
  const paraElement = screen.getByText(/5 tasks left/i);
  expect(paraElement).toBeInTheDocument();
});

it("should render task word instead of tasks when number of task is 1", () => {
  render(<MockToDoFooter numberOfIncompleteTasks={1} />);
  const paraElement = screen.getByText(/1 task left/i);
  expect(paraElement).toBeInTheDocument();
});

it("Visibility of element", () => {
  render(<MockToDoFooter numberOfIncompleteTasks={1} />);
  const paraElement = screen.getByText(/1 task left/i);
  expect(paraElement).toBeVisible();
});

it("contain HTML element", () => {
  render(<MockToDoFooter numberOfIncompleteTasks={1} />);
  const paraElement = screen.getByText(/1 task left/i);
  expect(paraElement).not.toContainHTML("h3");
});
