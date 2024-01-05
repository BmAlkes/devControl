import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full max-w-7xl">{children}</div>;
};

export default Container;
