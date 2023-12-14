import { ComponentProps } from "react";
import clsx from "clsx";

interface BoxProps extends ComponentProps<"div"> {}

export const Box = ({ className, ...props }: BoxProps) => (
  <div className={clsx("flex", className)} {...props} />
);
