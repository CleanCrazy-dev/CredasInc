/* eslint-disable testing-library/no-render-in-setup */
import UserAvatar from "@/components/Avatar";
import { render, screen } from "@testing-library/react";

describe("Avatar", () => {
  it("should display image", () => {
    render(<UserAvatar src="/public/Profile.jpeg" alt="user face" />);
    expect(screen.getByAltText("user face")).toBeInTheDocument();
  });

  it("should display image", () => {
    render(<UserAvatar src="/public/Profile.jpeg" />);
    expect(screen.getByAltText("user-avatar-img")).toBeInTheDocument();
  });
});
