import React from "react";
import { Heading, Miniheading } from "./text-format";
import SectionContainer from "./section-container";
import Image from "next/image";

const Innovate = () => {
  return (
    <SectionContainer className="place-items-center ">
      <div className="space-y-6">
        <Miniheading>Innovate</Miniheading>
        <Heading>Revolutionize Your Email Marketing with AI</Heading>
        <p>
          Our AI-Powered Email Template Creation feature streamlines your
          marketing efforts by generating tailored email templates in seconds.
          Simply input your ideas, and watch as our intelligent system crafts
          the perfect message for your audience.
        </p>
      </div>

      <Image
        src={"/assets/innovation.svg"}
        height={400}
        width={400}
        alt="innovation"
        className="w-72 md:w-96"
      />
    </SectionContainer>
  );
};

export default Innovate;
