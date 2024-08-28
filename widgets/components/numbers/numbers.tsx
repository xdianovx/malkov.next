import { cn } from "@/lib/utils";
import React from "react";
import { NumberItem } from "./number-item";

interface Props {
  className?: string;
}

export const Numbers: React.FC<Props> = ({ className }) => {
  const data = [
    {
      id: 1,
      number: "1 763",
      text: "Довольных клиента",
    },
    {
      id: 2,
      number: "7%",
      text: "Средняя разница в цене",
    },
    {
      id: 3,
      number: "12 лет",
      text: "Опыта",
    },
    {
      id: 4,
      number: "1 763",
      text: "Довольных клиента",
    },
  ];
  return (
    <div className={cn(className, "flex flex-col gap-5")}>
      <div className="w-full h-[1px] bg-gold"></div>

      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <NumberItem title={item.number} key={item.id} text={item.text} />
        ))}
      </div>

      <div className="w-full h-[1px] bg-gold"></div>
    </div>
  );
};
