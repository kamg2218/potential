import { ChangeEvent } from "react";

interface TextFieldProps {
  text: string;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const TextField = ({ text, placeholder, handleChange }: TextFieldProps) => {
  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
export default TextField;
