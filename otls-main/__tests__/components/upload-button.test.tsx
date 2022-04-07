/* eslint-disable react/no-children-prop */
import UploadButton from "@/components/Upload-button";
import { render, screen } from "@testing-library/react";

describe("Upload Button", () => {
  it("should render upload button", () => {
    render(
      <UploadButton children={<span data-testid="upload-label">upload</span>} />
    );
    expect(screen.getByTestId("upload-button")).toBeInTheDocument();
    expect(screen.getByTestId("upload-field")).toBeInTheDocument();
    expect(screen.getByTestId("upload-label")).toBeInTheDocument();
  });

  it("should render input field", () => {
    render(
      <UploadButton children={<span data-testid="upload-label">upload</span>} />
    );
    const uploadField = screen.getByTestId("upload-field");
    expect(uploadField).toBeInTheDocument();
    expect(uploadField).toHaveAttribute("type", "file");
  });
});
