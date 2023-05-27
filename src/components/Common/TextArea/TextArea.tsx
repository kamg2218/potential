import { ChangeEvent, useRef } from "react";
import styled from "styled-components";

interface TextFieldProps {
  text: string;
  placeholder?: string;
  handleChange: (value: string) => void;
  backgrounColor?: string;
}

type TextAreaProps = {
  backgrounColor?: string;
};
const TextField = ({
  text,
  placeholder,
  handleChange,
  backgrounColor = "#e1e1e1",
}: TextFieldProps) => {
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
    <TextArea
      backgrounColor={backgrounColor}
      value={text}
      rows={1}
      maxLength={100}
      onChange={handleResizeHeight}
      placeholder={placeholder}
      ref={textareaRef}
    />
  );
};
const TextArea = styled.textarea<TextAreaProps>`
  background-color: ${({ backgrounColor }) => backgrounColor};
  width: 100%;
  border-radius: 0.7rem;
  resize: none;
  padding: 10px;
  outline: none;
`;
export default TextField;
