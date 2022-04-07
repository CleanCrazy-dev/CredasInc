import { FC } from "react";

export const PremiumCreateTitle: FC = ({ children }) => {
  return (
    <p className="text-primary text-4.5xl mb-10 text-center">{children}</p>
  );
};

export const PremiumCreateSubTitle: FC = ({ children }) => {
  return (
    <p className="text-gray-700 text-2.5xl mb-10 text-center">{children}</p>
  );
};
