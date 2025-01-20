import { Button } from "@/components/ui/button";
import Empower from "@/components/home-sections/empower";
import Innovate from "@/components/home-sections/innovate";
import Image from "next/image";
import Features from "@/components/home-sections/features";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-screen flex items-center justify-center h-screen">
        <div className="relative z-10 text-center  px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <Image
            src="/assets/airplane-line.svg"
            height={400}
            width={400}
            alt="paper airplane line"
            className="absolute inset-0 -top-20 lg:-top-28 left-3 block -z-10 w-72 lg:w-96"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Transform Your Email Marketing with AI
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed mt-10 md:mt-0">
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

      {/* Features */}
      <Features />
    </>
  );
}
