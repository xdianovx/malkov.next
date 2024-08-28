import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

interface Props {
  className?: string;
  size?: "sm" | "md" | "lg";
  style?: "gold" | "black";
  outlined?: boolean;
  uppercase?: boolean;
}

export const Button: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
  outlined = false,
  style,
  uppercase,
  size = "md",
}) => {
  return (
    <button
      className={cn(
        "rounded-full border font-nunito  px-8 leading-[100%]",
        className,
        style === "black"
          ? "bg-black border-black text-white"
          : "bg-gold text-white",
        style === "gold" ? "bg-gold border-gold text-white" : "",
        outlined ? "border bg-transparent" : "",
        uppercase ? "uppercase" : "",
        size === "sm" ? "pt-[13px] pb-[11px]" : "",
        size === "md" ? "pt-[16px] pb-[14px]" : "",
        size === "lg" ? "py-4" : ""
      )}
    >
      {children}
    </button>
  );
};
