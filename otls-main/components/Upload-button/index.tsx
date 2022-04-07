import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import style from "./upload.module.scss";

interface UploadButtonProps {
  color?: string;
  disabled?: boolean;
  children: any;
  className?: string;
}

const UploadButton = ({ color, children, className }: UploadButtonProps) => {
  return (
    <button
      data-testid="upload-button"
      className={combineCSSClasses(
        `btn btn-${color || "primary"} ${className}`,
        style["input-file-container"]
      )}
    >
      <input
        type="file"
        className={style["input-file"]}
        data-testid="upload-field"
      />
      {children}
    </button>
  );
};

export default UploadButton;
