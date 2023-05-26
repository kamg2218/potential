import { ChangeEvent, useRef } from "react";
//import { styled } from "styled-components";

interface TextFieldProps {
  text: string;
  placeholder: string;
  handleChange: (value: string) => void;
}
const TextField = ({ text, placeholder, handleChange }: TextFieldProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const handleResizeHeight = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    handleChange(value);
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  };
  return (
    <textarea
      value={text}
      rows={1}
      maxLength={100}
      onChange={handleResizeHeight}
      placeholder={placeholder}
      ref={textareaRef}
    />
  );
};
export default TextField;
