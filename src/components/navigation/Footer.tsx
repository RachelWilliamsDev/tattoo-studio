import { navigation } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Instagram from "../../../public/assets/socials/instagram";
import Twitter from "../../../public/assets/socials/twitter";
import Youtube from "../../../public/assets/socials/youtube";
import Container from "../global/Container";
import Subscribe from "../homepage/subscribe/subscribe";
import { Text } from "../ui/Text";

const Footer = () => {
  return (
    <footer className="lg:relative w-full h-full bg-footer bg-cover bg-center pt-20 lg:pt-[186px]">
      <Subscribe />
      <div className="bg-background-darker w-full h-full pt-8 pb-10 md:pt-[244px] md:pb-[52px]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-7 w-full pb-16">
            <div className="grid col-span-2 lg:items-center z-50">
              <Link href="/" className="w-[70px] h-[70px]">
                <Image
                  src="/assets/company/Star.svg"
                  width={70}
                  height={70}
                  alt="Tattoo Studio Logo"
                />
              </Link>
            </div>
            <div className="grid col-span-3">
              <div className="flex flex-col lg:flex-row gap-10 lg:space-x-[164px]">
                <ul className="flex flex-col border-l-4 border-l-primary pl-[52px] space-y-[34px] z-50">
                  {navigation.slice(0, 3).map((item) => (
                    <li
                      key={item.name}
                      className="flex flex-shrink-0 cursor-pointer"
                    >
                      <Link href={item.href}>
                        <Text className="uppercase" size="sm">
                          {item.name}
                        </Text>
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col border-l-4 border-l-primary pl-[52px] space-y-[34px]">
                  {navigation.slice(3, 6).map((item) => (
                    <li key={item.name} className="flex flex-shrink-0">
                      <Link href={item.href}>
                        <Text>{item.name}</Text>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid col-span-2 lg:justify-end lg:items-center">
              <div className="flex flex-row space-x-8 z-50">
                <Link href="#">
                  <Youtube />
                </Link>
                <Link href="#">
                  <Twitter />
                </Link>
                <Link href="#">
                  <Instagram />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between border-t-2 border-t-primary-muted pt-10 lg:pt-8 gap-10">
            <div className="flex flex-col lg:flex-row gap-8 lg:space-x-[52px] z-50">
              <Link href="#">
                <Text
                  size="sm"
                  weight="bold"
                  className="tracking-[8%] uppercase"
                >
                  TERMS & CONDITIONS
                </Text>
              </Link>
              <Link href="#">
                <Text
                  size="sm"
                  weight="bold"
                  className="tracking-[8%] uppercase"
                >
                  PRIVACY POLICY
                </Text>
              </Link>
            </div>
            <Text
              size="sm"
              weight="bold"
              className="tracking-[8%] uppercase z-50"
              color="muted"
            >
              &copy; {new Date().getFullYear()} Tattoo Studio. All rights
              reserved.
            </Text>
          </div>
        </Container>
      </div>
    </footer>
  );
};
export default Footer;
