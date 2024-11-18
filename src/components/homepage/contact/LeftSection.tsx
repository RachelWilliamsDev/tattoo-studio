import { Text } from "@/components/ui/Text";
import Image from "next/image";

const LeftSection = () => (
  <article className="flex-1 bg-background-darker rounded-2xl relative flex flex-col items-center space-y-7 max-w-[500px] xl:max-w-auto">
    <Text font="angel" size="2xl" className="leading-none px-12 pt-12">
      Tailored Process will make you scream, but then happy!
    </Text>
    <Image
      src="/assets/dots-background.png"
      width={485}
      height={480}
      alt="Decorative dots"
      className="absolute bottom-0 z-0"
      loading="lazy"
    />
    <div className="absolute bg-gradient-to-b from-background-darker to-transparent z-10 h-[480px] w-full bottom-0" />
    <Image
      src="/assets/company/tattoo-artist.png"
      width={342}
      height={465}
      alt="Tattoo artist"
      className="z-10"
    />
  </article>
);

export default LeftSection;
