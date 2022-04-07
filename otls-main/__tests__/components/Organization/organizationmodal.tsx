/* eslint-disable testing-library/prefer-presence-queries */
import OrganizationModal from "@/components/organization-modal";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Organization Modal", () => {
  it("should not show modal", () => {
    render(
      <OrganizationModal
        showModal={false}
        handleClose={function () {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(screen.queryByTestId("org-modal")).not.toBeInTheDocument();
  });

  it("should show modal", () => {
    render(
      <OrganizationModal
        showModal={true}
        handleClose={function () {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(screen.queryByTestId("org-modal")).toBeInTheDocument();
    expect(screen.getByText("New organization")).toBeInTheDocument();
  });

  it("should have following tags", () => {
    render(
      <OrganizationModal
        showModal={true}
        handleClose={function () {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(screen.getByTestId("progress-bar")).toBeInTheDocument();
    expect(screen.getByTestId("step-button")).toBeInTheDocument();
  });

  it("should reset modal on click of cancel", () => {
    let handleClose = jest.fn();
    render(<OrganizationModal showModal={true} handleClose={handleClose} />);
    const cButton = screen.getByTestId("cancel-btn");
    fireEvent.click(cButton);
    expect(screen.queryByTestId("org-modal")).toBeInTheDocument();
  });
});
