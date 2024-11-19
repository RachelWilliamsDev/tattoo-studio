"use client";
import { useState } from "react";
import { Text } from "./Text";

const AccordionItem = ({
  title,
  children,
  isOpen,
  onToggle,
}: AccordionItemProps) => (
  <div className="border-b border-white/20">
    <div
      className="flex justify-between items-center py-6 md:p-8 cursor-pointer"
      onClick={onToggle}
    >
      <Text size="xl" weight="bold" className="uppercase">
        {title}
      </Text>
      <span className="text-xl">{isOpen ? "-" : "+"}</span>
    </div>
    {isOpen && <div className="md:px-8">{children}</div>}
  </div>
);

const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto ">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
