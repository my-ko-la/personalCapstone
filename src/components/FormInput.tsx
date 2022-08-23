import { useState } from "react";

interface FormInputProps {
  name: string;
  placeholder: string;
  type: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const FormInput: React.FunctionComponent<FormInputProps> = (props) => {
  return (
    <div>
      <label htmlFor="">{props.name}</label>
      <div className="pt-2"></div>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export default FormInput;
