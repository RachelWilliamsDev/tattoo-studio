import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TattooCardProps {
  image: string;
  text: string;
  hidden?: boolean;
}
const TattooCard = ({ image, text, hidden }: TattooCardProps) => {
  return (
    <div
      className={cn(
        "bg-foreground w-full max-w-[500px] md:max-w-[485px] py-10 md:py-[31px] h-full max-h-[368px] justify-center items-center rounded-2xl mx-auto relative",
        hidden ? "hidden xl:flex" : "flex "
      )}
    >
      <Image src={image} width={197} height={239} alt="monkey" loading="lazy" />
      <Text
        font="angel"
        color="secondary"
        className="tracking-[6%] absolute bottom-2 md:bottom-10 right-2 md:right-10"
      >
        {text}
      </Text>
    </div>
  );
};

export default TattooCard;
