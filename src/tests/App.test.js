import { render } from "@testing-library/react";
import App from "../App.jsx";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

test("renders CircularProgress when isLoading is true", () => {
  // Arrange
  const { getByRole } = render(<App />);

  // Act
  const circularProgress = getByRole("progressbar");

  // Assert
  expect(circularProgress).toBeInTheDocument();
});
