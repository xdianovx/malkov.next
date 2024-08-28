import { cn } from "@/lib/utils";
import { Container } from "@/widgets/components";
import { LinkButton, Title } from "@/widgets/ui";
import React from "react";
import { DoctorCard } from "./doctor-card";

interface Props {
  className?: string;
}

export const Doctors: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn(className, "mt-[200px]")}>
      <Container>
        <Title>Нащи врачи и специалисты</Title>

        <div className="mt-1 flex items-end justify-between gap-4">
          <p className="text-gray-text max-w-[50%] w-full">
            Познакомьтесь с врачом бесплатно и получите в подарок снимок и план
            лечения.
          </p>

          <LinkButton link="/" style="accent">
            Все специалисты
          </LinkButton>
        </div>

        <div className="mt-10 grid grid-cols-4 gap-x-4 gap-y-8">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>
      </Container>
    </section>
  );
};
