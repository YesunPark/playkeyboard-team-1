import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DetailInfo = ({ data }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <img className='back hover' alt='back' onClick={handleBack} src='/images/detail/backwards.svg' />
      <img className='preview-img hover' alt='preview' src={data.imageUrl} />
      <div className='title'>
        <div>
          <span className='name'>{data.name}</span>
          <div className='creator'>{data.creator}</div>
        </div>
        <img className='share hover' alt='share' src='/images/detail/share.svg' />
      </div>
      <TagList>
        {data.hashtag.map((tag) => {
          return (
            <li key={tag} className='hover'>
              {tag}
            </li>
          );
        })}
      </TagList>
      <div className='advertise hover'>AD</div>
    </Container>
  );
};

const Container = styled.div`
  margin: 16px 16px 0;

  .back {
    width: 6.4%;
    min-width: 24px;
  }

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

    .share {
      width: 5.33%;
      min-width: 20px;
    }
  }

  .creator {
    color: ${({ theme }) => theme.colors.grayText};
    font-weight: 500;
    line-height: 20px;
  }

  .advertise {
    text-align: center;
    width: 98%;
    height: 50px;
    margin: auto;
    border: 0px;
    background-color: #d9d9d9;
    font-size: 14px;
    font-weight: 500;
    line-height: 50px;
  }

  .hover {
    cursor: pointer;
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
