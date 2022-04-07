/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-presence-queries */
import PermissionModal from "@/components/permission-modal";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Permission Modal", () => {
  it("should not show modal", () => {
    render(<PermissionModal showModal={false} handleClose={jest.fn()} />);
    expect(
      screen.queryByTestId("permission-show-modal")
    ).not.toBeInTheDocument();
  });

  it("should show modal & shgould have title of", () => {
    render(<PermissionModal showModal={true} handleClose={jest.fn()} />);
    expect(screen.queryByTestId("permission-show-modal")).toBeInTheDocument();
    expect(screen.getByText("New Member Role")).toBeInTheDocument();
  });
});
