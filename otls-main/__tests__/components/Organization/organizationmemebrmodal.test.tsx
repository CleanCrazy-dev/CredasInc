/* eslint-disable testing-library/prefer-presence-queries */
import OrganizationMemberModal from "@/components/organization-member-modal";
import { render, screen } from "@testing-library/react";

describe("Organization Member Modal", () => {
  it("should not show modal with title", () => {
    render(
      <OrganizationMemberModal
        showModal={false}
        handleClose={function () {
          throw new Error("Function not implemented.");
        }}
        edit={false}
      />
    );
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
  });

  it("should show modal with title", () => {
    render(
      <OrganizationMemberModal
        showModal={true}
        handleClose={function () {
          throw new Error("Function not implemented.");
        }}
        edit={false}
      />
    );
    expect(screen.getByText("New Member")).toBeInTheDocument();
  });

  it("should show test as title when edit is enable", () => {
    render(
      <OrganizationMemberModal
        showModal={true}
        handleClose={function () {
          throw new Error("Function not implemented.");
        }}
        member={{ name: "Test" }}
        edit={true}
      />
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("should have following tags", () => {
    render(
      <OrganizationMemberModal
        showModal={true}
        handleClose={function () {
          throw new Error("Function not implemented.");
        }}
        edit={false}
      />
    );
    expect(screen.getByTestId("regions")).toBeInTheDocument();
    expect(screen.getByTestId("upload-button")).toBeInTheDocument();
  });
});
