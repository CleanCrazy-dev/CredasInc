/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
import CreateSessionForm from "@/components/Sessions/CreateSessionForm/CreateSessionForm";
import { render, screen } from "@testing-library/react";

describe("Create Session Form", () => {
  it("", () => {
    render(
      <CreateSessionForm
        organizerSelectOptions={[]}
        typeSelectOptions={[]}
        repeatSelectOptions={[]}
        timezoneSelectOptions={[]}
        locationStatesSelectOptions={[]}
      />
    );
    expect(screen.getAllByTestId("session-form").length).toBe(1);
  });
});
