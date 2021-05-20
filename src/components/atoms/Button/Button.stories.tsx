import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { Props } from "./";

export default {
    title: "Components/Atoms/Button",
    component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { type: "primary", children: "Primary Button" };

export const Secondary = Template.bind({});
Secondary.args = { type: "secondary", children: "Secondary Button" };
