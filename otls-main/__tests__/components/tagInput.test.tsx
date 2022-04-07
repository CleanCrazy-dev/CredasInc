import TagsInput from "@/components/TagsInput";
import { render, screen } from "@testing-library/react";

describe("Tags Input", () => {
  it("should render custom class name", () => {
    render(<TagsInput className="test-class" />);
    expect(screen.getByTestId("tags-input")).toHaveClass("test-class");
  });

  it("should render readonly on false", () => {
    render(<TagsInput readonly={false} />);
    expect(screen.getByTestId("readonly-input")).toBeInTheDocument();
  });

  it("should render addBtn", () => {
    render(<TagsInput addBtn={true} />);
    expect(screen.getByTestId("addBtn")).toBeInTheDocument();
  });

  it("should render tagList", () => {
    render(<TagsInput tagList={["test", "case"]} />);
    expect(screen.getByTestId("taglist")).toBeInTheDocument();
  });
});
