"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ContainerProps {
  delay?: number;
  children: React.ReactNode;
  className?: string;
}
const Container = ({ delay = 0.2, children, className }: ContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: delay, duration: 0.4, ease: "easeInOut" }}
      className={cn("w-full h-full max-w-screen-2xl mx-auto", className)}
    >
      {children}
    </motion.div>
  );
};
export default Container;
