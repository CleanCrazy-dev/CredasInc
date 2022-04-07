import Input from "@/components/Form/Input";
import { render, screen } from "@testing-library/react";
import { ChangeEvent } from "react";

jest.fn();

describe("Form Input", () => {
  it("should render input field", () => {
    render(
      <Input
        placeholder="Placeholder"
        name="input"
        value={""}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          console.log("e", e.target.value)
        }
      />
    );
    const inputEl = screen.getByTestId("input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
    expect(inputEl).toHaveAttribute("placeholder", "Placeholder");
    expect(inputEl).toHaveAttribute("name", "input");
  });

  it("should render input field as email", () => {
    render(
      <Input
        placeholder={""}
        name={""}
        type="email"
        value={""}
        onChange={jest.fn()}
      />
    );
    const inputEl = screen.getByTestId("input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });
});
