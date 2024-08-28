import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface Props {
  className?: string;
  link: string;
  style?: "accent" | "default";
}

export const LinkButton: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
  link,
  style = "default",
}) => {
  return (
    <Link
      className={cn(
        "bg-black text-white gap-3 rounded-full inline-flex items-center py-1 pr-1  pl-5",
        style === "accent" ? "bg-gold" : ""
      )}
      href={link}
    >
      <span>{children}</span>
      <div className="bg-white w-8 h-8 rounded-full"></div>
    </Link>
  );
};
