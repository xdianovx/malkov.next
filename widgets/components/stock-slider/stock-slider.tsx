import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const StockSlider: React.FC<Props> = ({ className }) => {
  return <div className={cn(className, "")}>Сделать слайдер</div>;
};
