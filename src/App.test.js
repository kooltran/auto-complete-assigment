import React from "react";
import renderer from "react-test-renderer";
import App from "./App";
// import { render, fireEvent, waitFor, screen } from "@testing-library/react";

test("should render MyAutoComplete correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
