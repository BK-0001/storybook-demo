import { Meta, StoryObj } from "@storybook/react";
import { MouseEvent, useState } from "react";
import Button, { ButtonProps, colors, variants } from "./button";

const meta = {
  title: "DESIGN SYSTEM/core/button",
  component: Button,
  args: {
    children: "Click me!!!",
    disabled: false,
    color: "primary",
    variant: "default"
  },
  argTypes: {
    color: {
      control: "radio",
      options: colors
    },
    variant: {
      control: "radio",
      options: variants
    }
  },
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const primary = {} satisfies Story;

export const secondary = {
  args: {
    color: "secondary"
  }
} satisfies Story;

export const accent = {
  args: {
    color: "accent"
  }
} satisfies Story;

export const disabled = {
  args: { disabled: true }
} satisfies Story;

export const outlined = {
  args: {
    variant: "outlined"
  }
} satisfies Story;

const ButtonWithHook = ({ onClick, ...rest }: ButtonProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    alert("button clicked");
    onClick?.(event);
    setIsClicked(true);
  };

  return (
    <>
      <p>button clicked: {isClicked ? "Yes" : "No"}</p>
      <Button onClick={handleClick} {...rest} />;
    </>
  );
};

export const behavior = {
  args: {},
  render: (args) => <ButtonWithHook {...args} />
} satisfies Story;
