import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import DetailInfo from './DetailInfo';
import DetailEmoji from './DetailEmoji';
import QnaButton from './QnaButton';
import BuyButton from './BuyButton';
import DetailIcon from './DetailIcon';
import KeyboardJinyoung from './keyboards/jinyoung/KeyboardJinyoung';
import styled from 'styled-components';

const Detail = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [isKeyboardClicked, setIsKeyboardClicked] = useState(true);

  useEffect(() => {
    axios(`https://api.plkey.app/theme/${params.themeId}`).then((res) => {
      setData(res.data.data);
    });
  }, [params]);

  return (
    <>
      {data && (
        <DetailContainer>
          <DetailInfo data={data} />
          {data.isLiveTheme && <DetailEmoji data={data} />}
          {isKeyboardClicked && <KeyboardJinyoung setIsKeyboardClicked={setIsKeyboardClicked} />}
        </DetailContainer>
      )}
    </>
  );
};

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 640px;
  min-height: 100vh;
  margin: auto;

  @media ${({ theme }) => theme.responsive.tablet} {
    .detail-container {
      width: 100%;
    }
  }
`;

export default Detail;
