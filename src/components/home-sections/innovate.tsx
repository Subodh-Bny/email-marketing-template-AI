import React from "react";
import { Content, Heading, Miniheading } from "./text-format";
import SectionContainer from "./section-container";
import Image from "next/image";

const Innovate = () => {
  return (
    <SectionContainer className="place-items-center  space-y-10">
      <div className="space-y-6">
        <Miniheading>Innovate</Miniheading>
        <Heading>Revolutionize Your Email Marketing with AI</Heading>
        <Content>
          Our AI-Powered Email Template Creation feature streamlines your
          marketing efforts by generating tailored email templates in seconds.
          Simply input your ideas, and watch as our intelligent system crafts
          the perfect message for your audience.
        </Content>
      </div>

      <Image
        src={"/assets/landing/innovation.svg"}
        height={400}
        width={400}
        alt="innovation"
        className="w-72 md:w-96 mx-auto"
      />
    </SectionContainer>
  );
};

export default Innovate;
