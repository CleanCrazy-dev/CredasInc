import Card from "@/components/Card";
import { SiteHeader } from "@/components/SiteHeader";
import { cleanup, render, screen } from "@testing-library/react";
import { useSession } from "next-auth/react";
import type { Session } from "next-auth/core/types";

jest.mock("next-auth/react");
const mockUseSession = useSession as jest.MockedFunction<typeof useSession>;

const goodSession: Session = {
  user: {
    email: "person@example.com",
    name: "Per Son",
  },
  expires: "",
};

afterEach(cleanup);

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

describe("Site Header", () => {
  it("should render site header", () => {
    mockUseSession.mockReturnValueOnce({
      data: goodSession,
      status: "authenticated",
    });
    render(<SiteHeader />);
    expect(screen.getByText("Brand")).toBeInTheDocument();
  });
});
