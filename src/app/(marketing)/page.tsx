import Wrapper from "@/components/global/Wrapper";
import Contact from "@/components/homepage/contact/Contact";
import Header from "@/components/homepage/header/Header";

export default function Home() {
  return (
    <section className="w-full relative flex items-center justify-center flex-col">
      <Wrapper>
        <Header />
        <Contact />
      </Wrapper>
    </section>
  );
}
