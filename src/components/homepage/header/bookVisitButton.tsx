import ButtonOverlay from "../../../../public/assets/icons/button-overlay";
import Diamond from "../../../../public/assets/icons/diamond";
import Triangle from "../../../../public/assets/icons/triangle";
import { Button } from "../../ui/button";

const BookVisitButton = () => {
  return (
    <div className="relative flex items-center">
      <Diamond />
      <Triangle className="rotate-180 -mr-3 ml-[6px]" />
      <Button variant="default" size="default" onClick={() => {}}>
        <ButtonOverlay className="absolute left-6 z-0" />
        <span className="z-10">BOOK A VISIT</span>
        <ButtonOverlay className="absolute right-6 z-0" />
      </Button>
      <Triangle className="-ml-3 mr-[6px]" />
      <Diamond />
    </div>
  );
};
export default BookVisitButton;
