/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
import Event from "@/components/Summary/Event";

import { render, screen } from "@testing-library/react";

describe("Summary Events", () => {
  it("should render simple events", () => {
    render(<Event name="Test Event" value="this is test" />);
    expect(screen.getByText("Test Event")).toBeInTheDocument();
    expect(screen.getByText("this is test")).toBeInTheDocument();
  });

  it("should render events with text", () => {
    render(
      <Event
        name="Test Event"
        value="this is test"
        text={<span data-testid="test-text">Hello Test</span>}
      />
    );
    expect(screen.getByTestId("test-text")).toBeInTheDocument();
  });
});
