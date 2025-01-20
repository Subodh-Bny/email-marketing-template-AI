export const Miniheading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="font-bold md:text-2xl text-center md:text-start">
      {children}
    </h3>
  );
};

export const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="font-bold text-3xl md:text-5xl text-center md:text-start">
      {children}
    </h1>
  );
};

export const SubHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="font-bold text-xl text-center md:text-start">{children}</h1>
  );
};

export const Content = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-center md:text-start">{children}</p>;
};
