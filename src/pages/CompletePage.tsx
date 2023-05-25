import styled from "styled-components";
import image from "/image/message.png";
const CompletePage = () => {
  return (
    <Container className="w-full h-screen flex flex-col justify-center items-center">
      <h1>
        <strong>쪽지</strong>가 <br /> 전달되었습니다.
      </h1>
      <Img src={image} alt="" />
      <p>정진범님의 질문을 보냈어요!</p>
      <p> 쪽지가 도착하면 알려줄게요!</p>
      <p> 도착 할 때까지 (노래를 들어볼까요?)</p>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  h1 {
    font-size: 3.8rem;
  }
  strong {
    font-weight: bold;
  }

  p {
    margin-bottom: 1rem;
  }
`;
const Img = styled.img`
  padding-block: 6rem;
`;
export default CompletePage;
