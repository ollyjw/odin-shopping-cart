import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("App component", () => {
  it("renders Odin Project - Shopping Cart App", () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(<MemoryRouter><App /></MemoryRouter>);
    expect(container).toMatchSnapshot();
  });

  it("renders Olly's Shopping Cart App after button click", async () => {
    const user = userEvent.setup();

    render(<MemoryRouter><App /></MemoryRouter>);
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/Olly's Shopping Cart App/i);
  });
});
