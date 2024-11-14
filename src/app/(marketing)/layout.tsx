import Navbar from "@/components/navigation/navbar";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      {children}
    </div>
  );
};

export default MarketingLayout;
