// Test away
import React from "react";
import Dashboard from "./Dashboard";
import { render } from "@testing-library/react";

test("Dashboard is rendering ", () => {
  expect(render(<Dashboard />)).toMatchSnapshot();
});
test("Its mocking me", () => {
  const mock = jest.fn();
  mock("smile");
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenLastCalledWith("smile");
  mock("frown");
  expect(mock).toHaveBeenLastCalledWith("frown");
  expect(mock).toHaveBeenCalledTimes(2);
});

test("its mocking me", () => {
  const mock = jest.fn();
  mock("smile");
  expect(mock).toHaveBeenCalledTimes(1);

  expect(mock).toHaveBeenCalled();
});
test("contains open", () => {
  const { getByText } = render(<Dashboard />);
  getByText(/open/i);
  getByText(/unlocked/i);
  //   getByText(/opn/i);
  // un comment above code to see that it fails testing //
});
