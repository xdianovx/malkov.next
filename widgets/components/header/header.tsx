import { Burger, Button } from "@/widgets/ui";
import { Container } from "../container";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="bg-black z-20 sticky top-0 text-white py-4 max-[1200px]:py-3 max-[768px]:py-2">
      <Container>
        <div className="flex items-center">
          <Logo />

          <div className="ml-auto flex gap-2">
            <Button
              className="max-[550px]:hidden"
              uppercase
              outlined
              size="sm"
              style="gold"
            >
              Связаться
            </Button>
            <Burger />
          </div>
        </div>
      </Container>
    </header>
  );
};
