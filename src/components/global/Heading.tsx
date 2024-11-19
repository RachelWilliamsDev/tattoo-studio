import { Text } from "../ui/Text";

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <div className="flex justify-center mb-[70px]">
      <Text font="angel" size="2xl">
        {title}
      </Text>
    </div>
  );
};
export default Heading;
