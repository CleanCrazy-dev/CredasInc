import ProgressBar from "@/components/UI/Progress/Progress";
import { ReactNode } from "react";
import { i18n } from "@lingui/core";

export interface CourseCardProps {
  category: string;
  name: string;
  progress?: number | undefined;
  description?: string;
  cta?: ReactNode;
}

const CourseCard = ({
  name,
  category,
  progress,
  description,
  cta,
}: CourseCardProps) => {
  return (
    <div className="border-1 border-gray-300 p-6 rounded-lg">
      <span className="text-gray-600 uppercase tracking-wider text-xs">
        {category}
      </span>
      <p className="text-primary text-xl font-bold mb-0">{name}</p>
      {description && (
        <p className="my-4 text-gray-700 text-base-sm">{description}</p>
      )}
      {progress !== undefined && (
        <div>
          <ProgressBar height="2px" progress={progress} />
          <span className="text-gray-600 text-xs tracking-wide uppercase">
            {progress}% {i18n._(/*i18n*/ "complete")}
          </span>
        </div>
      )}
      {cta}
    </div>
  );
};

export default CourseCard;
