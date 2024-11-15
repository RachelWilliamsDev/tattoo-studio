import { logos } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";

const logoSection = () => {
  return (
    <div className="flex w-screen bg-mutedBackground backdrop-blur-[10px]">
      <Container className="flex justify-center items-center">
        <div className="flex flex-row flex-wrap gap-[29px] md:gap-[92.75px] items-center justify-center py-8 md:py-[70px]">
          {logos.map((logo) => (
            <Link
              href="#"
              key={logo.name}
              className="transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              <Image src={logo.image} alt={logo.name} width={146} height={48} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};
export default logoSection;
