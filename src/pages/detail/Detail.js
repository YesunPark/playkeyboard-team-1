import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Detail = () => {
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    axios(`https://api.plkey.app/theme/${params.themeId}`).then((res) => {
      setData(res.data.data);
    });
  }, [params]);

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
`;

export default Detail;
