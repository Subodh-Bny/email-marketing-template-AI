import React from "react";
import { ArrowBigUpDash, ChevronRight, Rewind } from "lucide-react";
import { Heading, Miniheading, SubHeading } from "./text-format";

import { Button } from "@/components/ui/button";
import SectionContainer from "./section-container";

const Empower = () => {
  return (
    <SectionContainer className="place-items-center">
      <div className="space-y-4">
        <Miniheading>Empower</Miniheading>
        <Heading>Unlock Your Email Marketing Potential with AI</Heading>
      </div>
      <div className="space-y-4 py-4">
        <p>
          Revolutionize your email marketing strategy with our AI-driven app.
          Save time, boost efficiency, and enhance your email performance
          effortlessly.
        </p>
        <div className="space-y-4">
          <div className="space-y-3">
            <Rewind size={30} className="font-bold" />
            <SubHeading>Time-Saving</SubHeading>
            <p>
              Automate your email tasks and focus on what truly matters for your
              business.
            </p>
          </div>
          <div className="space-y-3">
            <ArrowBigUpDash size={40} className="font-bold" />
            <SubHeading>Increased Efficiency</SubHeading>
            <p>
              Streamline your workflow and achieve more in less time with our
              smart solutions
            </p>
          </div>
          <div className="space-x-3">
            <Button>Get Started</Button>
            <Button variant={"ghost"}>
              Signup <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Empower;
