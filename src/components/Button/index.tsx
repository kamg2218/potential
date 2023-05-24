import styled from "styled-components";

type ButtonProps = {
  type: "button" | "submit" | "reset";
};

const Button = styled.button.attrs<ButtonProps>((props) => {
  return {
    type: props.type ?? "button",
  };
})`
  color: #000;
  background: #fff;
`;

export default Button;
