import styled from 'styled-components';

const Detail = () => {
  return (
    <StyledDetail>
      <div className='detail-container'></div>
    </StyledDetail>
  );
};

const StyledDetail = styled.div`
  display: flex;
  justify-content: center;

  .detail-container {
    width: 640px;
    height: 100vh;
    border: 1px solid black;
  }

  @media screen and (max-width: 640px) {
    //태블릿
    .detail-container {
      width: 100%;
    }
  }
`;

export default Detail;
