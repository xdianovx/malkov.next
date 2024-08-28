import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export const ServicesCard: React.FC<Props> = ({ className }) => {
  return (
    <Link
      href={"/"}
      className={cn(className, "p-5 border border-gray-light rounded-sm")}
    >
      <h3 className="text-[20px] leading-[100%] text-blue">Протезирование</h3>
      <p className="mt-4 text-gray-text">
        Кратко и по делу описываем почему у нас. Можно в две строчки, но
        сохранив суть, даже можно в три если очень надо
      </p>
      <p className="mt-4 text-gold">от 7 800 руб.</p>
    </Link>
  );
};
