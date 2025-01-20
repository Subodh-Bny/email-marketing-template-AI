import { cn } from "@/lib/utils";
import React from "react";

const SectionContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "py-8 px-2 max-w-6xl mx-auto md:grid grid-cols-2 gap-7",
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
