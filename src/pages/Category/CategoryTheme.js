import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CategoryTheme = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const data = await axios.get('https://api.plkey.app/theme?category=LIVE');
      setList(data);
    };
    getList();
  }, []);

  return (
    <>
      {list.length !== 0 &&
        list.data.data.map((data) => {
          return (
            <div className='theme-container'>
              <img src={data.imageUrl} alt='image' className='theme-img' />
              <span className='theme-name'>{data.name}</span>
              <span className='theme-hashtag'>{data.hashtag}</span>
              <span className='theme-download'>{data.downloads}</span>
              <span className='theme-price'>{data.price}</span>
            </div>
          );
        })}
    </>
  );
};

export default CategoryTheme;
