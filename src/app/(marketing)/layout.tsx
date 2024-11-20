import Footer from "@/components/navigation/Footer";
import NavBar from "@/components/navigation/NavBar";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MarketingLayout;
