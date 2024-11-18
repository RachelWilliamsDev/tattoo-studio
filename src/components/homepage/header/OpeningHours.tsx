import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import AccessTime from "../../../../public/assets/icons/access_time";

const OpeningHours = () => {
  return (
    <div className="flex flex-row items-center gap-6">
      <Button size="icon">
        <AccessTime />
      </Button>
      <div className="space-y-3">
        <Text size="sm">
          <Text size="sm" color="primary" as="span" className="mr-3">
            Mon-Fri:
          </Text>{" "}
          11:00-21:00
        </Text>
        <Text size="sm">
          <Text size="sm" color="primary" as="span" className="mr-3">
            Sat-Sun:
          </Text>{" "}
          14:00-20:00
        </Text>
      </div>
    </div>
  );
};
export default OpeningHours;
