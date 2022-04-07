import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";

export interface ProgressBarProps {
  height: string;
  progress: number;
  className?: string;
}

const ProgressBar = ({ height, className, progress }: ProgressBarProps) => {
  return (
    <div
      className={combineCSSClasses(className || null, "w-full bg-gray-200")}
      style={{ height }}
    >
      <div
        className="bg-primary"
        style={{ height, width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
