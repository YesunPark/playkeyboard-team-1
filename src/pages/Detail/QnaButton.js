import styled from 'styled-components';

const QnaButton = () => {
  return (
    <>
      <QnaButtonWrap>
        <button className='qna-btn'>상품 문의</button>
      </QnaButtonWrap>
    </>
  );
};

const QnaButtonWrap = styled.div`
  border-top: 1px solid #f2f3f7;
  padding: 24px;
  .qna-btn {
    width: 100%;
    padding: 9px 0;
    border-radius: 20px;
    border: 3px solid ${({ theme }) => theme.colors.mainColor};
    background: #fff;
    color: ${({ theme }) => theme.colors.mainColor};
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }
`;
export default QnaButton;
