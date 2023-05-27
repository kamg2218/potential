import { useNavigate, useParams } from 'react-router-dom';

import styled from 'styled-components';
import PreviousButton from '../Common/Button/PreviousButton';
import { useEffect, useState } from 'react';
import { getQuestions } from '../../api/request';
import { getTokenStorage } from '../../utils/storage';
import Content from './Content';

const { token } = getTokenStorage();

const PocketDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    mbti: 'INTP',
    title: 'dodldl sldkfj ldfkjsdfl sldkfjdslk sdlfkjsdflksjdflksdjflsdkfjsdf ldkfjsldkf',
    user: [
      {
        id: 1,
        name: 'nickname',
        mbti: 'intp',
        belief: 2,
        content: 'sldkfjsldkfjsdklfjsdlkfjsdlfk'
      },
      {
        id: 2,
        name: 'nickname',
        mbti: 'intp',
        belief: 2,
        content: 'sldkfjsldkfjsdklfjsdlkfjsdlfk'
      },
      {
        id: 3,
        name: 'nickname',
        mbti: 'intp',
        belief: 2,
        content: 'sldkfjsldkfjsdklfjsdlkfjsdlfk'
      },
      {
        id: 4,
        name: 'nickname',
        mbti: 'intp',
        belief: 2,
        content: 'sldkfjsldkfjsdklfjsdlkfjsdlfk'
      },
      {
        id: 5,
        name: 'nickname',
        mbti: 'intp',
        belief: 2,
        content: 'sldkfjsldkfjsdklfjsdlkfjsdlfk'
      },
      {
        id: 6,
        name: 'nickname',
        mbti: 'intp',
        belief: 2,
        content: 'sldkfjsldkfjsdklfjsdlkfjsdlfk'
      },
      {
        id: 7,
        name: 'nickname',
        mbti: 'intp',
        belief: 2,
        content: 'sldkfjsldkfjsdklfjsdlkfjsdlfk'
      },
      {
        id: 8,
        name: 'nickname',
        mbti: 'intp',
        belief: 2,
        content: 'sldkfjsldkfjsdklfjsdlkfjsdlfk'
      },
    ]
  });
  const { mbti, title, user } = data;

  useEffect(() => {
    getQuestions({
      token, data: { question: id }
    }).then((res) => {
      const { data } = res;
      setData(data);
    }).catch(e => {
      throw Error('Fail To Get Questions', e);
    });
  }, [id]);

  return (
    <Container>
      <div className="flex items-center gap-3 pt-5 pl-5">
        <PreviousButton stroke="black" onClick={() => navigate('/pocket')} />
        <StyledHeader>{mbti}에게 물었다.</StyledHeader>
      </div>
      <div className="pt-5 pl-5">
        <StyledTitle>{title}</StyledTitle>
        <hr className="border border-t-1 border-zinc-500 my-6" />
        <div className=''>
          {
            user.map(({ id, name, mbti, belief, content }) => {
              return (
                <Content key={id} id={id} name={name} mbti={mbti} belief={belief} content={content} />
              )
            })
          }
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  color: black;
  padding: 0rem 2rem 2rem 0rem;
  overflow: hidden;
`;

const StyledHeader = styled.div`
  width: 100%;
  text-align: center;
  color: #5F5F5F;
  font-size: 1.2rem;
`;

const StyledTitle = styled.div`
  width: 100%;
  text-align: center;
  color: #202124;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export default PocketDetails;