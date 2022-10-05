import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoryNav = () => {
  const [category, setCategory] = useState([]);
  const [activeIndex, setActiveIndex] = useState('');
  useEffect(() => {
    axios.get('https://api.plkey.app/theme/category').then((res) => {
      setCategory(res.data.data);
      console.log(res);
    });
  }, []);

  const tabClickHandler = (idx) => {
    setActiveIndex(idx);
  };

  return (
    <Container>
      <div>
        <div className='logoArea'>
          <Link to='/'>
            <Image src={require('../../asset/image/logo.png')} />
          </Link>
        </div>
        <h3>취향대로 골라보기</h3>
        <nav>
          <ul>
            {category.map((data, idx) => {
              return (
                <li key={idx} className={activeIndex === data ? 'isActive' : ''} onClick={() => tabClickHandler(data)}>
                  <span> {data}</span>
                </li>
              );
            })}
          </ul>
        </nav>
        {category
          .filter((data) => activeIndex === data)
          .map((data) => {
            return <div onClick={() => tabClickHandler(data)}>{data}</div>;
          })}
        <div className='test'>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
          <p>ss</p>
        </div>
      </div>
    </Container>
  );
};
const Image = styled.img`
  display: block;
  margin-top: 8px;
  max-width: 136px;
`;
const Container = styled.div`
  .test {
    padding: 16px;
  }
  .logoArea {
    position: fixed;
    height: 64px;
    padding: 12px 16px;
    background: #fff;
  }
  h3 {
    padding: 80px 16px 16px;
    font-size: 16px;
    font-weight: 700;
    color: #42444c;
  }
  nav {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 64px;
    width: 100%;
    background: #fff;
    overflow-x: auto;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
    ul {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      .isActive {
        color: #ff417d;
        font-weight: 700;
        span {
          padding: 0 0 5px 0;
          border-bottom: 2px solid #ff417d;
        }
      }
      li {
        padding: 8px 10px;
        text-align: center;
        color: #aaabb3;
        white-space: nowrap;
        cursor: pointer;
        :nth-child(1) {
          padding-left: 16px;
        }
        :nth-last-child(1) {
          padding-right: 16px;
        }
      }
    }
  }
`;
export default CategoryNav;
