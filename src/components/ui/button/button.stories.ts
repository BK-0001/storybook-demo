import { Meta, StoryObj } from "@storybook/react";
import Button, { colors } from "./button";

const meta = {
  title: "DESIGN SYSTEM/core/button",
  component: Button,
  args: {
    children: "Click me!!!",
    disabled: false,
    color: "primary"
  },
  argTypes: {
    color: {
      control: "radio",
      options: colors
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const storyOne = {} satisfies Story;
export const storyTwo = {} satisfies Story;
export const disabled = {
  args: { disabled: true }
} satisfies Story;
