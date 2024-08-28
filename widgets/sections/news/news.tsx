import { cn } from "@/lib/utils";
import { Container } from "@/widgets/components";
import { Title } from "@/widgets/ui";
import React from "react";

interface Props {
  className?: string;
}

export const News: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("mt-[200px]", className)}>
      <Container>
        <Title tag="h2">Наши статьи и новости</Title>
      </Container>
    </section>
  );
};
