import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const DetailEmoji = ({ data }) => {
  const params = useParams();
  const [emoji, setEmoji] = useState([]);

  useEffect(() => {
    data !== undefined && setEmoji(data.figure);
  }, [data]);

  return (
    <StyledDetailEmoji>
      <div className='detail-emoji-container'>
        {emoji.map((el) => {
          return <img src={el.imageUrl} alt={el.keyword} className='emoji-img' />;
        })}
      </div>
      <div className='detail-emoji-text'>
        <p>일부 앱에서는 움짤 형태로 전송되거나, 멈춰있는 이모티콘으로 전송될 수 있어요.</p>
        <a>이모티콘은 어떻게 전송하나요?</a>
      </div>
    </StyledDetailEmoji>
  );
};

const StyledDetailEmoji = styled.div`
  .detail-emoji-container {
    display: flex;
    flex-wrap: wrap;
    padding: 40px 34px 20px 34px;
    .emoji-img {
      width: 23.21%;
      margin-right: 15.17%;
      margin-bottom: 11.59%;
      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }

  .detail-emoji-text {
    width: 290px;
    height: 48px;
    color: #919299;
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    p {
      margin-bottom: 3px;
    }
    a {
      margin-bottom: 49px;
      color: #4b4e57;
      text-decoration: underline;
    }
  }
`;

export default DetailEmoji;
