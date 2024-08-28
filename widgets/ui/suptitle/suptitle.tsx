import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export const Suptitle: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn(className, "text-gold font-medium uppercase text-sm ")}>
      {children}
    </div>
  );
};
