import React, { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export const Container: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return <div className="mx-auto w-full px-4 max-w-[1472px]">{children}</div>;
};
