import { cn } from "@/lib/utils";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={cn("h-full w-full mx-auto p-6 md:p-0", className)}>
      {children}
    </div>
  );
};
export default Wrapper;
