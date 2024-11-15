"use client";
import Container from "../../global/container";
import LogoSection from "../logoSection";
import BookVisitButton from "./bookVisitButton";
import HeaderText from "./headerText";
import Hero from "./hero";
import OpeningHours from "./openingHours";
const Header = () => {
  return (
    <header className="relative w-full h-full bg-header bg-cover bg-center space-y-20 md:space-y-0">
      <Container>
        <div className="flex flex-row justify-between h-full px-8 pt-[136px] md:pt-[213px]">
          <div className="flex flex-col items-start lg:w-1/2 space-y-16">
            <HeaderText />
            <BookVisitButton />
            <OpeningHours />
          </div>
          <Hero />
        </div>
      </Container>
      <LogoSection />
    </header>
  );
};
export default Header;
