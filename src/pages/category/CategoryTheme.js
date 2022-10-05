import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CategoryTheme = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const listData = await axios.get('https://api.plkey.app/theme?category=LIVE');
      setList(listData.data);
    };
    getList();
  }, []);

  return (
    <>
      <ThemeContainer>
        {list.data.length !== 0 &&
          list.data.map((data) => {
            return (
              <div className='theme-container'>
                <div className='theme-top-container'>
                  <img src={data.imageUrl} alt='image' className='theme-img' />
                  <span className='theme-name'>{data.name}</span>
                  <span className='theme-hashtag'>{data.hashtag}</span>
                </div>
                <div className='theme-bottom-container'>
                  <span className='theme-download'>{data.downloads}</span>
                  <span className='theme-price'>{data.price}</span>
                </div>
              </div>
            );
          })}
      </ThemeContainer>
    </>
  );
};

const ThemeContainer = styled.div`
  display: grid;
  grid-template-columns: 47.815% 47.815%;
  grid-column-gap 4.37%;
  padding: 24px 16px 31px 16px;
  font-family: 'Noto Sans KR';
  font-style : normal;
  
  .theme-container {

    margin-bottom : 16px;

    .theme-img {
      width: 100%;
      border-radius : 12px;
    }

    .theme-name {
      color: #42444C;
      margin-top : 8px;
      font-weight : 500;
      font-size : 14px;
      line-height : 20px;
    }

    .theme-hashtag {   
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #AAABB3;
      opacity : 1;
      margin-top : 2px;
    }

    .theme-bottom-container {
      display : flex;
      justify-content : space-between;
      margin-top : 3px;   
      font-size: 12px;
      line-height: 18px;

      .theme-download {    
        color: #AAABB3;
      }

      .theme-price {     
        color: #7DC9FC;
      }
    }

    span {
      display: block;
    }
  }
`;

export default CategoryTheme;
