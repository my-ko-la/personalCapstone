import { useState } from "react";

interface FormInputProps {
  name: string;
  placeholder: string;
  type: string;
  size: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const FormInput: React.FunctionComponent<FormInputProps> = (props) => {
  return (
    <div>
      <label htmlFor="">{props.name}</label>
      <div className="pt-1"></div>
      {props.size === "large" ? (
        <input
          className="border outline-2 rounded-md font-light text-sm w-2/3 h-48 px-2 align-top"
          type={props.type}
          placeholder={props.placeholder}
        />
      ) : (
        <input
          className="border outline-2 rounded-md text-sm font-light w-64 h-6 pl-2"
          type={props.type}
          placeholder={props.placeholder}
        />
      )}
    </div>
  );
};

export default FormInput;
