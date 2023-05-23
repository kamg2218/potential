import Accuracy from './components/Accuracy';
import MBTI from './components/MBTI';

const Card = () => {
  return (
    <div className="text-center mb-4">
      <div className="font-xl text-lg">나의 MBTI 는</div>
      <div className="w-full flex justify-around">
        <MBTI />
        <Accuracy />
      </div>
    </div>
  );
};

export default Card;