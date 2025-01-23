import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-screen w-full flex items-center justify-center p-9">
      <div className="lg:flex  items-center justify-center gap-4">
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
