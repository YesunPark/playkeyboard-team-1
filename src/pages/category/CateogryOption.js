import styled from 'styled-components';

const CateogryOption = () => {
  return (
    <OptionContainer>
      <div className='option-container'>
        <img src={require('../../assets/images/store.png')} alt='image' />
        <span>스토어</span>
      </div>
      <div className='option-container'>
        <img src={require('../../assets/images/charge.png')} alt='image' />
        <span>충전소</span>
      </div>
      <div className='option-container'>
        <img src={require('../../assets/images/mytheme.png')} alt='image' />
        <span>MY테마</span>
      </div>
      <div className='option-container'>
        <img src={require('../../assets/images/setting.png')} alt='image' />
        <span>설정</span>
      </div>
    </OptionContainer>
  );
};

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7.72px 34.16px;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 20%);

  .option-container {
    display: grid;

    img {
      width: 24.04px;
      height: 24.04px;
      margin: auto;
    }

    span {
      font-weight: 500;
      font-size: 10px;
      line-height: 16px;
      color: #919299;
      margin-top: 4.29px;
      text-align: center;
    }

    &:nth-child(3) {
      span {
        color: #ff417d;
      }
    }
  }
`;

export default CateogryOption;