import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/testing-react";
import * as stories from "./Button.stories";

const Primary = composeStory(stories.Primary, stories.default);
const Secondary = composeStory(stories.Secondary, stories.default);

describe("Atoms/Button", () => {
    it("has correct primary button", () => {
        render(<Primary />);

        const button = screen.getByText("Primary Button");
        expect(button).toBeTruthy();
        expect(button).toHaveClass("button", "primary");
    });

    it("has correct secondary button", () => {
        render(<Secondary />);

        const button = screen.getByText("Secondary Button");
        expect(button).toBeTruthy();
        expect(button).toHaveClass("button", "secondary");
    });
});
