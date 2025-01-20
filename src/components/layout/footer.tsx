import React from "react";
import SectionContainer from "../home-sections/section-container";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="border-t p-9">
      <SectionContainer className="grid-cols-1 space-y-7 gap-0">
        <Logo />
        <hr className="border-1 border-gray-300" />
        <p>&copy; 2025 Blink. All Rights Reserved</p>
      </SectionContainer>
    </footer>
  );
};

export default Footer;
