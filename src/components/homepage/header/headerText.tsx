import { Text } from "@/components/ui/text";

const HeaderText = () => {
  return (
    <div className="flex max-w-[481px] w-full tracking-[-2%] leading-none">
      <Text size="3xl" font="angel" className="block">
        Body paintings
        <span className="flex gap-8">
          that
          <Text
            color="primary"
            size="3xl"
            font="angel"
            as="span"
            className="block"
          >
            defies
          </Text>
        </span>
        Your Soul
      </Text>
    </div>
  );
};

export default HeaderText;
