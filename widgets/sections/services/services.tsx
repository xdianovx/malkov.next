import { cn } from "@/lib/utils";
import { Container } from "@/widgets/components";
import { LinkButton, Title } from "@/widgets/ui";
import React from "react";
import { ServicesCard } from "./services-card";

interface Props {
  className?: string;
}

export const Services: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn(className, "mt-[200px]")}>
      <Container>
        <div className="flex items-end justify-between">
          <Title tag="h2">Наши услуги</Title>
          <LinkButton link="/">Все услуги</LinkButton>
        </div>

        <div className="mt-8 grid grid-cols-4 gap-4">
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>
      </Container>
    </section>
  );
};
