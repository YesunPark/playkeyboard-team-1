import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import DetailInfo from './DetailInfo';
import DetailEmoji from './DetailEmoji';
import DetailBuyButton from './DetailBuyButton';
import DetailQnaButton from './DetailQnaButton';
import DetailIcon from './DetailIcon';
import KeyboardJinyoung from './keyboards/jinyoung/KeyboardJinyoung';
import styled from 'styled-components';

const Detail = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [isKeyboardClicked, setIsKeyboardClicked] = useState(false);

  useEffect(() => {
    axios(`https://api.plkey.app/theme/${params.themeId}`).then((res) => {
      setData(res.data.data);
    });
  }, [params]);

  return (
    data && (
      <DetailContainer>
        <DetailInfo data={data} setIsKeyboardClicked={setIsKeyboardClicked} />
        {data.isLiveTheme && <DetailEmoji data={data} />}
        {isKeyboardClicked && <KeyboardJinyoung setIsKeyboardClicked={setIsKeyboardClicked} />}
        <DetailIcon />
        <DetailQnaButton />
        <DetailBuyButton data={data} />
      </DetailContainer>
    )
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
    width: 100%;
  }
`;

export default Detail;
