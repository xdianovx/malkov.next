import { cn } from "@/lib/utils";
import { Container, Numbers, StockSlider } from "@/widgets/components";
import { Suptitle, Title } from "@/widgets/ui";
import React from "react";

interface Props {
  className?: string;
}

export const Hero: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn(className, "mt-[120px]")}>
      <Container>
        <div className="flex flex-col gap-4">
          <Suptitle>с заботой о вашем здоровье</Suptitle>

          <div className="flex items-end justify-between">
            <Title tag="h1" className="uppercase text-[88px] leading-[100%]">
              Стоматологическая <br /> клиника доктора <br /> малькова
            </Title>

            <p className="text-gray-text max-w-[348px]">
              Миссия клиники - честно создавать безупречные улыбки и вдохновлять
              вас улыбаться чаще!
            </p>
          </div>
        </div>

        <Numbers className="mt-5" />
        <StockSlider className="mt-5" />
      </Container>
    </section>
  );
};
