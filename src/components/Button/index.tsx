import styled from "styled-components";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
};

const Button = styled.button.attrs<ButtonProps>((props) => {
  return {
    type: props.type ?? "button",
  };
})`
  border: 1px solid grey;
  color: #000;
  background: #fff;
`;

export default Button;
