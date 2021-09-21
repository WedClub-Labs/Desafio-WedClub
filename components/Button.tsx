import { AriaButtonProps } from "@react-types/button";
import classNames from "classnames";
import { useButton } from "@react-aria/button";
import { ComponentType, CSSProperties, ReactNode, useRef } from "react";
import Link from "next/link";

const ButtonComponent = (props: any) => <button {...props} />;

export type ButtonProps = {
  isDisabled?: boolean;
  size?: "sm" | "md" | "lg";
  isFull?: boolean;
  variant?: "filled" | "outlined" | "text";
  children: ReactNode;
  action?: "primary" | "negative";
  to?: string;
} & AriaButtonProps<"button">;

function Button({
  children,
  variant = "filled",
  action = "primary",
  size = "md",
  href,
  ...props
}: ButtonProps) {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);

  const Component = href ? Link : ButtonComponent;

  return (
    <Component
      {...buttonProps}
      className={classNames(
        "rounded-sm inline-flex items-center gap-2 transition-colors",
        props.isFull ? "w-full" : "min-w-btn",
        {
          "h-6 px-2": size === "sm",
          "h-8 px-4": size === "md",

          "opacity-50 pointer-events-none": props.isDisabled,

          "border-primary-500 border":
            action === "primary" && variant !== "text",
          "bg-primary text-white hover:bg-primary-700":
            variant === "filled" && action === "primary",
          "bg-white text-primary-500 hover:bg-primary-100":
            variant === "outlined" && action === "primary",

          "hover:bg-primary font-bold": variant === "text",

          "border-red-500 border": action === "negative" && variant !== "text",
          "bg-red-500 text-white hover:bg-red-700":
            variant === "filled" && action === "negative",
          "bg-white text-red-500 hover:bg-red-100":
            variant === "outlined" && action === "negative",
        }
      )}
      href={href}
    >
      <span className="flex-grow flex justify-center items-center gap-2 text-xs">
        {children}
      </span>
    </Component>
  );
}

export default Button;
