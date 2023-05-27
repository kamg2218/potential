import styled from "styled-components";
import PreviousButton from "../Common/Button/PreviousButton";
import message from "../../assets/label.png";
import Button from "../Common/Button";
import NamePlate from "../Common/NamePlate";
interface HeaderProps {
  title: string;
  useMessage?: boolean;
  handleClick?: () => void;
  handleMessageClick?: () => void;
  namePlate?: boolean;
  user?: {
    id?: number;
    name?: string;
    mbti?: string | null;
    belief?: number | null;
  }
}
const Header = ({ title, useMessage = false, handleClick, handleMessageClick, namePlate = false, user = { mbti: null, belief: null } }: HeaderProps) => {
  return (
    <HeaderContainer>
      <PreviousButton onClick={handleClick} />
      <HeaderTitle>
        {title}
        {!!namePlate && (
          <NamePlate mbti={user?.mbti || ''} belief={null} />
        )}
      </HeaderTitle>
      {!!useMessage && (
        <StyledButton onClick={handleMessageClick}>
          <StyledImg src={message} />
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
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-left: 1rem;
`;
const StyledButton = styled(Button)`
  background-color: transparent;
`;
const StyledImg = styled.img`
  cursor: pointer;
  height: 3rem;
  margin-right: 1rem;
`;
export default Header;
