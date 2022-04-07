import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode, ReactText } from "react";
import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";

export interface SingleFeatureProps {
  name: string;
  icon: IconProp;
  iconClassName?: string;
  featuresList: (ReactText | ReactNode)[];
  note?: ReactText | ReactNode;
}

const SingleFeature = ({
  name,
  icon,
  iconClassName,
  featuresList,
  note,
}: SingleFeatureProps) => {
  return (
    <div className="flex gap-x-5">
      <div className="w-6 text-cyan-500 text-2.5xl">
        <FontAwesomeIcon
          icon={icon}
          className={combineCSSClasses("w-full h-auto", iconClassName || null)}
        />
      </div>
      <div className="flex-grow text-white">
        <p className="mb-2 text-cyan-500 font-bold text-2.5xl">{name}</p>
        <ul className="m-0 text-lg leading-8 list-disc pl-5">
          {featuresList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {note && <span className="inline-block mt-2">{note}</span>}
      </div>
    </div>
  );
};

export default SingleFeature;
