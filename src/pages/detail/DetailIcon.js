import { useState } from 'react';
import styled from 'styled-components';

const DetailIcon = () => {
  const icon = [
    {
      id: 1,
      icon: <>😊</>,
      text: '맘에들어요',
    },
    {
      id: 2,
      icon: <>😍</>,
      text: '심쿵했어요',
    },
    {
      id: 3,
      icon: <>😉</>,
      text: '응원해요',
    },
    {
      id: 4,
      icon: <>🤣</>,
      text: '갖고싶어요',
    },
  ];
  const [colorChange, setColorChange] = useState(1);
  const [count, setCount] = useState([0, 0, 0, 0]);
  const changeCount = (e) => {
    let copyArray = [...count];
    for (let i = 0; i < copyArray.length; i++) {
      copyArray[i] = 0;
    }
    copyArray[e.currentTarget.id] === 0 ? (copyArray[e.currentTarget.id] += 1) : (copyArray[e.currentTarget.id] -= 1);
    setCount(copyArray);
  };

  return (
    <>
      <IconWrap>
        {icon.map((item, idx) => {
          return (
            <IconBox key={idx} id={idx} className={colorChange === count[idx] ? 'isActive' : ''} onClick={changeCount}>
              <div className='icon-img'>{item.icon}</div>
              <div className='icon-text'>{item.text}</div>
              <div className='icon-count'>{count[idx]}</div>
            </IconBox>
          );
        })}
      </IconWrap>
    </>
  );
};

const IconWrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 16px;
  margin-top: 80px;

  .isActive {
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: 500;
  }
`;
const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grayText};

  .icon-img {
    font-size: 8vw;
    margin-bottom: 8px;
  }
  .icon-text {
    font-size: 12px;
  }

  .icon-count {
    font-size: 10px;
    line-height: 14px;
  }
`;
export default DetailIcon;
