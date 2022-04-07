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

describe("Home", () => {
  it("renders a heading", () => {
    mockUseSession.mockReturnValueOnce({
      data: goodSession,
      status: "authenticated",
    });
  });
});
