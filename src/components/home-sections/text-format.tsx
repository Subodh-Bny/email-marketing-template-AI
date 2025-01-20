export const Miniheading = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="font-bold md:text-2xl ">{children}</h3>;
};

export const Heading = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="font-bold text-5xl">{children}</h1>;
};

export const SubHeading = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="font-bold text-xl">{children}</h1>;
};
