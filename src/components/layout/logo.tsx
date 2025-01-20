import React from "react";
import Link from "next/link";
import { Layers } from "lucide-react";

const Logo = () => {
  return (
    <Link href="/" className="flex-shrink-0 flex items-center">
      <Layers className="h-8 w-8 text-purple-600" />
      <span className="ml-2 text-2xl font-bold text-gray-900">Blink</span>
    </Link>
  );
};

export default Logo;
