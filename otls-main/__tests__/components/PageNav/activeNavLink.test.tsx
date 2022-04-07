/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
import ActiveNavLink from "@/components/PageNav/ActiveNavLink";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
const push = jest.fn();
const href = "/account";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

describe("Admin nav link", () => {
  it("should render admin nav", () => {
    render(
      <ActiveNavLink href={href} activeClassName="active">
        <span data-testid="test">Test</span>
      </ActiveNavLink>
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });
});
