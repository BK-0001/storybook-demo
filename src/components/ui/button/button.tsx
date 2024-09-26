import { ButtonHTMLAttributes } from "react";
import "./button.scss";

export const colors = ["primary", "secondary", "accent"] as const;
type ColorType = (typeof colors)[number];

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> & {
  color?: ColorType;
};

const BASE_CLASS = "ds-button";

export default function Button({
  className,
  color = "primary",
  children,
  ...rest
}: Props) {
  const classes = [BASE_CLASS, `${BASE_CLASS}--${color}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
