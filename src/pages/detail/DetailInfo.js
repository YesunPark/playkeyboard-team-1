import styled from 'styled-components';

import TagList from '../Detail/TagList';

const DetailInfo = () => {
  return (
    <Container>
      <div className='container'>
        <div>
          <img alt='back' src='/images/detail/backwards.svg' />
        </div>
        <img
          className='preview-img'
          alt='preview'
          src='https://cdn.pixabay.com/photo/2022/09/07/21/23/ferris-wheel-7439636__340.jpg'
        />
        <div className='title'>
          <span className='name'>앙무</span>
          <img alt='share' src='/images/detail/share.svg' />
        </div>
        <div className='creator'>작가</div>
        <TagList>
          {list.map((tag) => {
            return <li key={tag}>{tag}</li>;
          })}
        </TagList>
        <button>광고배너</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  /* div {
    border: 1px solid black;
  } */
  margin: 56px 16px 0;

  .preview-img {
    width: 100%;
    margin: 19.46px 0px 24px;
    border-radius: 8px;
    filter: drop-shadow(0px 2px 12px rgba(0, 0, 0, 0.2));
  }

  .title {
    display: flex;
    justify-content: space-between;
    margin: 0px 4px 4px 0px;
    .name {
      font-size: 20px;
      font-weight: 700;
      line-height: 28px;
    }
  }

  .creator {
    color: ${({ theme }) => theme.colors.grayText};
    font-weight: 500;
    line-height: 20px;
  }
`;

const TagList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 20px 0px;

  li {
    height: 28px;
    margin-right: 4.12px;
    padding: 4px 10.3px;
    background-color: #ebedf5;
    border-radius: 18px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export default DetailInfo;
