import styled from "styled-components";
import belief1 from "../../../assets/belief/belief1.png";
import belief2 from "../../../assets/belief/belief2.png";
import belief3 from "../../../assets/belief/belief3.png";

interface NamePlateProps {
  id?: string;
  mbti: string;
  mbtiPercent: string;
  useToTalk?: boolean;
  handleClick?: () => void;
}

const findMbtiImg = ({ mbtiPercent }: { mbtiPercent: string }) => {
  return belief3;
};

const NamePlate = ({
  id,
  mbti,
  mbtiPercent,
  useToTalk = false,
  handleClick,
}: NamePlateProps) => {
  const typeImg = findMbtiImg({ mbtiPercent });

  return (
    <MbtiPlate onClick={handleClick} $useToTalk={useToTalk}>
      <MbtiType width={10} src={typeImg} />
      <span>{`${mbti} ${useToTalk ? "| 대화하기" : ""} `}</span>
    </MbtiPlate>
  );
};

const MbtiPlate = styled.div<{ $useToTalk: boolean }>`
  border-radius: 1rem;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  padding: 2px 5px 2px 3px;
  font-size: 1.1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: ${({ $useToTalk }) => ($useToTalk ? "pointer" : "none")};
  border: ${({ $useToTalk }) => ($useToTalk ? "1px solid #000" : "none")};
  background-color: ${({ $useToTalk }) => ($useToTalk ? "#F3F3F3" : "#fff")};
`;

const MbtiType = styled.img`
  margin-right: 0.3rem;
`;

export default NamePlate;
