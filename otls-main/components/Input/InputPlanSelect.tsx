import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  ReactText,
} from "react";

export type InputPlanSelectOptionType = {
  name: ReactText | ReactNode;
  price: ReactText | ReactNode;
  description: ReactText | ReactNode;
  value: string;
  defaultChecked?: boolean;
};

export interface InputPlanSelectProps {
  inputName: string;
  options: InputPlanSelectOptionType[];
  htmlProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

const InputPlanSelect = ({
  inputName,
  options,
  htmlProps,
}: InputPlanSelectProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      {options.map((option, index) => (
        <label key={index} className="block cursor-pointer">
          <input
            {...htmlProps}
            defaultChecked={option.defaultChecked || false}
            type="radio"
            name={inputName}
            className={combineCSSClasses("hidden peer", htmlProps?.className!)}
          />
          <div className="rounded-lg p-6 shadow-unselected peer-checked:shadow-selected transition-shadow">
            <p className="text-primary font-bold text-xl mb-1">{option.name}</p>
            <div className="flex justify-between">
              <span className="text-gray-700 text-2.5xl font-bold">
                {option.price}
              </span>
              <span className="text-gray-600 text-2.5xl">
                {option.description}
              </span>
            </div>
          </div>
        </label>
      ))}
    </div>
  );
};

export default InputPlanSelect;
