import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import style from "./dropdown-list.module.scss";

interface DropdownListProps {
  children: any;
  defaultValue?: any;
  className?: string;
  placeholder?: string;
}

const DropdownList = ({
  children,
  defaultValue,
  className,
  placeholder,
}: DropdownListProps) => {
  return (
    <div className={combineCSSClasses(style.kDropDownList, className || "")}>
      <select
        className="k-dropdown"
        defaultValue={defaultValue}
        placeholder={placeholder}
      >
        {children}
      </select>
      <button>
        <svg
          width="8"
          height="6"
          viewBox="0 0 8 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 6L0 0H8L4 6Z" fill="#495057" />
        </svg>
      </button>
    </div>
  );
};

export default DropdownList;
