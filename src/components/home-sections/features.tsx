import React from "react";

import SectionContainer from "./section-container";
import { Heading, Miniheading } from "./text-format";
import { Card, CardContent, CardHeader } from "../ui/card";
import { CalendarCheck, Brain, Send } from "lucide-react";

const features = [
  {
    heading: "Automated Scheduling for Effortless Campaigns",
    content: "Schedule your emails in advance to maximize engagement.",
    icon: CalendarCheck,
  },
  {
    heading: "AI-Driven Analytics for Informed Decisions",
    content: "Leverage AI insights to refine your strategies.",
    icon: Brain,
  },
  {
    heading: "Seamless Integration with Resend",
    content: "Connect effortlessly with Resend for smooth email delivery",
    icon: Send,
  },
];

const Features = () => {
  return (
    <SectionContainer className="grid-cols-1 place-items-center text-center space-y-7 ">
      <Miniheading>Features</Miniheading>
      <Heading>Unlock the Power of Email Marketing</Heading>
      <p>
        Our platform offers innovative features designed to streamline your
        email marketing efforts.
        <br />
        Experience the ease of automation and insightful analytics to boost your
        campaigns.
      </p>
      <div className="grid lg:grid-cols-3 gap-6">
        {features.map((feature, ind) => (
          <Card
            key={ind}
            className="flex flex-col items-center text-center px-3 py-4 shadow-none border-none"
          >
            <feature.icon size={50} />
            <CardHeader className="text-2xl font-bold">
              {feature.heading}
            </CardHeader>
            <CardContent>{feature.content}</CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Features;
