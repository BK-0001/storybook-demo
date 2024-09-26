import { ButtonHTMLAttributes } from "react";
import "./button.scss";

export const colors = ["primary", "secondary", "accent"] as const;
type ColorType = (typeof colors)[number];

export const variants = ["default", "outlined"] as const;
type VariantType = (typeof variants)[number];

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "color"
> & {
  color?: ColorType;
  variant: VariantType;
};

const BASE_CLASS = "ds-button";

export default function Button({
  className,
  color = "primary",
  children,
  variant = "default",
  ...rest
}: ButtonProps) {
  const classes = [
    BASE_CLASS,
    `${BASE_CLASS}--${color}`,
    `${BASE_CLASS}--${variant}`,
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
