/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
import PageNav from "@/components/PageNav/PageNav";
import { render, screen } from "@testing-library/react";

const navs = [
  {
    label: "Home",
    url: "/",
  },
];
describe("page Nav Link", () => {
  it("should render link with children", () => {
    render(<PageNav links={[]} />);
    expect(screen.getByTestId("page-link")).toBeInTheDocument();
  });

  it("should render all navs", () => {
    render(<PageNav links={navs} />);
    expect(screen.getAllByTestId("list-link").length).toBe(2);
  });
});
