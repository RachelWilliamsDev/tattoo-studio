declare type NavigationProps = {
  name: string;
  href: string;
};

declare type TestimonialProps = {
  name: string;
  body: string;
  image: string;
};

declare type LogoProps = {
  name: string;
  image: string;
};

declare type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

declare type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

declare type AccordionProps = {
  items: AccordionItem[];
};

declare type OctagonProps = {
  src: string;
  width?: string;
  height?: string;
  id: string;
  animateStroke?: boolean;
};

declare type DiamondProps = {
  size?: string;
  color?: string;
};

declare type SubscribeBackgroundProps = {
  children: React.ReactNode;
};
