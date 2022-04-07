import React from "react";

export interface InputProps {
  type?: string;
  placeholder: string;
  disabled?: boolean;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = (props: InputProps) => {
  const { type, placeholder, disabled, name, value, onChange } = props;
  return (
    <div className="form-group flex-grow-1">
      <input
        type={type || "text"}
        className="form-control"
        placeholder={placeholder}
        disabled={disabled || false}
        name={name}
        id={name}
        value={value || ""}
        onChange={onChange}
        data-testid="input"
      />
    </div>
  );
};

export default Input;
