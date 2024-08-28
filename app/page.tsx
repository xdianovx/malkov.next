import { Container } from "@/widgets/components";
import {
  ClientReviews,
  Doctors,
  Faq,
  Form,
  Hero,
  Map,
  Services,
} from "@/widgets/sections";
import { News } from "@/widgets/sections/news/news";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Doctors />
      <ClientReviews />
      <Map />
      <News />
      <Form />
      <Faq />
    </>
  );
}
