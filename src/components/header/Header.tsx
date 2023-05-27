import styled from "styled-components";
import PreviousButton from "../Common/Button/PreviousButton";
import message from "../../assets/label.png";
import Button from "../Common/Button";
interface HeaderProps {
  title: string;
  useMessage?: boolean;
  handleClick?: () => void;
}
const Header = ({ title, useMessage = false, handleClick }: HeaderProps) => {
  return (
    <HeaderContainer>
      <PreviousButton />
      <HeaderTitle>
        <h1>{title}</h1>
      </HeaderTitle>
      {!!useMessage && (
        <StyledButton onClick={handleClick}>
          <StyledImg src={message} width={20} />
        </StyledButton>
      )}
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header`
  padding-inline: 1.5rem;
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;
const HeaderTitle = styled.div`
  text-align: center;
  width: 100%;
  font-weight: bold;
`;
const StyledButton = styled(Button)`
  background-color: transparent;
`;
const StyledImg = styled.img`
  cursor: pointer;
`;
export default Header;
