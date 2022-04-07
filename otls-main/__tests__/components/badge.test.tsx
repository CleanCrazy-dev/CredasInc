/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import Badge from "@/components/Badge/Badge";
import { cleanup, render, RenderOptions, screen } from "@testing-library/react";

afterEach(cleanup);
type IContainer = HTMLElement | any;

describe("Badge", () => {
  it("should display primary  badge", () => {
    const { container }: IContainer = render(
      <Badge label="Primary" type={"primary"} />
    );
    expect(screen.getByText("Primary")).toBeInTheDocument();
    expect(container.firstChild.classList.contains("otls_badge--primary")).toBe(
      true
    );
  });

  it("should display secondary  badge", () => {
    const { container }: IContainer = render(
      <Badge label="Secondary" type={"secondary"} />
    );
    expect(screen.getByText("Secondary")).toBeInTheDocument();
    expect(
      container.firstChild.classList.contains("otls_badge--secondary")
    ).toBe(true);
  });

  it("should have custom classnames", () => {
    const { container }: IContainer = render(
      <Badge label="Secondary" type={"secondary"} badgeClassName="test-class" />
    );
    expect(screen.getByText("Secondary")).toBeInTheDocument();
    expect(container.firstChild.classList.contains("test-class")).toBe(true);
  });
});
