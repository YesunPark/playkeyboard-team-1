import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DetailInfo = ({ data }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  console.log(data);

  return (
    <Container>
      <img alt='back' onClick={handleBack} src='/images/detail/backwards.svg' />
      <img className='preview-img' alt='preview' src={data.imageUrl} />
      <div className='title'>
        <div>
          <span className='name'>{data.name}</span>
          <div className='creator'>{data.creator}</div>
        </div>
        <img alt='share' src='/images/detail/share.svg' />
      </div>
      <TagList>
        {data.hashtag.map((tag) => {
          return <li key={tag}>{tag}</li>;
        })}
      </TagList>
      <div className='advertise'>
        <button className='advertise'>광고배너</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 16px 16px 0;

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

  .advertise {
    width: 98%;
    height: 50px;
    margin: auto;
    border: 0px;
    background-color: #d9d9d9;
    font-weight: 500;
    line-height: 20px;
  }
`;

const TagList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
  flex-wrap: wrap;
  max-width: 90.2%;

  li {
    height: 28px;
    margin: 0px 4.12px 8px 0px;
    padding: 4px 10.3px;
    background-color: #ebedf5;
    border-radius: 18px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export default DetailInfo;
