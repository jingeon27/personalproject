import clsx from "clsx";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export const Button = ({ className, ...props }: ButtonProps) => (
  <button className={clsx("p-[5px]", className)} {...props} />
);
