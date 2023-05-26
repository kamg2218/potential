import styled from "styled-components";
import PreviousButton from "../Common/Button/PreviousButton";

interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderContainer>
      <PreviousButton />
      <HeaderTitle>
        <h1>{title}</h1>
      </HeaderTitle>
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
export default Header;
