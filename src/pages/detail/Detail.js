import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import DetailEmoji from './DetailEmoji';
import KeyboardJinyoung from './keyboards/jinyoung/KeyboardJinyoung';

const Detail = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [isKeyboardClicked, setIsKeyboardClicked] = useState(true);

  useEffect(() => {
    axios(`https://api.plkey.app/theme/${params.themeId}`).then((res) => {
      setData(res.data.data);
    });
  }, [params]);

  return (
    <DetailContainer>
      {data && (
        <div className='detail-container'>
          {data.isLiveTheme && <DetailEmoji data={data} />}
          {isKeyboardClicked && <KeyboardJinyoung setIsKeyboardClicked={setIsKeyboardClicked} />}
        </div>
      )}
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;

  .detail-container {
    width: 640px;
    min-height: 100vh;
    /* border: 1px solid black; */
  }

  @media ${({ theme }) => theme.responsive.tablet} {
    .detail-container {
      width: 100%;
    }
  }
`;

export default Detail;
