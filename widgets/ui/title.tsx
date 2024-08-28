import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

interface Props {
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Title: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
  tag = "h2",
}) => {
  switch (tag) {
    case "h1":
      return <h1 className={cn("font-forum", className)}>{children}</h1>;

    case "h2":
      return (
        <h2 className={cn("text-blue text-[40px] leading-[100%]", className)}>
          {children}
        </h2>
      );
  }
};
