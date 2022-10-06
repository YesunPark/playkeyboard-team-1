import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const CategoryTheme = ({ category }) => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getList = async () => {
      const listData = await axios.get(`https://api.plkey.app/theme?category=${category}`);
      setList(listData.data);
    };
    getList();
  }, [category]);

  const buttonHandler = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <ThemeContainer>
      {list.data?.length !== 0 &&
        list.data?.map((data) => {
          return (
            <div className='theme-container' key={data.themeId} onClick={() => buttonHandler(data.themeId)}>
              <div className='theme-top-container'>
                <img src={data.imageUrl} alt='theme' className='theme-img' />
                <span className='theme-name'>{data.name}</span>
                {data.hashtag.map((tag, index) => {
                  return (
                    <span className='theme-hashtag' key={index}>
                      #{tag}
                    </span>
                  );
                })}
              </div>
              <div className='theme-bottom-container'>
                <div className='theme-download-container'>
                  <img src={require('../../assets/images/download.png')} alt='download' />
                  <span className='theme-download'>{data.downloads}</span>
                </div>
                <div className='theme-price-container'>
                  <img src={require('../../assets/images/price.png')} alt='price' />
                  <span className='theme-price'>{data.price}</span>
                </div>
              </div>
            </div>
          );
        })}
    </ThemeContainer>
  );
};

const ThemeContainer = styled.div`
  display: grid;
  grid-template-columns: 47.815% 47.815%;
  grid-column-gap: 4.37%;
  padding: 24px 16px;

  .theme-container {
    margin-bottom: 16px;
    cursor: pointer;
    :nth-last-child(1) {
      margin-bottom: 60px;
    }
    .theme-img {
      width: 100%;
      border-radius: 8px;
    }

    .theme-name {
      color: #42444c;
      margin-top: 8px;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }

    .theme-hashtag {
      display: initial;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #aaabb3;
      margin: 2px 2px 0 0;
      word-break: break-all;
    }

    .theme-bottom-container {
      display: flex;
      justify-content: space-between;
      margin-top: 3px;
      font-size: 12px;
      line-height: 18px;

      .theme-download-container {
        display: inherit;

        .theme-download {
          color: #aaabb3;
        }
      }

      .theme-price-container {
        display: inherit;

        .theme-price {
          color: #7dc9fc;
        }
      }

      img {
        width: 12px;
        height: 12px;
        margin: auto 3px auto auto;
      }
    }

    span {
      display: block;
    }
  }
`;

export default CategoryTheme;
