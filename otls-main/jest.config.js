const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/database/(.*)$": "<rootDir>/database/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
    "^@/styles/(.*)$": "<rootDir>/styles/$1",
    "^@/utils/(.*)$": "<rootDir>/utils/$1",
    "^@/modules/(.*)$": "<rootDir>/modules/$1",
  },
  testEnvironment: "jest-environment-jsdom",

  transformIgnorePatterns: [
    // Ignores all node_modules except @credasinc.
    // @credasinc has to be transformed because it is not transpiled before publication.
    "/node_modules/(?!(@credasinc)/)",
  ],
};

module.exports = async () => {
  const asynConfigFunction = createJestConfig(customJestConfig);
  const config = await asynConfigFunction();

  // Remove "node_modules" from "transformIgnorePatterns".
  // Specifying transformIgnorePatterns in customJestConfig does not replace the defaults, it adds to them.
  // https://github.com/vercel/next.js/discussions/31152#discussioncomment-1697047
  config.transformIgnorePatterns = config.transformIgnorePatterns.filter(
    (pattern) => pattern !== "/node_modules/"
  );

  return config;
};
