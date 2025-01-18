import { Button } from "@/components/ui/button";
import Empower from "@/sections/empower";
import Innovate from "@/sections/innovate";
import { ArrowBigUpDash, ChevronRight, Hourglass, Rewind } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-screen flex items-center justify-center h-screen">
        {/* hero image */}
        <Image
          src="/assets/hero.png"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Transform Your Email Marketing with AI
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Unlock the power of AI-driven email marketing to create personalized
            campaigns effortlessly. Our intuitive app helps you design
            templates, automate scheduling, and engage your audience like never
            before.
          </p>
          <div className="space-x-4">
            <Button>Get Started</Button>
            <Button variant={"outline"} className="bg-transparent ">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Empower */}
      <Empower />

      {/* Innovate */}
      <Innovate />
    </>
  );
}
