import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./";

describe("Atoms/Button", () => {
    it("has correct button text", () => {
        render(<Button>ボタンです</Button>);

        const button = screen.getByText("ボタンです");
        expect(button).toBeTruthy();
        expect(button).toHaveClass("button", "primary");
    });
});
