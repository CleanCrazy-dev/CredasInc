/* eslint-disable testing-library/no-container */
import Checkbox from "@/components/Checkbox";
import { fireEvent, render, screen } from "@testing-library/react";

type IContainer = HTMLElement | any;

describe("Checkbox", () => {
  it("should render checkbox input", () => {
    render(<Checkbox />);
    expect(screen.getByTestId("checkbox-simple")).toBeInTheDocument();
  });

  it("should check the custom checkbox values", () => {
    render(<Checkbox />);
    const checkbox: IContainer = screen.getByTestId("checkbox-simple");
    expect(checkbox.checked).toEqual(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
  });

  it("should render custom classname", () => {
    const classname = "test-class";
    const { container }: IContainer = render(
      <Checkbox className={classname} />
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild.classList.contains(classname)).toBe(true);
  });

  it("should display custom svg icon", () => {
    render(<Checkbox />);
    expect(screen.getByTestId("checkbox-custom-svg")).toBeInTheDocument();
  });
});
