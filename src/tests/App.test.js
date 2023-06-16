import { render } from "@testing-library/react";
import App from "../App.jsx";
import { describe, it, expect } from "jest-circus";

describe("App", () => {
  it("renders CircularProgress when isLoading is true", () => {
    // Arrange
    const { getByRole } = render(<App />);

    // Act
    const circularProgress = getByRole("progressbar");

    // Assert
    expect(circularProgress).toBeInTheDocument();
  });
});
