/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
import Summary from "@/components/Summary/Summary";

import { render, screen } from "@testing-library/react";

describe("Summary Events", () => {
  it("should render sumary events", () => {
    render(
      <Summary
        events={[
          {
            name: "Test Event",
            value: "this is test",
          },
        ]}
      />
    );
    expect(screen.getAllByTestId("summary-events").length).toBe(1);
  });

  it("should render sectionTitle", () => {
    render(<Summary events={[]} sectionTitle="Test Summary" />);
    expect(screen.getByText("Test Summary")).toBeInTheDocument();
  });
});
