import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Link from "next/link";
import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import styles from "./dropdown.module.scss";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  "data-bs-toggle"?: string;
  "data-bs-target"?: string;
}

export type DropdownOptions =
  | {
      label: string;
      url: string;
      type: "link" | "externalLink";
    }
  | {
      type: "button";
      label: string;
      buttonProps?: ButtonProps;
    };

export interface DropdownProps {
  buttonLabel: string;
  dropdownOptions: DropdownOptions[];
  dropdownAlignment?: "start" | "end";
  buttonClassName?: string;
}

const Dropdown = ({
  buttonLabel,
  buttonClassName = "",
  dropdownOptions,
  dropdownAlignment = "start",
}: DropdownProps) => {
  return (
    <div className="dropdown">
      <button
        className={combineCSSClasses(
          "btn",
          "dropdown-toggle",
          styles.dropdown_toggle,
          buttonClassName
        )}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-testid="dropdown-button"
      >
        {buttonLabel}
      </button>
      <ul
        data-testid="dropdown-list"
        className={combineCSSClasses(
          "dropdown-menu",
          dropdownAlignment === "end" ? "dropdown-menu-end" : ""
        )}
      >
        {dropdownOptions.map((option, index) => (
          <li key={index}>
            {option.type === "externalLink" && (
              <a
                href={option.url}
                target="_blank"
                rel="noreferrer"
                className={combineCSSClasses(
                  "dropdown-item",
                  styles.dropdown_item
                )}
              >
                {option.label}
              </a>
            )}
            {option.type === "link" && (
              <Link href={option.url} passHref={true}>
                <a
                  className={combineCSSClasses(
                    "dropdown-item",
                    styles.dropdown_item
                  )}
                >
                  {option.label}
                </a>
              </Link>
            )}
            {option.type === "button" && (
              <button
                className={combineCSSClasses(
                  "dropdown-item",
                  styles.dropdown_item
                )}
                {...option.buttonProps}
              >
                {option.label}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
