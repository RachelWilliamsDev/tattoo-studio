import Container from "@/components/global/Container";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import TattooCard from "./TattooCard";

const Contact = () => {
  return (
    <section className="relative w-full h-full bg-contact bg-cover bg-center bg-repeat-y py-20 md:py-40">
      <Container>
        <div className="relative max-w-[1520px] xl:max-h-[800px] flex flex-col xl:flex-row gap-y-8 items-center">
          <LeftSection />
          <div className="flex-1 w-full flex flex-col justify-center">
            <TattooCard image="/assets/company/monkey.png" text="$ 2800.00" />
            <div className="hidden xl:flex h-10 bg-background-darker -mx-1 my-4" />
            <TattooCard
              image="/assets/company/snake.png"
              text="$ 1500.00"
              hidden
            />
          </div>
          <RightSection />
          {/* Mobile Additional Card */}
          <div className="flex flex-1 w-full justify-center xl:hidden">
            <TattooCard image="/assets/company/snake.png" text="$ 1500.00" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
