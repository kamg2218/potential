import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import PreviousButton from '../Common/Button/PreviousButton';
import { useEffect, useState } from 'react';
import { getQuestions } from '../../api/request';
import { getTokenStorage } from '../../utils/storage';

const { token } = getTokenStorage();

const PocketDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState({
    mbti: 'INTP',
    title: 'dodldl sldkfj ldfkjsdfl sldkfjds ldkfjsldkf',
    data: [
      {
        id: 1,
        name: 'nickname',
        mbti: 'intp',
        belief: 2,
      }
    ]
  });
  const { mbti, title } = data;

  useEffect(() => {
    getQuestions({ token, data: {} })
  }, []);

  return (
    <Container>
      <PreviousButton className="ml-5 mt-5" />
      <div>
        <div>{mbti}에게 물었다.</div>
        <div>{title}</div>
      </div>
      <hr className="border border-t-1 border-zinc-500" />

      hello {id}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  color: black;
`;

export default PocketDetails;