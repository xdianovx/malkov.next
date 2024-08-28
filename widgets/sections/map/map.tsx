import { cn } from "@/lib/utils";
import { Container } from "@/widgets/components";
import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
}

export const Map: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("", className)}>
      <Image src={""} alt={""} />
      <Container></Container>
    </section>
  );
};
