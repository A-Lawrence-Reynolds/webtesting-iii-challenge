// Test away!
import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";

test("Display is rendering ", () => {
  expect(render(<Display />)).toMatchSnapshot();
});

test("contains open", () => {
  const { getByText } = render(<Display />);
  getByText(/open/i);
  getByText(/unlocked/i);
  //   getByText(/opn/i);
  // un comment above code to see that it fails testing //
});
