import Switch from "@/components/Form/Switch";
import { fireEvent, render, screen } from "@testing-library/react";

type IContainer = HTMLElement | any;

describe("Form Switch", () => {
  it("should render checkbox input", () => {
    render(<Switch checked={false} name="test-switch" />);
    expect(screen.getByTestId("switch-input")).toBeInTheDocument();
    expect(screen.getByTestId("switch-slider")).toBeInTheDocument();
    expect(screen.getByTestId("switch-input")).toHaveAttribute(
      "name",
      "test-switch"
    );
  });

  it("should check the custom checkbox values", () => {
    render(<Switch checked={false} name="test-switch" />);
    const switchTest: IContainer = screen.getByTestId("switch-input");
    expect(switchTest.checked).toEqual(false);
    fireEvent.click(switchTest);
    expect(switchTest.checked).toEqual(true);
    fireEvent.click(switchTest);
    expect(switchTest.checked).toEqual(false);
  });
});
