import ProgressIndicator from "@/components/ProgressIndicator";
import { render, screen } from "@testing-library/react";

describe("Progress Indicator", () => {
  it("should render progress indicator", () => {
    render(<ProgressIndicator value={0} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("should have attributes", () => {
    render(<ProgressIndicator value={0} />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toBeInTheDocument();
    expect(progress).toHaveAttribute("aria-valuenow", "0");
    expect(progress).toHaveAttribute("style", "width: 0%;");
  });

  it("should have attributes", () => {
    render(<ProgressIndicator value={30} />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toBeInTheDocument();
    expect(progress).toHaveAttribute("aria-valuenow", "30");
    expect(progress).toHaveAttribute("style", "width: 30%;");
  });
});
