import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import Image from "next/image";

const RightSection = () => (
  <article className="flex-1 bg-background-darker rounded-2xl max-w-[500px] xl:max-w-auto">
    <div className="relative h-[323px] w-full overflow-hidden rounded-t-2xl">
      <Image
        src="/assets/company/man-doing-tattoo-tattoo-salon.png"
        layout="fill"
        objectFit="cover"
        alt="Man tattooing in a salon"
        loading="lazy"
      />
      <div className="absolute bg-gradient-to-t from-background-darker to-transparent z-10 h-[200px] w-full bottom-0" />
    </div>
    <div className="flex flex-col p-12 space-y-6 items-start">
      <Text font="angel" size="2xl" className="leading-none">
        Highest rated Tattoo Club in California.
      </Text>
      <Text size="sm" weight="medium">
        Don’t hesitate. No one has ever regretted their tattoos! Contact us now,
        and we’ll help you!
      </Text>
      <Button>CONTACT US NOW</Button>
    </div>
  </article>
);

export default RightSection;
