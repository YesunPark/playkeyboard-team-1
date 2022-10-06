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
      <div className='logo-area d-flex-between'>
        <Link to='/category' className='logo'>
          <Img alt='' src={require('../../assets/images/logo.png')} />{' '}
        </Link>
        <Link to='' className='magnifier'>
          <Img alt='' src={require('../../assets/images/magnifier.png')} />
        </Link>
      </div>
      <h3 className='sub-title'>취향대로 골라보기</h3>
      <nav className='d-flex-between'>
        <ul className='d-flex-between'>
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
    </Container>
  );
};
const Img = styled.img`
  display: block;
  width: 100%;
`;
const Container = styled.div`
  .d-flex-between {
    display: flex;
    justify-content: space-between;
  }
  .logo-area {
    position: fixed;
    top: 0px;
    align-items: center;
    width: 100%;
    max-width: 640px;
    height: 64px;
    padding: 12px 16px;
    background: #fff;
    .logo {
      max-width: 136px;
    }
    .magnifier {
      width: 5.2%;
    }
  }
  h3 {
    padding: 80px 16px 16px;
    font-size: 1em;
    font-weight: 700;
    color: #42444c;
  }
  nav {
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
      font-size: 14px;
      min-width: 640px;
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
        font-size: 0.88 em;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
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
