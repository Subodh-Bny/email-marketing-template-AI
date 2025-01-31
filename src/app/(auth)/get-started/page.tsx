import Logo from "@/components/layout/logo";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/config/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GetStarted = () => {
  return (
    <>
      <div className="space-y-4">
        <Logo />
        <h1 className="text-3xl font-bold">
          Welcome to Blink &#8209; Get Started Now!
        </h1>
        <p>
          Log in to access your account or sign up to join us and explore
          amazing features.
        </p>
        <div className="flex gap-4">
          <Link
            href={routes.auth.signup}
            className={buttonVariants({ variant: "default" })}
          >
            Signup
          </Link>
          <Link
            href={routes.auth.login}
            className={buttonVariants({ variant: "outline" })}
          >
            Login
          </Link>
        </div>
      </div>
      <Image
        src={"/assets/landing/get-started.png"}
        alt="get started"
        height={500}
        width={500}
      />
    </>
  );
};

export default GetStarted;
