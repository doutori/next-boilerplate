import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Button.stories";

const { Primary, Secondary } = composeStories(stories);

describe("Atoms/Button", () => {
    it("has correct primary button", () => {
        render(<Primary />);

        const button = screen.getByText("ボタンです");
        expect(button).toBeTruthy();
        expect(button).toHaveClass("button", "primary");
    });

    it("has correct secondary button", () => {
        render(<Secondary />);

        const button = screen.getByText("ボタンです");
        expect(button).toBeTruthy();
        expect(button).toHaveClass("button", "secondary");
    });
});
