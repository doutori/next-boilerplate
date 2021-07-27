module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: ".",
    },
    extends: [
        "next",
        "next/core-web-vitals",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:cypress/recommended",
        "plugin:testing-library/react",
        "prettier",
    ],
    rules: {
        "react/prop-types": "off",
    },
};
