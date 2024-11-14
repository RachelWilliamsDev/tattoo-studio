"use client";
import Container from "../../global/container";
import BookVisitButton from "./bookVisitButton";
import HeaderText from "./headerText";
import Hero from "./hero";
import OpeningHours from "./openingHours";
const Header = () => {
  return (
    <header className="relative w-full h-full bg-header bg-cover bg-center">
      <Container>
        <div className="flex flex-row justify-between h-full px-8 py-[136px] md:py-[213px] ">
          <div className="flex flex-col items-start lg:w-1/2 space-y-16">
            <HeaderText />
            <BookVisitButton />
            <OpeningHours />
          </div>
          <Hero />
        </div>
      </Container>
    </header>
  );
};
export default Header;
