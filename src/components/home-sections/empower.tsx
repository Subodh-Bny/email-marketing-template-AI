import React from "react";
import { ArrowBigUpDash, ChevronRight, Rewind } from "lucide-react";
import { Content, Heading, Miniheading, SubHeading } from "./text-format";

import { Button } from "@/components/ui/button";
import SectionContainer from "./section-container";
import GetStartedButton from "./get-started";

const Empower = () => {
  return (
    <SectionContainer className="place-items-center">
      <div className="space-y-4">
        <Miniheading>Empower</Miniheading>
        <Heading>Unlock Your Email Marketing Potential with AI</Heading>
      </div>
      <div className="space-y-4 py-4">
        <Content>
          Revolutionize your email marketing strategy with our AI-driven app.
          Save time, boost efficiency, and enhance your email performance
          effortlessly.
        </Content>
        <div className="space-y-4">
          <div className="space-y-3">
            <Rewind size={30} className="font-bold mx-auto md:mx-0" />
            <SubHeading>Time-Saving</SubHeading>
            <Content>
              Automate your email tasks and focus on what truly matters for your
              business.
            </Content>
          </div>
          <div className="space-y-3">
            <ArrowBigUpDash size={40} className="font-bold mx-auto md:mx-0" />
            <SubHeading>Increased Efficiency</SubHeading>
            <Content>
              Streamline your workflow and achieve more in less time with our
              smart solutions
            </Content>
          </div>
          <div className="flex  gap-2 justify-center md:justify-start">
            <GetStartedButton />
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
