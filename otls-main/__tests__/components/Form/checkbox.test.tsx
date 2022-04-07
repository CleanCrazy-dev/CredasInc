import Checkbox from "@/components/Form/Checkbox";
import { render, screen } from "@testing-library/react";

type IContainer = HTMLElement | any;

describe("Form Checkbox", () => {
  it("should render checkbox input", () => {
    render(<Checkbox checked={false} />);
    expect(screen.getByTestId("checkbox-form")).toBeInTheDocument();
  });

  it("should check the custom checkbox values", () => {
    render(<Checkbox checked={false} />);
    const checkbox: IContainer = screen.getByTestId("checkbox-form");
    expect(checkbox.checked).toEqual(false);
  });
});
