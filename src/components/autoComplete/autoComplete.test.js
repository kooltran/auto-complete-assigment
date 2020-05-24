import React from "react";
import renderer from "react-test-renderer";
import MyAutoComplete from "./autoComplete";
// import { render, fireEvent, waitFor, screen } from "@testing-library/react";

test("should render MyAutoComplete correctly", () => {
  const tree = renderer.create(<MyAutoComplete />).toJSON();
  expect(tree).toMatchSnapshot();
});

// test("render autocomplete list", () => {
//   const onSearch = jest.fn();
//   const { getByRole } = render(<MyAutoComplete />);
//   const autoCompleteInput = getByRole("combobox");
//   fireEvent.change(autoCompleteInput, { target: { value: "abc" } });
//   expect(onSearch).toHaveBeenCalledTimes(1);
// });
