import { ReactNode, ReactText } from "react";

export interface WelcomeCardProps {
  title: ReactText | ReactNode;
  cta: ReactNode;
}

const WelcomeCard = ({ title, cta }: WelcomeCardProps) => {
  return (
    <div className="p-7 border-8 border-gray-700 flex flex-col gap-x-8 gap-y-4 md:flex-row">
      <div className="basis-4/6 flex md:items-center">
        <p className="text-lg text-gray-700 font-bold mb-0">{title}</p>
      </div>
      <div className="basis-2/6 flex md:justify-end md:items-center">{cta}</div>
    </div>
  );
};

export default WelcomeCard;
