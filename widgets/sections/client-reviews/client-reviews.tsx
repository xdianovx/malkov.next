import { cn } from "@/lib/utils";
import { Container } from "@/widgets/components";
import { LinkButton, Title } from "@/widgets/ui";
import React from "react";

interface Props {
  className?: string;
}

export const ClientReviews: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn(className, "mt-[200px]")}>
      <Container>
        <Title tag="h2">Отзывы пациентов</Title>
        <div className="flex items-end justify-between mt-1">
          <p className="w-1/2 text-gray-text">
            Текст про отзывы и о том, что нам важно получить обратную связь и
            стать лучше.
          </p>
          <LinkButton link="#">Оставить отзыв</LinkButton>
        </div>

        {/* Слайдер */}
        <div className="mt-10">
          ТУт сделать слайдер с отывами и карточку отзыва
        </div>
      </Container>
    </section>
  );
};
