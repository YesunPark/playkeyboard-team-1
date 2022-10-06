import styled from 'styled-components';

const DetailBuyButton = ({ data }) => {
  console.log(data);
  return (
    <>
      <BuyButtonWrap>
        <button className='buy-btn'>
          <p className='buy-info'>
            구매
            <img className='buy-img' src={require('../../assets/images/icon_dia_type3.png')} alt='가격' />
            <span>{data.price}</span>
          </p>
          <p className='buy-ad'>광고제거˙무제한 사용</p>
        </button>
      </BuyButtonWrap>
    </>
  );
};

const BuyButtonWrap = styled.div`
  padding: 10px;
  border-top: 1px solid #f2f3f7;
  .buy-btn {
    width: 100%;
    padding: 3px 0;
    background: ${({ theme }) => theme.colors.mainColor};
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
    border-radius: 30px;
    cursor: pointer;

    color: #fff;
    .buy-info {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
      .buy-img {
        width: 14px;
        margin: 0 3px;
      }
    }
    .buy-ad {
      font-size: 12px;
    }
  }
`;
export default DetailBuyButton;
