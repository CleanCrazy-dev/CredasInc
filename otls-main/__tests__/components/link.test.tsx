/* eslint-disable testing-library/no-node-access */
/* eslint-disable react/no-children-prop */
import Link from "@/components/Link";
import { render, screen } from "@testing-library/react";

const dummyHref = "https://google.com";

describe("Link", () => {
  it("should render link with children", () => {
    render(
      <Link
        href={dummyHref}
        content={<span data-testid="link-content">Google</span>}
      />
    );
    expect(screen.getByTestId("link")).toBeInTheDocument();
    expect(screen.getByTestId("link-content")).toBeInTheDocument();
  });

  it("should have href attribute", () => {
    render(
      <Link
        href={dummyHref}
        content={<span data-testid="link-content">Google</span>}
      />
    );
    const link: any = screen.getByTestId("link");
    expect(link.closest("a")).toHaveAttribute("href", dummyHref);
  });
});
