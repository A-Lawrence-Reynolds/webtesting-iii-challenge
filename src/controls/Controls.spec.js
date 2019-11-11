// Test away!
import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import Controls from "./Controls";

test("Control panel rendering correctly", () => {
  expect(render(<Controls />)).toMatchSnapshot();
});

const { getByText } = render(<Controls />);

const button = getByText(/Close Gate/i);

// test("its working ", async () => {
//   const { getByText, findByText } = render(<Controls />);

//   const button = getByText(/Close Gate/i);
//   fireEvent.click(button);
//   await wait(() => expect(findByText(/open gate/i)));
// });
// unsure on how to make the onclick work?? more research needed //
