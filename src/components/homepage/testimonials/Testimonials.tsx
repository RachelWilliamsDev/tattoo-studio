"use client";
import Container from "@/components/global/Container";
import Heading from "@/components/global/Heading";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { testimonials as clients } from "@/constants";
import useIsLgScreen from "@/hooks/useIsLgScreen";
import { useCallback, useEffect, useState } from "react";
import ArrowIcon from "../../../../public/assets/icons/arrow";
import Client from "../../../../public/assets/testimonials/Octagon";

const useCarousel = (initialTestimonials: TestimonialProps[]) => {
  const [testimonials, setTestimonials] =
    useState<TestimonialProps[]>(initialTestimonials);

  const shiftTestimonials = useCallback((direction: "left" | "right") => {
    setTestimonials((prevTestimonials) => {
      const updatedTestimonials = [...prevTestimonials];
      if (direction === "left") {
        const shiftedClient = updatedTestimonials.shift();
        if (shiftedClient) updatedTestimonials.push(shiftedClient);
      } else {
        const shiftedClient = updatedTestimonials.pop();
        if (shiftedClient) updatedTestimonials.unshift(shiftedClient);
      }
      return updatedTestimonials;
    });
  }, []);

  const reorderTestimonials = useCallback(
    (clickedClient: TestimonialProps, isLgScreen: boolean) => {
      setTestimonials((prevTestimonials) => {
        const index = prevTestimonials.findIndex(
          (client) => client.name === clickedClient.name
        );
        if (index !== -1) {
          const newTestimonials = [
            ...prevTestimonials.slice(index),
            ...prevTestimonials.slice(0, index),
          ];

          const activeIndex = isLgScreen
            ? Math.floor(newTestimonials.length / 2) + 1
            : 0;
          const leftPart = newTestimonials.slice(0, activeIndex);
          const rightPart = newTestimonials.slice(activeIndex);

          return [...rightPart, ...leftPart];
        }
        return prevTestimonials;
      });
    },
    []
  );

  return { testimonials, shiftTestimonials, reorderTestimonials };
};

const Testimonials = () => {
  const { testimonials, shiftTestimonials, reorderTestimonials } =
    useCarousel(clients);

  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLg = useIsLgScreen();

  useEffect(() => {
    setIsClient(true);
    setActiveIndex(isLg ? 2 : 0);
  }, [isLg]);

  if (!isClient) return null;

  return (
    <section className="relative w-full h-full bg-testimonials bg-cover bg-center py-10 md:py-20">
      <Container>
        <Heading title="What Clients Say?" />
        <div className="flex flex-col justify-center items-center">
          <div className="flex space-x-4 overflow-x-scroll sm:overflow-x-visible ml-6 sm:ml-0 w-full sm:w-auto p-2 sm:p-0">
            {testimonials.map((client, i) => (
              <div
                key={client.name}
                onClick={() => reorderTestimonials(client, isLg)}
                className={`cursor-pointer text-center hover:scale-${
                  i === activeIndex ? "110" : "105"
                } transition-transform duration-300`}
              >
                <Client
                  id={i.toString()}
                  src={client.image}
                  width={
                    i === activeIndex
                      ? isLg
                        ? "300"
                        : "120"
                      : isLg
                      ? "200"
                      : "80"
                  }
                  height="auto"
                  animateStroke={i === activeIndex}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-row lg:space-x-[52px]">
            <Button
              size="icon"
              onClick={() => shiftTestimonials("left")}
              className="flex-shrink-0 hidden lg:flex"
            >
              <ArrowIcon />
            </Button>
            <div className="rounded-2xl bg-background-darker px-6 py-8 lg:p-[52px] space-y-8 mt-8 w-full xl:min-w-[1000px] max-w-[1000px]">
              <Text font="angel" size="xl" className="tracking-[-2%]">
                {testimonials[activeIndex].name}
              </Text>
              <Text weight="medium" className="tracking-[-2%] leading-[150%]">
                {testimonials[activeIndex].body}
              </Text>
            </div>
            <Button
              size="icon"
              onClick={() => shiftTestimonials("right")}
              className="rotate-180 flex-shrink-0 hidden lg:flex"
            >
              <ArrowIcon />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
