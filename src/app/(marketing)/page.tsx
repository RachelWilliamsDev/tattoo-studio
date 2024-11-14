import Wrapper from "@/components/global/wrapper";
import Header from "@/components/homepage/header/header";

export default function Home() {
  return (
    <section className="w-full relative flex items-center justify-center flex-col">
      <Wrapper>
        <Header />
      </Wrapper>
    </section>
  );
}
