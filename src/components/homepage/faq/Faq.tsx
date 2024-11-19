import Container from "@/components/global/Container";
import Heading from "@/components/global/Heading";
import Accordion from "@/components/ui/Accordion";
import { faq } from "@/constants";

const Faq = () => {
  return (
    <section className="relative w-full h-full bg-faq bg-cover bg-center py-10 md:py-20">
      <Container>
        <Heading title="F.A.Q." />
        <Accordion items={faq} />
      </Container>
    </section>
  );
};
export default Faq;
