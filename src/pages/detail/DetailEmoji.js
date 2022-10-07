import styled from 'styled-components';

const DetailEmoji = ({ data }) => {
  const emojis = data.figure;

  return (
    <DetailEmojiContainer>
      <div className='detail-emoji-container'>
        {emojis.map((emoji) => {
          return <img src={emoji.imageUrl} alt={emoji.keyword} className='emoji-img' key={emoji.imageUrl} />;
        })}
      </div>
      <div className='detail-emoji-text'>
        <p>일부 앱에서는 움짤 형태로 전송되거나, 멈춰있는 이모티콘으로 전송될 수 있어요.</p>
        <a>이모티콘은 어떻게 전송하나요?</a>
      </div>
    </DetailEmojiContainer>
  );
};

const DetailEmojiContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .detail-emoji-container {
    display: flex;
    align-items: center;
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
    height: 48px;
    margin: 0 28px;
    color: ${({ theme }) => theme.colors.grayText};
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    p {
      margin-bottom: 3px;
    }
    a {
      margin-bottom: 49px;
      border-bottom: 1px solid #000000;
      color: #4b4e57;
    }
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    .detail-emoji-text {
      font-size: 12px;
    }
  }
`;

export default DetailEmoji;
