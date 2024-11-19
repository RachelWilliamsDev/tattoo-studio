import Wrapper from "@/components/global/Wrapper";
import Contact from "@/components/homepage/contact/Contact";
import Header from "@/components/homepage/header/Header";
import Testimonials from "@/components/homepage/testimonials/Testimonials";

export default function Home() {
  return (
    <section className="w-full relative flex items-center justify-center flex-col space-y-40">
      <Wrapper>
        <Header />
        <Contact />
        <Testimonials />
      </Wrapper>
    </section>
  );
}
