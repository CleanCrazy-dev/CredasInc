import React from "react";
import { render, screen } from "@testing-library/react";

import Sessions, {
  PENDING_COLUMNS,
  TABLE_DATA,
  UPCOMING_COLUMNS,
  SUMMARY_EVENTS,
} from "../../../pages/sessions/index";
import { Table } from "@/components/Table";

describe("Sessions", () => {
  it("should render heading", () => {
    const textToRender = "Sessions";
    render(<Sessions />);
    const text = screen.getByText(textToRender);
    expect(text).toBeInTheDocument();

    const addSessionButton = screen.getByTestId("add-session");
    expect(addSessionButton).toBeInTheDocument();
  });

  it("should render helpbox", () => {
    const textToRender = "Have questions?";
    render(<Sessions />);
    const text = screen.getByText(textToRender);
    expect(text).toBeInTheDocument();
  });

  it("should render My Summary", () => {
    const textToRender = "My Summary";
    render(<Sessions />);
    expect(screen.getByText(textToRender)).toBeInTheDocument();
    SUMMARY_EVENTS.map((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  it("should render pending columns", () => {
    render(<Sessions />);
    const textToRender = "Pending Approval";
    expect(screen.getByTestId("pending_columns")).toBeInTheDocument();
    expect(screen.getByTestId("upcomming_columns")).toBeInTheDocument();
    expect(screen.getByTestId("past_columns")).toBeInTheDocument();
  });
});

// render tables
describe("Render DataTables", () => {
  it("should render pending table", () => {
    render(<Table columnTitles={PENDING_COLUMNS} tableData={TABLE_DATA} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Session Date")).toBeInTheDocument();
    expect(screen.getByText("Submitted On")).toBeInTheDocument();
  });

  it("should render upcomming table", () => {
    render(<Table columnTitles={UPCOMING_COLUMNS} tableData={TABLE_DATA} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Region")).toBeInTheDocument();
    expect(screen.getByText("Invited")).toBeInTheDocument();
  });
});
