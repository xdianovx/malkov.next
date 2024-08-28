import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  title: string;
  text: string;
}

export const NumberItem: React.FC<Props> = ({ className, title, text }) => {
  return (
    <div className={cn(className, "")}>
      <p className="text-[72px] leading-[80%] text-blue font-forum">{title}</p>
      <p className="mt-1 font-light">{text}</p>
    </div>
  );
};
