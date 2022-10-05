import styled from 'styled-components';

const Detail = () => {
  return (
    <DetailContainer>
      <div className='detail-container'></div>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;

  .detail-container {
    width: 640px;
    min-height: 100vh;
    border: 1px solid black;
  }

  @media ${({ theme }) => theme.responsive.tablet} {
    .detail-container {
      /* width: 100%; */
    }
  }
`;

export default Detail;
