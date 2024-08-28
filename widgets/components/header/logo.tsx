import Link from "next/link";
import React from "react";
import LogoPNG from "@/assets/logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <Link href="/" className={cn(className)}>
      <Image src={LogoPNG} alt="logo" />
    </Link>
  );
};
