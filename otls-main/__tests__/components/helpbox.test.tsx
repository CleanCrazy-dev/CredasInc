/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
import UserAvatar from "@/components/Avatar";
import HelpBox from "@/components/HelpBox/HelpBox";
import { render, screen } from "@testing-library/react";

describe("Helpbox", () => {
  beforeEach(() => {
    render(
      <HelpBox
        title="Test Help"
        description="lorem ipsum dolor sit amet"
        linkLabel="Test Link"
        linkUrl="https://google.com"
      />
    );
  });

  it("should render helpbox", () => {
    const helpBox = screen.getByTestId("helpbox");
    expect(helpBox).toBeInTheDocument();
    expect(screen.getByText("Test Help")).toBeInTheDocument();
    expect(screen.getByText("lorem ipsum dolor sit amet")).toBeInTheDocument();
    expect(screen.getByText("Test Link")).toBeInTheDocument();
  });

  it("should have href attribute", () => {
    const link: any = screen.getByTestId("link");
    expect(link.closest("a")).toHaveAttribute("href", "https://google.com");
  });
});
