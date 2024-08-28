import { cn } from "@/lib/utils";
import { Container } from "@/widgets/components";
import { Title } from "@/widgets/ui";
import React from "react";

interface Props {
  className?: string;
}

export const Form: React.FC<Props> = ({ className }) => {
  return (
    <section
      className={cn(
        "mt-[200px] relative overflow-hidden  bg-[#ECE0CE] py-16 ",
        className
      )}
    >
      <div className="absolute bg-[#C1995B] rounded-full w-[1554px] h-[1554px] -left-[1160px] -top-[900px]"></div>
      <Container>
        <div className="flex items-center justify-center mx-auto relative gap-[140px] z-10">
          <div className="flex flex-col max-w-[468px]  justify-center w-full">
            <Title tag="h2">Запишитесь на первое посещение бесплатно</Title>
            <p className="mt-4 text-gray-text">
              Составим план лечения и сделаем снимок, надо придумать более
              длинный текст, с более понятными преимуществами.
            </p>
          </div>

          <div className="max-w-[348px]">Форма</div>
        </div>
      </Container>
      <div className="absolute bg-[#C1995B] rounded-full w-[1554px] h-[1554px] -right-[1100px] -top-[0]"></div>
    </section>
  );
};
