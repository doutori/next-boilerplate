import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { Props } from "./";

export default {
    component: Button,
} as Meta;

export const Default: Story<Props> = {
    // eslint-disable-next-line react/display-name
    render: (args) => <Button {...args}>ボタンです</Button>,
};

export const Primary: Story<Props> = {
    ...Default,
    args: {
        type: "primary",
    },
};

export const Secondary: Story<Props> = {
    ...Default,
    args: {
        type: "secondary",
    },
};
