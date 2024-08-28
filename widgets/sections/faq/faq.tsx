import { cn } from "@/lib/utils";
import { Container } from "@/widgets/components";
import { Button, Title } from "@/widgets/ui";
import React from "react";

interface Props {
  className?: string;
}

export const Faq: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("mt-[200px]", className)}>
      <Container>
        <div className="flex">
          <div className="max-w-[348px] w-full">
            <Title tag="h2">Часто задаваемые вопросы</Title>
            <div className="mt-8 flex flex-col gap-2 text-gray-text">
              <p>
                Если вы не нашли ответ на интересующий вас вопрос, вы можете
                оставить заявку.
              </p>

              <p>
                Специалист свяжется с вами в течении 2–х минут о
                проконсультирует вас.
              </p>
            </div>

            <Button uppercase className="mt-8 w-full">
              Задать вопрос
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
