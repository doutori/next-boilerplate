/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
    clearMocks: true,
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.spec.json",
        },
    },
    moduleNameMapper: {
        "^~/(.*)$": "<rootDir>/src/$1",
    },
    preset: "ts-jest",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
    },
    testPathIgnorePatterns: [
        "<rootDir>/.next/",
        "<rootDir>/out/",
        "<rootDir>/node_modules/",
        "<rootDir>/dist/",
    ],
};
