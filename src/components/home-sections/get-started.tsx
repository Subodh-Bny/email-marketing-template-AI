import React from "react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

type Variant = "outline" | "default";

const GetStartedButton = ({
  variant = "default",
  className,
}: {
  variant?: Variant;
  className?: string;
}) => {
  return (
    <Link
      href={"/get-started"}
      className={cn(buttonVariants({ variant: variant }), className)}
    >
      Get Started
    </Link>
  );
};

export default GetStartedButton;
